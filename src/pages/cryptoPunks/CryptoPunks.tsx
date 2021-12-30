import { useHistory } from "react-router-dom";
import './CryptoPunks.css';
import { allcryptopunks } from "./CryptoPunksstoring";
import { setingid } from "./CryptoPunksall";

export function CryptoPunks() {
    let history = useHistory();

    var imagesource = '';
    var storenumber = 0;
    async function creating() {
        var number = Math.floor(1000 + Math.random() * 3000);
        storenumber = number
        imagesource = 'https://www.larvalabs.com/public/images/cryptopunks/punk' + Number(number) + '.png'

    }
    creating()

    return (
        <div className="page CRYPTOPUNKS">
            <div className="container">
                <div className="title">CryptoPunks</div>

                <img id="cryptopunksimage" src={imagesource} className="imageframe"></img>

                <div onClick={() => {
                    allcryptopunks.push(storenumber);
                    history.push('CRYPTOPUNKSALL'); setingid(0)
                }} className="footer-button">Get it</div>
            </div>
        </div>
    );

}