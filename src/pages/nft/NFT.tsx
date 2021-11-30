import { useHistory } from "react-router-dom";
import './NFT.css';
import { deployNFT, mintNFTWithUri, mintMultipleNFTWithUri } from '@tatumio/tatum';
import { allnft } from "./storing";
import { setingid } from "./nftall";

export function NFT() {
    let history = useHistory();
    
    var imagesource = '';
    var storenumber = 0;
    async function creating() {
     var number =   Math.floor(Math.random() * 19); 
     storenumber = number
     imagesource= '/assets/NFT/'+ Number(number)+'.png'

    }
    creating()

       return (
        <div className="page NFT">
            <div className="container">
                <div className="title">NFT</div>
                
                <img id="nftimage" src={imagesource} className="imageframe"></img>

                <div onClick={() =>{allnft.push(storenumber);
                    history.push('NFTALL'); setingid(0)} } className="footer-button">Get it</div>
            </div>
        </div>
    );

}