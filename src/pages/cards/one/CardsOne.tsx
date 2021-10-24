import MenuTop from '../../../assets/menu_top.svg';
import CardProgressOne from '../../../assets/card_progress_one.svg';
import Next from '../../../assets/next.svg';

import './CardsOne.css';
import { useHistory } from 'react-router-dom';
import { LabelInput } from '../../../components/LabelInput/LabelInput';

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
                    <LabelInput label="Street 1" />
                    <LabelInput label="Street 2" />
                    <LabelInput label="City" />
                    <div style={{display: 'flex'}}>
                        <LabelInput label="State" />
                        <span style={{width: '30px'}}/>
                        <LabelInput label="Country" />
                    </div>
                </div>
                <span className="spacer"></span>
                <img onClick={() => history.push("/cards/2")} className="next" src={Next} />
            </div>
        </div>
    );
}
  