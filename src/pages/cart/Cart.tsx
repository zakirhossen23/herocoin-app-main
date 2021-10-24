import TotalCart from '../../assets/total_cart.svg';
import BackButton from '../../assets/back_button.svg';
import './Cart.css';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

export function Cart() {
    const [currentImage, setCurrentImage] = useState<number>(0)
    let history = useHistory();


    return (
        <div className="page cart">
            <div className="top">
                <img onClick={() => history.goBack()} src={BackButton} />
            </div>
            <img className="total" src={TotalCart} />
            <div onClick={() => history.push("/location")} className="footer-button">Next</div>
        </div>
    );
}
  