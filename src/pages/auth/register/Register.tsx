import { AuthTemplate } from "../template/Template";
import Chat from '../../../assets/chat.svg'
import { Button } from "../../../components/Button/Button";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from "react";

import './Register.css';
import { useHistory } from "react-router";
export function Register() {
    const history = useHistory();
    const [phoneNumber, setPhoneNumber] = useState<string>('');

    return (
        <AuthTemplate className="register">
            <div className="title">Register</div>
            <img className="image" src={Chat} />
            <div className="subtitle">
                Enter phone number to continue the registration
            </div>
            <PhoneInput
                international
                defaultCountry="NL"
                value={phoneNumber}
                onChange={(e) => {
                    ///setPhoneNumber(e)
                }} />
            <Button onClick={() => {
                history.push({ pathname: '/verify', search: history.location.search })
            }}>Continue</Button>
        </AuthTemplate>
    );
}
