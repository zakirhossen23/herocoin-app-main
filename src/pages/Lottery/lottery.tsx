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
        var future = Date.parse("Dec 12, 2021 01:30:00");
        var now = new Date();
        const diff = (future - now.getTime());

        var days = Math.floor(diff / (1000 * 60 * 60 * 24));
        var hours = Math.floor(diff / (1000 * 60 * 60));
        var mins = Math.floor(diff / (1000 * 60));
        var secs = Math.floor(diff / 1000);

        var d = days;
        var h = hours - days * 24;
        var m = mins - hours * 60;
        var s = secs - mins * 60;
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
