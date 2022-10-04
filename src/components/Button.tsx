import buttonsArray from '../../data/buttonsArray';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const Button = () => {
  return (
    <div className="button">
      {buttonsArray &&
        buttonsArray.map((button) => (
          <a
            key={button.id}
            className="button__item"
            href={button.href}
            target={button.target}
            download
          >
            <div className="button__item__content">
              <div className="button__item__content__left">
                <FontAwesomeIcon
                  className="button__item__content__left__iconLogo"
                  icon={button.logo as IconProp}
                />
                <p className="button__item__content__left__title">
                  {button.title}
                </p>
              </div>
              <FontAwesomeIcon
                className="button__item__content__iconArrow"
                icon={['fas', 'arrow-right']}
              />
            </div>
          </a>
        ))}
    </div>
  );
};

export default Button;
