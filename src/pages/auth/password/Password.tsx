import React from "react";
import { useHistory } from "react-router";
import { Button } from "../../../components/Button/Button";
import { AuthTemplate } from "../template/Template";
import Lock from '../../../assets/secure.svg'
import { Pin } from "../../../components/Pin/Pin";
import { Input } from "../../../components/Input/Input";
import qs from 'query-string';

export function Password() {
    const history = useHistory();

    return (
        <AuthTemplate className="register">
            <div className="title">Set your pasword</div>
            <img className="image" src={Lock} />
            <div className="subtitle" style={{marginBottom: '8px'}}>
                Please enter a password to secure your account
            </div>
            <Input placeholder="Password" type="password"/>
            <Input placeholder="Confirm password" type="password"/>
            <Button onClick={() => {
                const {context} = qs.parse(history.location.search)
                if(context && context == "app") {
                    history.push("/welcome/shara")
                }else {
                    history.push("/welcome/eliy")
                }
            }}>Continue</Button>
        </AuthTemplate>
    );
}
  