
import { ReactChild, ReactFragment, ReactPortal } from "react";
import { useHistory } from "react-router-dom";
import './CryptoPunksALL.css';
import { allcryptopunks } from "./CryptoPunksstoring";
export let realid = 0;
export function setingid(toset: Number) {
    realid = Number(toset);
}
export function CryptoPunksALL() {

    const allimage = new Array;
    let history = useHistory();
    async function creating() {
        for (let i = 0; i < Number(allcryptopunks.length); i++) {
            var newelement = document.createElement("img") as HTMLImageElement
            newelement.src = 'https://www.larvalabs.com/public/images/cryptopunks/punk' + allcryptopunks[i] + ".png"
            newelement.className = "cryptopunksallimageframe"
            allimage.push('<div class="cryptopunksallcontainer" >' + newelement.outerHTML + '<p class="cryptopunksalldate">30/11/2021</p></div>')

        }

    }
    creating()

    async function creatingimages() {
        for (let i = 0; i < Number(allcryptopunks.length); i++) {
            (document.getElementById('collectedall') as HTMLDivElement).innerHTML = (document.getElementById('collectedall') as HTMLDivElement).innerHTML + allimage[i]

        }

    }

    setTimeout(function () {
        if (realid === 0) {
            creatingimages();
            realid = 1
        }
    }, 200);
    return (
        <div className="page CRYPTOPUNKS">
            <div className="notimagecontainer">
                <div className="title">Collected CRYPTOPUNKS</div>
                <div id="collectedall" className="collectedall">
                </div>
            </div>
            <div onClick={() => { history.push('stories') }} className="footer-button">Stories</div>
            <div onClick={() => { history.push('home') }} className="footer-button">Donate</div>
        </div>
    );

}