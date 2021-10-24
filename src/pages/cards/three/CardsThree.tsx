import MenuTop from '../../../assets/menu_top.svg';
import CardProgressTwo from '../../../assets/card_progress_three.svg';
import CardInfo from '../../../assets/card_info.svg';
import Next from '../../../assets/next.svg';

import './CardsThree.css';
import { useHistory } from 'react-router-dom';
import { LabelInput } from '../../../components/LabelInput/LabelInput';

export function CardsThree() {
    let history = useHistory();

    return (
        <div className="page cards-three">
            <div className="top">
                <img src={MenuTop} />
            </div>
            <div className="container">
                <img className="progress" src={CardProgressTwo} />
                <img src={CardInfo} />
                <span className="spacer"></span>
                <img onClick={() => history.push({pathname: '/donate'})} className="next" src={Next} />
            </div>
        </div>
    );
}
  