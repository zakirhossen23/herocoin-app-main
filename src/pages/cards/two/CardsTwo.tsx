import MenuTop from '../../../assets/menu_top.svg';
import CardProgressTwo from '../../../assets/card_progress_two.svg';
import SaveCard from '../../../assets/save_card.svg';
import Next from '../../../assets/next.svg';

import './CardsTwo.css';
import { useHistory } from 'react-router-dom';
import { LabelInput } from '../../../components/LabelInput/LabelInput';
import { Payments } from '../../auth/savedvariable';

export function CardsTwo() {
    let history = useHistory();

    return (
        <div className="page cards-two">
            <div className="top">
                <img src={MenuTop} />
            </div>
            <div className="container">
                <img className="progress" src={CardProgressTwo} />
                <div className="form">
                    <LabelInput label="Name on card" id="cardname" />
                    <LabelInput label="Card number" id="cardnumber" />
                    <div style={{ display: 'flex' }}>
                        <LabelInput label="Expiry Date" id="expirydate" />
                        <span style={{ width: '30px' }} />
                        <LabelInput label="CVV" type="password" id="cvv" />
                    </div>
                    <img src={SaveCard} />
                </div>
                <span className="spacer"></span>
                <img onClick={() => {
                    Payments.nameoncard = (document.getElementById("cardname") as HTMLInputElement).value;
                    Payments.cardnumber = (document.getElementById("cardnumber") as HTMLInputElement).value;
                    Payments.expirydate = (document.getElementById("expirydate") as HTMLInputElement).value;
                    Payments.cvv = (document.getElementById("cvv") as HTMLInputElement).value;

                    history.push("/cards/3");


                }} className="next" src={Next} />
            </div>
        </div>
    );
}
