import MenuTop from '../../../assets/menu_top.svg';
import CardProgressTwo from '../../../assets/card_progress_three.svg';
import CardInfo from '../../../assets/card_info.svg';
import Next from '../../../assets/next.svg';
import tick from '../../../assets/tick.png';
import './CardsThree.css';
import { useHistory } from 'react-router-dom';
import { LabelInput } from '../../../components/LabelInput/LabelInput';
import { address } from '../../auth/savedvariable';
import { detectedimage } from './carddetect';



export function CardsThree() {
    let history = useHistory();

    return (
        <div className="page cards-three">
            <div className="top">
                <img src={MenuTop} />
            </div>
            <div className="container">
                <img className="progress" src={CardProgressTwo} />
                <div className="place">
                    <div className="addressplace">
                        <div className='header'>
                            <h2>Shipping Address</h2>
                            <img src={tick} />
                        </div>

                        <h3 className="address">{address.street1 + ", " + address.street2 + ", " + address.state + ", " + address.city + ", " + address.Country}</h3><a className="change" href="1">Change</a></div><hr /><div className="addressplace" >
                        <div className='header'>
                            <h2>Payment</h2>
                            <img src={tick} />
                        </div>
                        <div className="payment">{detectedimage()}

                        </div><a className="change" href="2">Change</a></div></div>
                <span className="spacer"></span>
                <img onClick={() => history.push({ pathname: '/donate' })} className="next" src={Next} />
            </div>
        </div>
    );
}
