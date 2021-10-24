import BackButton from '../../assets/back_button.svg';
import OrderSvg from '../../assets/order.svg';
import './Accept.css';
import { useHistory } from 'react-router-dom';

export function Accept() {
    let history = useHistory();


    return (
        <div className="page accept">
            <div className="top">
                <img onClick={() => history.goBack()} src={BackButton}/>
            </div>
            <span className="spacer"></span>
            <img onClick={() => history.push("/ticket")} className="content" src={OrderSvg}/>
            <span className="spacer"></span>
            <span className="spacer"></span>
        </div>
    );
}
  