import { useHistory } from 'react-router-dom';
import HomeImg from '../../assets/home.png';

export function Lottery() {
    let history = useHistory();


    return (
        <div className="home">
            <img className="home" src={HomeImg} />
        </div>
    );
}
