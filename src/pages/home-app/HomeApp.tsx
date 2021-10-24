import Top from '../../assets/top_2.svg';
import Tabbar from '../../assets/tabbar.svg';
import './HomeApp.css';
import { useHistory } from 'react-router-dom';

export function HomeApp() {
    let history = useHistory();


    return (
        <div className="page home-app">
             <img className="top" src={Top} />
             <div onClick={() => history.push("/order")} className="action">Create order</div>
             <div className="action">Schedule a test</div>
             <span className="spacer"></span>
             <img className="tabbar" src={Tabbar} />
        </div>
    );
}
  