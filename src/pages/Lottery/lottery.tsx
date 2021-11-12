import { useHistory } from 'react-router-dom';
import HomeImg from '../../assets/home.png';
import './lottery.css';
export function Lottery() {
    let history = useHistory();


    return (
        <div className="home">
            <img className="homeimg" src={HomeImg} />
        </div>
    );
}
