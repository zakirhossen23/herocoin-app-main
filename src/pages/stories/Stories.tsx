import { useHistory } from 'react-router';
import ThankYouImg from '../../assets/stories.svg';
import TabbarInsights from '../../assets/tabbar_insights.svg';
import './Stories.css';

export function Stories() {
    const history = useHistory();

    return (
        <div className="page stories">
            <img onClick={() => history.push("/home/app")} className="top" src={ThankYouImg} />
            <img className="tabbar" src={TabbarInsights} />
        </div>
    );
}
