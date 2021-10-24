import TopOne from '../../assets/top_1.svg';
import Logo from '../../assets/logo.png';
import './Splash.css';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export function Splash() {
    let history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            history.push({pathname: '/register', search: history.location.search})
        }, 2000);
    }, [history]);

    return (
        <div className="page slogan-page">
            <div className="background">
                <img src={TopOne} />
            </div>
            <img className="logo" src={Logo} />
            <div className="slogan">Care about yourself</div>
        </div>
    );
}
  