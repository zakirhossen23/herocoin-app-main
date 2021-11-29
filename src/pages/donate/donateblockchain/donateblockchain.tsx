import MenuTop from '../../../assets/menu_top_wallet.svg';
import Tabbar from '../../../assets/tabbar.svg';
import To from '../../../assets/to.svg';
import Coin from '../../../assets/celocoin.png';
import HeroCoin from '../../../assets/hero_coin.svg';
import DonateButton from '../../../assets/donate_button.svg';
import './Donate.css';
import { useHistory } from 'react-router-dom';
import React from 'react';
import { ChainId, NetworkNames } from '@celo-tools/use-contractkit';
import { useContractKit as UseContractKit } from '@celo-tools/use-contractkit';
import { ContractKitProvider } from '@celo-tools/use-contractkit';
import App from '../../../App';
import Web3 from "web3";

function WrappedApp() {
    console.log("clicked")

}
export function DonateBlockchain() {
    const output = React.createRef<HTMLInputElement>();
    let history = useHistory();
    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));


    async function connecting() {
        var statusp = (document.getElementById("statusof") as HTMLParagraphElement)
        try {
           
            //Example Private key 0x1ac9a52f7e38bac58e3a6ec55eb74140b73f61a3fc081bb546a5171ebca98e13

            const web3 = new Web3("https://alfajores-forno.celo-testnet.org")
            statusp.innerHTML = "Connecting.... With Celo"
            await sleep(2000)
            let accounts = web3.eth.accounts.privateKeyToAccount((document.getElementById('privatekey') as HTMLInputElement).value)
            statusp.innerHTML = "Connected Successfully!"
            await sleep(2000)
            let account = accounts.address
            statusp.innerHTML = account
            await sleep(1000)
            const ContractKit = require('@celo/contractkit')
            statusp.innerHTML = "Sigining Contract"
            await sleep(2000)
            const kit = ContractKit.newKitFromWeb3(web3);

            let goldtoken = await kit.contracts.getGoldToken()
            kit.connection.addAccount((document.getElementById('privatekey') as HTMLInputElement).value)

            let stabletoken = await kit.contracts.getStableToken()
            let celoBalance = await goldtoken.balanceOf(account)
            await sleep(1000)
            // Transfer CELO from your account to anAddress
            // Specify CELO as the feeCurrency when sending CELO
            statusp.innerHTML = "Transfering Funds..."
            let celotx = await stabletoken.transfer("0x3510AD9B9eb2278872295ea81d0Fe15B2b9b6FA7", kit.web3.utils.toWei('0.00000000005', 'Ether')).send({ from: account })
            await sleep(3000)
            statusp.innerHTML = "Transfer Successful!"

            statusp.innerHTML = "Redirecting..."
            await sleep(1000)
            history.push("/thank-you")
        } catch (e) {
            statusp.innerHTML = "Failed! Please try again."
            
        }


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
                        <img className='imageicon' src={Coin} />
                        <input type="number" onChange={e => {
                            if (output.current) {
                                output.current.value = e.target.value
                            }
                        }} />
                    </div>
                    <div className="box">
                        <div className='statusbox'>
                            <p className='statustext' id='statusof'>Status</p>
                        </div>

                    </div>
                </div>
                <img onClick={() => {
                    connecting()


                }} className="button" id="sendEthButton" src={DonateButton} />
                <span className="spacer"></span>
                <img src={Tabbar} />
            </div>
        </div>
    );
}
