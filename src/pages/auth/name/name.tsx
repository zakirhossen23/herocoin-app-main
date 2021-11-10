import { AuthTemplate } from "../template/Template";
import { Button } from "../../../components/Button/Button";
import { users } from "../savedvariable"
import './name.css';
import { useHistory } from "react-router";
export function Name() {
    const history = useHistory();

    return (
        <AuthTemplate className="register">

            <div className="subtitle">
                Please enter your first name and last name below
            </div>
            <div className="input">
                <input placeholder="First name" id="firstname" />
            </div>
            <div className="input">
                <input placeholder="Last name" id="lastname" />
            </div>
            <Button onClick={() => {
                users.firstname = (document.getElementById("firstname") as HTMLInputElement).value
                users.lastname = (document.getElementById("lastname") as HTMLInputElement).value
                history.push({ pathname: '/welcome', search: history.location.search })
            }}>Continue</Button>
        </AuthTemplate>
    );
}
