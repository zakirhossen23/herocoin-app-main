import BackButton from '../../assets/back_button.svg';
import ProductsMenu from '../../assets/products_menu.svg';
import Tabbar from '../../assets/tabbar.svg';
import ProducsOne from '../../assets/products_one.svg';
import ProducsTwo from '../../assets/products_two.svg';
import ProducsThree from '../../assets/products_three.svg';
import ProducsFour from '../../assets/products_four.svg';
import ShoppingCart from '../../assets/shopping_cart.svg';
import './Order.css';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

export function Order() {
    const [currentImage, setCurrentImage] = useState<number>(0)
    let history = useHistory();


    return (
        <div className="page order">
             <div className="menu">
                 <img onClick={() => history.goBack()} src={BackButton}/>
                 <div onClick={() => {
                     history.push("/prescription");
                 }} className="shopping-cart">
                    <img src={ShoppingCart}/>
                    <div className="count">{currentImage}</div>
                 </div>
             </div>
             <img className="products-menu" src={ProductsMenu}/>

            <div onClick={() => {
                if(currentImage < 3) {
                    setCurrentImage(currentImage+1);
                }
            }} className="products-container">
                <img style={{zIndex: currentImage == 0 ? 1 : 0}} src={ProducsOne} />
                <img style={{zIndex: currentImage == 1 ? 1 : 0}} src={ProducsTwo} />
                <img style={{zIndex: currentImage == 2 ? 1 : 0}} src={ProducsThree} />
                <img style={{zIndex: currentImage == 3 ? 1 : 0}} src={ProducsFour} />
            </div>

             <img className="tabbar" src={Tabbar} />
        </div>
    );
}
  