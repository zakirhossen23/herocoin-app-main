import BackButton from '../../assets/back_button.svg';
import TimeSvg from '../../assets/time.svg';
import './Time.css';
import { useHistory } from 'react-router-dom';

export function Time() {
    let history = useHistory();


    return (
        <div className="page time">
            <div className="top">
                <img onClick={() => history.goBack()} src={BackButton}/>
            </div>
            <span className="spacer"></span>
            <img className="content" src={TimeSvg}/>
            <span className="spacer"></span>
            <div onClick={() => {
                if(history.location.search.indexOf("order") !== -1) {
                    history.push({pathname: "/order/accept"})
                }else {
                    history.push({pathname: "/doctors", search: history.location.search})
                }
            }} className="footer-button">Next</div>
        </div>
    );
}
  