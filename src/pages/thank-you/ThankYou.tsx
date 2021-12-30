import ThankYouImg from '../../assets/thank_you.svg';
import ThankYouMessage from '../../assets/thank_you_message.svg';
import StoriesButton from '../../assets/see_stories_button.svg'
import NFTButton from '../../assets/see_lottery_button.svg'
import Tabbar from '../../assets/tabbar.svg';
import TabbarInsights from '../../assets/tabbar_insights.svg';
import './ThankYou.css';
import { useHistory } from 'react-router-dom';
import { gotnumbers } from '../auth/savedvariable';

export function ThankYou() {
  let history = useHistory();


  return (
    <div className="page thanks">
      <img className="top" src={ThankYouImg} />
      <img className="thank-you-message" src={ThankYouMessage} />

      <img
        onClick={() => history.push("/stories")}
        className="stories-button"
        src={StoriesButton}
      />
      <div>
        <div className="nftdiv">
          <a className="nfttext" href="/NFT">NFT</a>
        </div>

        <img
          onClick={() => history.push("/NFT")}
          className="stories-button"
          src={NFTButton}
        />
      </div>
      <div>
        <div className="nftdiv">
          <a className="nfttext" href="/CryptoPunks">CryptoPunks</a>
        </div>

        <img
          onClick={() => history.push("/CryptoPunks")}
          className="stories-button"
          src={NFTButton}
        />
      </div>

      <span className="spacer"></span>
      <img className="tabbar" src={TabbarInsights} />
    </div>
  );
}
