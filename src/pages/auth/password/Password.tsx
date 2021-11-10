import React from "react";
import { useHistory } from "react-router";
import { Button } from "../../../components/Button/Button";
import { AuthTemplate } from "../template/Template";
import Lock from '../../../assets/secure.svg'
import { Pin } from "../../../components/Pin/Pin";
import "../../../components/Input/Input.css";
import qs from 'query-string';

export function Password() {
    const history = useHistory();
    var passwordtext = "";
    var passwordconfirm = "";
    return (
        <AuthTemplate className="register">
            <div className="title">Set your pasword</div>
            <img className="image" src={Lock} />
            <div className="subtitle" style={{ marginBottom: '8px' }}>
                Please enter a password to secure your account
            </div>
            <div className="input">
                <input type="password" placeholder="Password" id="password" />
            </div>
            <div className="input">
                <input placeholder="Confirm password" id="confirmpassword" type="password" />
            </div>

            <div id="message"></div>
            <Button onClick={() => {
                const messageplace = document.getElementById("message");
                passwordtext = (document.getElementById("password") as HTMLInputElement).value;
                passwordconfirm = (document.getElementById("confirmpassword") as HTMLInputElement).value;
                if (passwordtext === passwordconfirm) {
                    history.push("/name")

                } else {
                    if (messageplace)
                        messageplace.innerHTML = "Password is not same";
                }

            }}>Continue</Button>
        </AuthTemplate>
    );
}
