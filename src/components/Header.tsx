import linksArray from '../../data/linksArray';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <div className="header">
      <img
        className="header__img"
        src="./assets/geoffrey.png"
        alt="image de geoffrey"
      />
      <h1 className="header__name">
        Geoffrey Emerit<span className="header__name__point">.</span>
      </h1>
      <h2 className="header__description">
        Développeur web passionné, réfléchi et curieux
      </h2>

      <div className="header__socialLinks">
        {linksArray.map((link) => (
          <a key={link.id} href={link.href} target={link.target}>
            <FontAwesomeIcon
              className="header__socialLinks__item"
              icon={link.logo}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
