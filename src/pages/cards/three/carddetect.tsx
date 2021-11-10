import CardInfo from '../../../assets/card_info.svg';
import { Payments } from '../../auth/savedvariable';
import mastercard from '../../../assets/mastercardlogo.png';
import visacard from '../../../assets/visacardlogo.png';
export function detectedimage() {
    var img = null;
    if (Payments.nameoncard.includes("master")) {

        return <div className='containingpayment'>
            <img src={mastercard} className="paymenticon" />
            <p className='cardname'>Master Card</p>
            <p className='hidden'>**** **** **** {Payments.cardnumber.trim().substring(11, 16)}</p>
        </div>;
    } else if (Payments.nameoncard.includes("visa")) {
        return visacard;
    }


}