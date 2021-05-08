import NikeIcon from "../icons/NikeIcon";
import YahooIcon from "../icons/YahooIcon";
import IntelIcon from "../icons/IntelIcon";
import TedIcon from "../icons/TedIcon";
import AdobeIcon from "../icons/AdobeIcon";
import PixarIcon from "../icons/PixarIcon";
import CiscoIcon from "../icons/CiscoIcon";
import TargetIcon from "../icons/TargetIcon";
import AirbnbIcon from "../icons/AirbnbIcon";
import EbayIcon from "../icons/EbayIcon";

const clientsIconsArray = [
  NikeIcon,
  YahooIcon,
  IntelIcon,
  TedIcon,
  AdobeIcon,
  PixarIcon,
  CiscoIcon,
  TargetIcon,
  AirbnbIcon,
  EbayIcon,
];

const Clients = () => (
  <div className="clients__wrapper">
    <h3 className="clients__header">Smart companies use smart tools</h3>
    <div className="clients__icons-wrapper">
      {clientsIconsArray.map((Icon) => (
        <Icon className="clients__single-icon"/>
      ))}
    </div>
  </div>
);

export default Clients;
