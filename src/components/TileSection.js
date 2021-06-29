import { ReactComponent as CloudIcon } from "../icons/CloudIcon.svg";
import { ReactComponent as MouseClickIcon } from "../icons/MouseClickIcon.svg";
import { ReactComponent as RocketIcon } from "../icons/RocketIcon.svg";
import { ReactComponent as SquaresIcon } from "../icons/SquaresIcon.svg";

const tiles = [
  {
    title: "Improve communication",
    description:
      "Pictures speak louder than words. Use that! Snap Screenshots and mark them up. Do you need to clarify a more complex problem? Record a Screen. Get your point across in a few clicks.",
    icon: MouseClickIcon,
    color: "green",
  },
  {
    title: "Be more productive",
    description:
      "Don't let the lack of information slow you down. Use Drople's Integrations and make the flow of information seamless Communicate as you go and finish your projects faster.",
    icon: RocketIcon,
    color: "red",
  },
  {
    title: "Stay organized",
    description:
      "Store your files in a cloud and have them always easily accessible. Create category Boards to avoid clutter. Drople's clean, easy-to-use interface makes managing files hassle-free.",
    icon: CloudIcon,
    color: "blue",
  },
  {
    title: "Collaborate effectively",
    description:
      "Empower whole teams to collaborate. Use Droplr's Dashboard as a collaboration platform. Let others access and modify the content of your Boards so that everyone is up-to-speed.",
    icon: SquaresIcon,
    color: "yellow",
  },
];

const SingleTile = ({ description, title, Icon, color }) => (
  <div className="tile-section__single-tile">
    <div className={`tile-section__icon-wrapper -${color}`}>
      <Icon className="tile-section__tile-icon"/>
    </div>
    <div className="tile-section__tile-text">
      <h3 className="tile-section__tile-header">{title}</h3>
      <p className="tile-section__tile-description">{description}</p>
    </div>
  </div>
);

const TileSection = () => (
  <div className="tile-section__wrapper">
    <div className="tile-section__header">
      <h2 className="tile-section__title">
        <strong>Droplr </strong>
        lets you
      </h2>
      <h3 className="tile-section__subtitle">
        Cut down on complexity and have the job done, simply.
      </h3>
    </div>
    <div className="tile-section__tiles">
      {tiles.map(({ title, description, icon, color }) => (
        <SingleTile
          key={title}
          color={color}
          description={description}
          Icon={icon}
          title={title}
        />
      ))}
    </div>
    <div className="tile-section__link">
      <a href="/">Browse all awesome Droplr features</a>
    </div>
  </div>
);

export default TileSection;
