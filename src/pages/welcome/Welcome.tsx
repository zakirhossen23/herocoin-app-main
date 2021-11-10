import Bottom from '../../assets/bottom_1.svg';
import Arrow from '../../assets/arrow.svg';
import './Welcome.css';
import { useHistory } from 'react-router-dom';
import { users } from '../auth/savedvariable';

export function Welcome() {
    let history = useHistory();


    return (
        <div className="page welcome">
            <div className="top">
                <div className="welcome">Welcome</div>
                <div className="name">{users.firstname}</div>
            </div>
            <div className="bottom">
                df           <img className="bottom-background" src={Bottom} />
                <div onClick={() => {

                    history.push("/home")

                }} className="button">
                    <div>Start</div>
                    <img style={{ height: '20px', marginLeft: '8px' }} src={Arrow} />
                </div>
            </div>
        </div>
    );
}
