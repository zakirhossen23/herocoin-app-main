import UploadExplanation from '../../assets/ring.png';
import ScheduleCall from '../../assets/schedule_call.svg';
import './Explanation.css';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

export function Explanation() {
    const [currentImage, setCurrentImage] = useState<number>(0)
    let history = useHistory();


    return (
        <div className="page explanation">
            <div className="container">
                <div className="title">Prevention ring</div>
                <div className="description">For the ring to work effectively, it is important that you know how to wear it</div>


                <img className="button" src={UploadExplanation}/>

                <div className="footer-button">I would like more information</div>
                <div onClick={() => history.push("/cart")} className="footer-button">I know how to wear it</div>
            </div>
        </div>
    );
}
  