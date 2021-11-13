import { ethers } from 'ethers';
import MenuTop from '../../assets/menu_top.svg';
import Tabbar from '../../assets/tabbar.svg';
import To from '../../assets/to.svg';
import UsdtCoin from '../../assets/usdt_coin.svg';
import HeroCoin from '../../assets/hero_coin.svg';
import DonateButton from '../../assets/donate_button.svg';
import './Donate.css';
import { useHistory } from 'react-router-dom';
import React from 'react';
import { main2 } from './client/src/main'

import {
    establishConnection,
    checkProgram,
    establishPayer,
    reportPrice,
    getPrice
} from './client/src/solanalinkchain';
import { parseUnits } from 'ethers/lib/utils';
const url = "https://eth-mainnet.alchemyapi.io/v2/su90ekNHMoWHWEgxt9ZGDuoZHKRaoIuc";
async function blockchain() {
    // Using ethers.js
    const provider =
        new ethers.providers.JsonRpcProvider(url);
    // Use the mainnet
    const network = "homestead";

    // Specify your own API keys
    // Each is optional, and if you omit it the default
    // API key for that service will be used.
    ethers.getDefaultProvider(network, {

        alchemy: "https://eth-mainnet.alchemyapi.io/v2/su90ekNHMoWHWEgxt9ZGDuoZHKRaoIuc"

    });
    // The provider also allows signing transactions to
    // send ether and pay to change state within the blockchain.
    // For this, we need the account signer...
    const signer = provider.getSigner()
    // Look up the current block number
    await provider.getBlockNumber()
    // 13451439

    // Get the balance of an account (by address or ENS name, if supported by network)
    const balance = await provider.getBalance("ethers.eth")
    // { BigNumber: "2337132817842795605" }

    // Often you need to format the output to something more user-friendly,
    // such as in ether (instead of wei)
    ethers.utils.formatEther(balance)
    // '2.337132817842795605'

    ethers.utils.parseEther("1.0")
    const walet = ethers.Wallet.createRandom;
    // Create a wallet instance from a mnemonic...
    var mnemonic = "announce room limb pattern dry unit scale effort smooth jazz weasel alcohol"
    var walletMnemonic = ethers.Wallet.fromMnemonic(mnemonic)

    // ...or from a private key
    var walletPrivateKey = new ethers.Wallet(walletMnemonic.privateKey)

    console.log(walletMnemonic.address === walletPrivateKey.address);
    // true

    // The address as a Promise per the Signer API
    await walletMnemonic.getAddress()
    // '0x71CB05EE1b1F506fF321Da3dac38f25c0c9ce6E1'

    // A Wallet address is also available synchronously
    console.log(walletMnemonic.address)
    // '0x71CB05EE1b1F506fF321Da3dac38f25c0c9ce6E1'

    // The internal cryptographic components
    console.log(walletMnemonic.privateKey)
    // '0x1da6847600b0ee25e9ad9a52abbd786dd2502fa4005dd5af9310b7cc7a3b25db'
    console.log(walletMnemonic.publicKey)
    // '0x04b9e72dfd423bcf95b3801ac93f4392be5ff22143f9980eb78b3a860c4843bfd04829ae61cdba4b3b1978ac5fc64f5cc2f4350e35a108a9c9a92a81200a60cd64'

    // The wallet mnemonic
    console.log(walletMnemonic.mnemonic)
    // {
    //   locale: 'en',
    //   path: "m/44'/60'/0'/0/0",
    //   phrase: 'announce room limb pattern dry unit scale effort smooth jazz weasel alcohol'
    // }


    // Signing a message
    await walletMnemonic.signMessage("Hera Coin")
    // '0x14280e5885a19f60e536de50097e96e3738c7acae4e9e62d67272d794b8127d31c03d9cd59781d4ee31fb4e1b893bd9b020ec67dfa65cfb51e2bdadbb1de26d91c'

    var tx = {
        to: "0x8ba1f109551bD432803012645Ac136ddd64DBA72",
        value: ethers.utils.parseEther("1.0")
    }
    try {
        // Signing a transaction
        await walletMnemonic.signTransaction(tx)
        // '0xf865808080948ba1f109551bd432803012645ac136ddd64dba72880de0b6b3a7640000801ca0918e294306d177ab7bd664f5e141436563854ebe0a3e523b9690b4922bbb52b8a01181612cec9c431c4257a79b8c9f0c980a2c49bb5a0e6ac52949163eeb565dfc'

        // The connect method returns a new instance of the
        // Wallet connected to a provider
        var wallet = walletMnemonic.connect(provider)
        console.log("sent")
        // Querying the network
        await wallet.getBalance(); console.log("sent1")
        // { BigNumber: "42" }  
        await wallet.getTransactionCount();
        // 0

        // Sending ether
        await wallet.sendTransaction(tx)
        console.log(wallet);
    } catch (error) {
        console.log("rejected")
    }
    try {
        const bytecode = "0x608060405234801561001057600080fd5b506040516103bc3803806103bc83398101604081905261002f9161007c565b60405181815233906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a333600090815260208190526040902055610094565b60006020828403121561008d578081fd5b5051919050565b610319806100a36000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063313ce5671461005157806370a082311461006557806395d89b411461009c578063a9059cbb146100c5575b600080fd5b604051601281526020015b60405180910390f35b61008e610073366004610201565b6001600160a01b031660009081526020819052604090205490565b60405190815260200161005c565b604080518082018252600781526626bcaa37b5b2b760c91b6020820152905161005c919061024b565b6100d86100d3366004610222565b6100e8565b604051901515815260200161005c565b3360009081526020819052604081205482111561014b5760405162461bcd60e51b815260206004820152601a60248201527f696e73756666696369656e7420746f6b656e2062616c616e6365000000000000604482015260640160405180910390fd5b336000908152602081905260408120805484929061016a9084906102b6565b90915550506001600160a01b0383166000908152602081905260408120805484929061019790849061029e565b90915550506040518281526001600160a01b0384169033907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a350600192915050565b80356001600160a01b03811681146101fc57600080fd5b919050565b600060208284031215610212578081fd5b61021b826101e5565b9392505050565b60008060408385031215610234578081fd5b61023d836101e5565b946020939093013593505050565b6000602080835283518082850152825b818110156102775785810183015185820160400152820161025b565b818111156102885783604083870101525b50601f01601f1916929092016040019392505050565b600082198211156102b1576102b16102cd565b500190565b6000828210156102c8576102c86102cd565b500390565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220d80384ce584e101c5b92e4ee9b7871262285070dbcd2d71f99601f0f4fcecd2364736f6c63430008040033";

        // A Human-Readable ABI; we only need to specify relevant fragments,
        // in the case of deployment this means the constructor
        const abi = [
            "constructor(uint totalSupply)"
        ];

        const factory = new ethers.ContractFactory(abi, bytecode, signer)

        // Deploy, setting total supply to 100 tokens (assigned to the deployer)
        const contract = await factory.deploy(parseUnits("100"));

        // The contract is not currentl live on the network yet, however
        // its address is ready for us
        console.log(contract.address)
        // '0xd1aBE04c4F9d685842863ED246147EaBABC45e6D'

        // Wait until the contract has been deployed before interacting
        // with it; returns the receipt for the deployemnt transaction
        await contract.deployTransaction.wait();
    } catch (error) {
        console.log("error")
    }

}

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
                <img onClick={async () => {

                    { document.getElementsByClassName("title")[0].innerHTML = "Loading..."; await blockchain() }
                    main2()
                    history.push("/lottery")
                }} className="button" src={DonateButton} />
                <span className="spacer"></span>
                <img src={Tabbar} />
            </div>
        </div>
    );
}
