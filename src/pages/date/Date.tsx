import BackButton from '../../assets/back_button.svg';
import DateSvg from '../../assets/month.svg';
import './Date.css';
import { useHistory } from 'react-router-dom';

export function Date() {
    let history = useHistory();


    return (
        <div className="page date">
            <div onClick={() => history.goBack()} className="top">
                <img src={BackButton}/>
            </div>
            <span className="spacer"></span>
            <img className="content" src={DateSvg}/>
            <span className="spacer"></span>
            <div onClick={() => history.push({pathname: "/time", search: history.location.search})} className="footer-button">Next</div>
        </div>
    );
}
  