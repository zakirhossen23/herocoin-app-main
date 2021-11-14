
import Top from '../../assets/top_2.svg';
import Tabbar from '../../assets/tabbar.svg';
import './Home.css';
import { useHistory } from 'react-router-dom';

export function Home() {
    let history = useHistory();
    return (
        <div className="page home">
            <img className="top" src={Top} />
            <div onClick={() => history.push("/cards")} className="action">Make a donation</div>
            <span className="spacer"></span>
            <img className="tabbar" src={Tabbar} />
        </div>
    );
}
