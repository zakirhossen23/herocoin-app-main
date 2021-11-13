import { useHistory } from 'react-router-dom';
import HomeImg from '../../assets/home.png';
import './lottery.css';
import homeicon from './stuff/homeicon.png';
import donateicon from './stuff/donateicon.svg';
import insighticon from './stuff/insighticon.svg';
import './stuff/taskbar.css';
export function Lottery() {
    let history = useHistory();

    const updateTimer: any = setInterval(() => {
        // Get current date and time
        var today = new Date();

        // Get number of days to Friday
        var dayNum = today.getDay();
        var daysToFri = 5 - (dayNum < 5 ? dayNum : dayNum - 7);

        // Get milliseconds to noon friday
        var fridayNoon = new Date(+today);
        fridayNoon.setDate(fridayNoon.getDate() + daysToFri);
        fridayNoon.setHours(12, 0, 0, 0);
        // Round up ms remaining so seconds remaining matches clock
        var ms = Math.ceil((fridayNoon.getTime() - today.getTime()) / 1000) * 1000;
        var d = ms / 8.64e7 | 0;
        var h = (ms % 8.64e7) / 3.6e6 | 0;
        var m = (ms % 3.6e6) / 6e4 | 0;
        var s = (ms % 6e4) / 1e3 | 0;

        var dayelement = document.getElementById("day");
        var hourelement = document.getElementById("hour");
        var minuteelement = document.getElementById("minute");
        var secondelement = document.getElementById("second");

        if (dayelement !== null) { dayelement.innerHTML = d.toString(); }
        if (hourelement !== null) { hourelement.innerHTML = h.toString(); }
        if (minuteelement !== null) { minuteelement.innerHTML = m.toString(); }
        if (secondelement !== null) { secondelement.innerHTML = s.toString(); }

    }, 1000);

    return (

        <div className="home">
            <img className="homeimg" src={HomeImg} />
            <div className='countnumbers'>
                <p className='countnummber' id='day'>0</p>
                <p className='countnummber' id='hour'>0</p>
                <p className='countnummber' id='minute'>0</p>
                <p className='countnummber' id='second'>0</p>

            </div>

            <div className='winnernumbers'>
                <p className='winnummber'>23</p>
                <p className='winnummber'>34</p>
                <p className='winnummber'>64</p>
                <p className='winnummber'>34</p>
                <p className='winnummber'>98</p>
                <p className='winnummber'>12</p>
                <p className='winnummber'>56</p>

            </div>

            <div className='gotnumbers'>
                <p className='eachnummber'>23</p>
                <p className='eachnummber'>34</p>
                <p className='eachnummber'>64</p>
                <p className='eachnummber'>34</p>
                <p className='eachnummber'>98</p>
                <p className='eachnummber'>12</p>
                <p className='eachnummber'>56</p>
            </div>
            <div className="taskbarstyle">
                <div className='homeiconplace' onClick={() => history.push("/home")}>
                    <img id='home' className='homeiconplaceimg' src={homeicon}></img>
                </div>
                <div className='donateiconplace' onClick={() => history.push("/donate")} >
                    <img id='donate' className='donateiconplaceimg' src={donateicon}></img>
                </div>
                <div className='insightplace' onClick={() => history.push("/stories")} >
                    <img id='insight' className='insightplaceimg' src={insighticon}></img>
                </div>

            </div>
        </div>

    );


}
