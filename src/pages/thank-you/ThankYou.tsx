import ThankYouImg from '../../assets/thank_you.svg';
import ThankYouMessage from '../../assets/thank_you_message.svg';
import StoriesButton from '../../assets/see_stories_button.svg'
import lotteryButton from '../../assets/see_lottery_button.svg'
import Tabbar from '../../assets/tabbar.svg';
import TabbarInsights from '../../assets/tabbar_insights.svg';
import './ThankYou.css';
import { useHistory } from 'react-router-dom';
import { gotnumbers } from '../auth/savedvariable';

export function ThankYou() {
    let history = useHistory();
    gotnumbers.first = Math.floor(Math.random() * 100) + 1;
    gotnumbers.second = Math.floor(Math.random() * 100) + 1;
    gotnumbers.third = Math.floor(Math.random() * 100) + 1;
    gotnumbers.fourth = Math.floor(Math.random() * 100) + 1;
    gotnumbers.five = Math.floor(Math.random() * 100) + 1;
    gotnumbers.six = Math.floor(Math.random() * 100) + 1;
    gotnumbers.seven = Math.floor(Math.random() * 100) + 1;


    return (
        <div className="page thanks">
            <img className="top" src={ThankYouImg} />
            <img className="thank-you-message" src={ThankYouMessage} />

            <img onClick={() => history.push("/stories")} className="stories-button" src={StoriesButton} />
            <img onClick={() => history.push("/lottery")} className="stories-button" src={lotteryButton} />
            <span className="spacer"></span>
            <img className="tabbar" src={TabbarInsights} />
        </div>
    );
}
