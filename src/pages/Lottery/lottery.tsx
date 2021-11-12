import { useHistory } from 'react-router-dom';
import HomeImg from '../../assets/home.png';
import './lottery.css';
import homeicon from './stuff/homeicon.png';
import donateicon from './stuff/donateicon.svg';
import insighticon from './stuff/insighticon.svg';
import './stuff/taskbar.css';
export function Lottery() {
    let history = useHistory();

    return (
        <div className="home">
            <img className="homeimg" src={HomeImg} />

            <div className="taskbarstyle">
                <div className='homeiconplace' onClick={() => history.push("/home")}>
                    <img id='home' className='homeiconplaceimg' src={homeicon}></img>
                </div>
                <div className='donateiconplace' onClick={() => history.push("/donate")} >
                    <img id='donate' className='donateiconplaceimg' src={donateicon}></img>
                </div>
                <div className='insightplace' onClick={() => history.push("/stories")} >
                    <img id='insight' className='insightplaceimg' src={insighticon}></img>
                </div>

            </div>
        </div>


    );
}
