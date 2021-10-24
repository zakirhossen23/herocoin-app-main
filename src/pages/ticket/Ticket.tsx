import BackButton from '../../assets/back_button.svg';
import TicketSvg from '../../assets/ticket.svg';
import './Ticket.css';
import { useHistory } from 'react-router-dom';

export function Ticket() {
    let history = useHistory();


    return (
        <div className="page ticket">
            <div className="top">
                <img onClick={() => history.goBack()} src={BackButton}/>
            </div>
            <img onClick={() => history.push("/ticket")} className="content" src={TicketSvg}/>
            <span className="spacer"></span>
            <div className="footer-button">Finish and save as picture</div> 
            <div className="footer-button">Finish</div> 
        </div>
    );
}
  