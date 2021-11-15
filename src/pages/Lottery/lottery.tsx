import { useHistory } from 'react-router-dom';
import MenuTop from '../../assets/menu_top.svg';
import HomeImg from '../../assets/home.png';
import './lottery.css';
import './stuff/taskbar.css';
import Tabbar from '../../assets/tabbar_insights.svg';
import { gotnumbers } from '../auth/savedvariable';
import { allstorednumbers } from '../auth/savedvariable';
export function Lottery() {
    let history = useHistory();
    const createall: any = setInterval(() => {
        var getelement = document.getElementById("ticketslist") as HTMLElement;
        var getelement2 = document.getElementsByClassName("tickect");

        try {
            if (getelement2.length === 0) {
                allstorednumbers.forEach(element => {
                    if (element !== 0) {
                        getelement.innerHTML = getelement.innerHTML + '<div class="tickect"><span class="ticketnumbertable">' + element.toString() + '</span></div>';
                    }

                });
            }
        } catch (error) { }


    }, 1000);

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

            <img src={HomeImg} className="homeimg" />
            <div className='countnumbers'>
                <p className='countnummber' id='day'>0</p>
                <p className='countnummber' id='hour'>0</p>
                <p className='countnummber' id='minute'>0</p>
                <p className='countnummber' id='second'>0</p>
                <p className='countnummber' id='second'>0</p>

            </div>


            <div className='gotnumbers'>
                <p className='eachnummber'>{gotnumbers.first}</p>
                <p className='eachnummber'>{gotnumbers.second}</p>
                <p className='eachnummber'>{gotnumbers.third}</p>
                <p className='eachnummber'>{gotnumbers.fourth}</p>

            </div>

            <div className='ticketsnumbers'>
                <p id='ticketslist'></p>


            </div>
            <div hidden>  {createall}</div>
            <div >
                <img className='taskbar' src={Tabbar} />
            </div>

        </div>

    );

}
