import UploadPrescription from '../../assets/upload_prescription.svg';
import ScheduleCall from '../../assets/schedule_call.svg';
import './Prescription.css';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

export function Prescription() {
    let history = useHistory();


    return (
        <div className="page prescription">
            <div className="container">
                <div className="title">Prescription</div>
                <div className="description">It is advised to speak to a medical professional before consuming the pill</div>

                <div className="subheader">I have a prescription</div>
                <img className="button" src={UploadPrescription}/>
                <div className="subheader">I don't have a prescription</div>
                <img onClick={() => history.push("/date")} className="button" src={ScheduleCall}/>

                <div onClick={() => history.push("/explanation")} className="footer-button">I know it’s important</div>
            </div>
        </div>
    );
}
  