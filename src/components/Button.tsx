import buttonsArray from '../../data/buttonsArray';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = () => {
  return (
    <div className="button">
      {buttonsArray.map((button) => (
        <>
          <a
            className="button__item"
            key={button.id}
            href={button.href}
            target={button.target}
          >
            <div className="button__item__content">
              <div className="button__item__content__left">
                <FontAwesomeIcon
                  className="button__item__content__left__iconLogo"
                  icon={button.logo}
                />
                <p className="button__item__content__left__title">
                  {button.title}
                </p>
              </div>
              <FontAwesomeIcon
                className="button__item__content__iconArrow"
                icon="fa-solid fa-arrow-right"
              />
            </div>
          </a>
        </>
      ))}
    </div>
  );
};

export default Button;
