
import { ReactChild, ReactFragment, ReactPortal } from "react";
import { useHistory } from "react-router-dom";
import './NFTALL.css';
import { allnft } from "./storing";

export function NFTALL() {
    const allimage = new Array;
    let history = useHistory();
    async function creating() {
        for (let i = 0; i < Number(allnft.length); i++) {
            var newelement = document.createElement("img") as HTMLImageElement
            newelement.src = "/assets/NFT/" + allnft[i] +".png"
            newelement.className = "imageframe"
            allimage.push(newelement.outerHTML)      
        }

    }
    creating()
    async function creatingimages() {
        for (let i = 0; i < Number(allnft.length); i++) {
            (document.getElementById('collectedall') as HTMLDivElement).appendChild( allimage[i] as HTMLImageElement)
 
        }

          }
    return (
        <div className="page NFT">
            <div className="container">
                <div className="title">All collected NFT</div>
                <div id="collectedall">
               
                </div>

                <div onClick={() =>{creatingimages()} } className="footer-button">Get it</div>
            </div>
        </div>
    );

}