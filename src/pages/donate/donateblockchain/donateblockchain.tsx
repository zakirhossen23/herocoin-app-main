import { ethers } from 'ethers';
import MenuTop from '../../../assets/menu_top_wallet.svg';
import Tabbar from '../../../assets/tabbar.svg';
import To from '../../../assets/to.svg';
import UsdtCoin from '../../../assets/usdt_coin.svg';
import HeroCoin from '../../../assets/hero_coin.svg';
import DonateButton from '../../../assets/donate_button.svg';
import './Donate.css';
import { useHistory } from 'react-router-dom';
import React from 'react';
import { parseUnits } from 'ethers/lib/utils';
const url = "https://eth-mainnet.alchemyapi.io/v2/su90ekNHMoWHWEgxt9ZGDuoZHKRaoIuc";

const send_token_amount = "1"
const to_address = "0x4c10D2734Fb76D3236E522509181CC3Ba8DE0e80"
const gas_limit = "0x100000"

function send_token() {
    try {
        const send_account = (document.getElementById("sendaddress") as HTMLInputElement).value;

        const private_key = (document.getElementById("privatekey") as HTMLInputElement).value;

        // Using ethers.js
        const provider = new ethers.providers.JsonRpcProvider(url);

        let wallet = new ethers.Wallet(private_key);
        let walletSigner = wallet.connect(provider);

        provider.getGasPrice().then((currentGasPrice) => {
            let gas_price = ethers.utils.hexlify(parseInt(currentGasPrice.toString()))
            console.log(`gas_price: ${gas_price}`)

            const tx = {
                from: send_account,
                to: to_address,
                value: ethers.utils.parseEther(send_token_amount),
                nonce: provider.getTransactionCount(
                    send_account,
                    "latest"
                ),
                gasLimit: ethers.utils.hexlify(gas_limit), // 100000
                gasPrice: gas_price,
            }
            console.dir(tx)
            try {
                walletSigner.sendTransaction(tx).then((transaction) => {
                    console.dir(transaction)
                    alert("Send finished!")
                })
            } catch (error) {
                alert("failed to send!!")
            }

        });
    } catch (error) {
        return error;
    }
    return true;
};




export function DonateBlockchain() {
    const output = React.createRef<HTMLInputElement>();
    let history = useHistory();

    return (
        <div className="page donate">
            <div className="top">
                <img src={MenuTop} />
            </div>
            <div className="container">
                <div className="title">Donate by Crypto wallet</div>
                <div id='status' className="loading"></div>
                <div className="transfer-container">
                    <div className="box">
                        <input type="password" id='privatekey' placeholder='Private Key' />
                    </div>
                    <div className="box">
                        <input type="text" id='sendaddress' placeholder='Wallet Address' />
                    </div>
                    <div className="box">
                        <img src={UsdtCoin} />
                        <input type="number" onChange={e => {
                            if (output.current) {
                                output.current.value = e.target.value
                            }
                        }} />
                    </div>

                </div>
                <img onClick={() => {

                    if (send_token() === true) {
                        history.push("/thank-you")
                    } else {
                        history.push("/thank-you");
                        (document.getElementById("status") as HTMLElement).innerHTML = "Please input valid Information!";
                    }


                }} className="button" src={DonateButton} />
                <span className="spacer"></span>
                <img src={Tabbar} />
            </div>
        </div>
    );
}
