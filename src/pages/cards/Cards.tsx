import MenuTop from '../../assets/menu_top.svg';
import './Cards.css';
import { useHistory } from 'react-router-dom';

export function Cards() {
    let history = useHistory();


    return (
        <div className="page cards">
            <div className="top">
                <img src={MenuTop} />
            </div>
            <div className="container">
                <div onClick={() => history.push("/cards/1")} className="action">Connect card</div>
                <div onClick={() => history.push("/donateblockchain")} className="action">Pay via Crypto wallet</div>

            </div>

        </div>
    );
}
