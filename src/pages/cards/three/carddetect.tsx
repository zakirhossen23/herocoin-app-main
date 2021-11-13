import CardInfo from '../../../assets/card_info.svg';
import { Payments } from '../../auth/savedvariable';
import mastercard from '../../../assets/mastercardlogo.png';
import visacard from '../../../assets/visacardlogo.png';
export function detectedimage() {
    var img = null;


    return <div className='containingpayment'>
        <img src={mastercard} className="paymenticon" />
        <div>
            <p className='cardname'>Master Card</p>
            <p className='hidden'>**** **** **** {Payments.cardnumber.trim().substring(11, 16)}</p>
        </div>
    </div>;


}