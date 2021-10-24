import Bottom from '../../assets/bottom_1.svg';
import Arrow from '../../assets/arrow.svg';
import './Welcome.css';
import { useHistory } from 'react-router-dom';

export function Welcome({name} : {name: string}) {
    let history = useHistory();


    return (
        <div className="page welcome">
            <div className="top">
                <div className="welcome">Welcome</div>
                <div className="name">{name}</div>
            </div>
            <div className="bottom">
                <img className="bottom-background" src={Bottom} />
                <div onClick={() => {
                    if(name.toLowerCase() == "shara") {
                        history.push("/home/app")
                    }else {
                        history.push("/home")
                    }
                }} className="button">
                    <div>Start</div>
                    <img style={{height: '20px', marginLeft: '8px'}} src={Arrow}/>
                </div>
            </div>
        </div>
    );
}
  