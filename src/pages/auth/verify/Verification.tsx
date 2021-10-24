import React from "react";
import { useHistory } from "react-router";
import { Button } from "../../../components/Button/Button";
import { AuthTemplate } from "../template/Template";
import Lock from '../../../assets/lock.svg'
import { Pin } from "../../../components/Pin/Pin";

export function Verification() {
    const history = useHistory();

    return (
        <AuthTemplate className="register">
            <div className="title">Verification</div>
            <img className="image" src={Lock} />
            <div className="subtitle">
                Please enter the code was sent in your phone number
            </div>
            <Pin/>
            <Button onClick={() => {
                history.push({pathname: '/password', search: history.location.search})
            }}>Continue</Button>
        </AuthTemplate>
    );
}
  