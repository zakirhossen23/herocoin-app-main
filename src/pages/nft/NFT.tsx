import { useHistory } from "react-router-dom";
import './NFT.css';
import { deployNFT, mintNFTWithUri, mintMultipleNFTWithUri } from '@tatumio/tatum';

export function NFT() {
    let history = useHistory();
    
    var imagesource = '';
    
    async function creating() {
     var number =   Math.floor(Math.random() * 19); 
     imagesource= '/assets/NFT/'+ Number(number)+'.png'
    }
    creating()

       return (
        <div className="page NFT">
            <div className="container">
                <div className="title">NFT</div>
                <img id="nftimage" src={imagesource} className="imageframe"></img>

                <div onClick={() => history.push('stories')} className="footer-button">Get it</div>
            </div>
        </div>
    );

}