import BackButton from '../../assets/back_button.svg';
import DoctorsSvg from '../../assets/doctors.svg';
import './Doctors.css';
import { useHistory } from 'react-router-dom';

export function Doctors() {
    let history = useHistory();


    return (
        <div className="page doctors">
            <div className="top">
                <img onClick={() => history.goBack()} src={BackButton}/>
            </div>
            <div style={{overflow: 'auto'}}>
            <img className="content" src={DoctorsSvg}/> 
            </div>
        </div>
    );
}
  