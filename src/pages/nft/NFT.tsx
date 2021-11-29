import { useHistory } from "react-router-dom";
import './NFT.css';
export function NFT() {
    let history = useHistory();


    return (
        <div className="page NFT">
            <div className="container">
                <div className="title">Prevention ring</div>
                <div className="description">For the ring to work effectively, it is important that you know how to wear it</div>

                <div className="footer-button">I would like more information</div>
                <div onClick={() => history.push("/cart")} className="footer-button">I know how to wear it</div>
            </div>
        </div>
    );

}