import MenuTop from '../../../assets/menu_top.svg';
import CardProgressTwo from '../../../assets/card_progress_two.svg';
import SaveCard from '../../../assets/save_card.svg';
import Next from '../../../assets/next.svg';

import './CardsTwo.css';
import { useHistory } from 'react-router-dom';
import { LabelInput } from '../../../components/LabelInput/LabelInput';

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
                    <LabelInput label="Name on card" />
                    <LabelInput label="Card number" />
                    <div style={{display: 'flex'}}>
                        <LabelInput label="Expiry Date" />
                        <span style={{width: '30px'}}/>
                        <LabelInput label="CVV" type="password" />
                    </div>
                    <img src={SaveCard} />
                </div>
                <span className="spacer"></span>
                <img onClick={() => history.push("/cards/3")} className="next" src={Next} />
            </div>
        </div>
    );
}
  