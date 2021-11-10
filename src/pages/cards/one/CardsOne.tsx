import MenuTop from '../../../assets/menu_top.svg';
import CardProgressOne from '../../../assets/card_progress_one.svg';
import Next from '../../../assets/next.svg';

import './CardsOne.css';
import { useHistory } from 'react-router-dom';
import { LabelInput } from '../../../components/LabelInput/LabelInput';
import { address } from '../../auth/savedvariable';
export function CardsOne() {
    let history = useHistory();

    return (
        <div className="page cards-one">
            <div className="top">
                <img src={MenuTop} />
            </div>
            <div className="container">
                <img className="progress" src={CardProgressOne} />
                <div className="form">
                    <LabelInput label="Street 1" id="street1" />
                    <LabelInput label="Street 2" id="street2" />
                    <LabelInput label="City" id="city" />
                    <div style={{ display: 'flex' }}>
                        <LabelInput label="State" id="state" />
                        <span style={{ width: '30px' }} />
                        <LabelInput label="Country" id="country" />
                    </div>
                </div>
                <span className="spacer"></span>
                <img onClick={() => {
                    address.street1 = (document.getElementById("street1") as HTMLInputElement).value;
                    address.street2 = (document.getElementById("street2") as HTMLInputElement).value;
                    address.city = (document.getElementById("city") as HTMLInputElement).value;
                    address.state = (document.getElementById("state") as HTMLInputElement).value;
                    address.Country = (document.getElementById("country") as HTMLInputElement).value;
                    history.push("/cards/2");

                }} className="next" src={Next} />
            </div>
        </div>
    );
}
