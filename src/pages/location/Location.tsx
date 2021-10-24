import Maps from '../../assets/maps.png';
import BackButton from '../../assets/back_button.svg';
import './Location.css';
import { useHistory } from 'react-router-dom';

export function Location() {
    let history = useHistory();

    return (
        <div className="page location">
            <div className="top">
                <img onClick={() => history.goBack()} src={BackButton}/>
            </div>
            <img className="maps" src={Maps} />
            <div className="footer">
                <div onClick={() => history.push({pathname: "/date", search: "?context=order"})} className="footer-button">Next</div>
            </div>
        </div>
    );
}
  