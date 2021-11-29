import MenuTop from '../../../assets/menu_top_wallet.svg';
import Tabbar from '../../../assets/tabbar.svg';
import To from '../../../assets/to.svg';
import Coin from '../../../assets/celocoin.png';
import HeroCoin from '../../../assets/hero_coin.svg';
import DonateButton from '../../../assets/donate_button.svg';
import './Donate.css';
import { useHistory } from 'react-router-dom';
import React from 'react';


export  function DonateBlockchain() {
    const output = React.createRef<HTMLInputElement>();
    let history = useHistory();

    async function connecting(){

}

    return (
        <div className="page donate">
            <div className="top">
                <img src={MenuTop} />
            </div>
            <div className="container">
                <div className="title">Donate by Celo wallet</div>
                <div id='status' className="loading"></div>
                <div className="transfer-container">
                    <div className="box">
                        <input type="password" id='privatekey' placeholder='Private Key' />
                    </div>
                    <div className="box">
                        <input type="button" id='sendaddress' value="Connect Wallet Address" />
                    </div>
                    <div className="box">
                        <img src={Coin} />
                        <input type="number" onChange={e => {
                            if (output.current) {
                                output.current.value = e.target.value
                            }
                        }} />
                    </div>

                </div>
                <img onClick={() => {
                        history.push("/thank-you")
                }} className="button" id="sendEthButton" src={DonateButton} />
                <span className="spacer"></span>
                <img src={Tabbar} />
            </div>
        </div>
    );
}