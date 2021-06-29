import { ReactComponent as NikeIcon } from "../icons/NikeIcon.svg";
import { ReactComponent as YahooIcon } from "../icons/YahooIcon.svg";
import { ReactComponent as IntelIcon } from "../icons/IntelIcon.svg";
import { ReactComponent as TedIcon } from "../icons/TedIcon.svg";
import { ReactComponent as AdobeIcon } from "../icons/AdobeIcon.svg";
import { ReactComponent as PixarIcon } from "../icons/PixarIcon.svg";
import { ReactComponent as CiscoIcon } from "../icons/CiscoIcon.svg";
import { ReactComponent as TargetIcon } from "../icons/TargetIcon.svg";
import { ReactComponent as AirbnbIcon } from "../icons/AirbnbIcon.svg";
import { ReactComponent as EbayIcon } from "../icons/EbayIcon.svg";

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
