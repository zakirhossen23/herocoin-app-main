import MenuTop from '../../assets/menu_top.svg';
import Tabbar from '../../assets/tabbar.svg';
import To from '../../assets/to.svg';
import UsdtCoin from '../../assets/usdt_coin.svg';
import HeroCoin from '../../assets/hero_coin.svg';
import DonateButton from '../../assets/donate_button.svg';
import {
    establishConnection,
    checkProgram,
    establishPayer,
    reportPrice,
    getPrice
} from './client/src/solanalinkchain';

import './Donate.css';
import { useHistory } from 'react-router-dom';
import React from 'react';
import { main2 } from './client/src/main'
export function Donate() {
    const output = React.createRef<HTMLInputElement>();
    let history = useHistory();

    return (
        <div className="page donate">
            <div className="top">
                <img src={MenuTop} />
            </div>
            <div className="container">
                <div className="title">Donate</div>
                <div className="transfer-container">
                    <div className="box">
                        <img src={UsdtCoin} />
                        <input type="number" onChange={e => {
                            if (output.current) {
                                output.current.value = e.target.value
                            }
                        }} />
                    </div>
                    <img className="icon" src={To} />
                    <div className="box">
                        <img src={HeroCoin} />
                        <input ref={output} type="number" />
                    </div>
                </div>
                <img onClick={() => main2()} className="button" src={DonateButton} />
                <span className="spacer"></span>
                <img src={Tabbar} />
            </div>
        </div>
    );
}
