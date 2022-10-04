import Footer from '../components/Footer';
import Button from '../components/Button';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import QrCode from '../components/QrCode';
import { useState } from 'react';

const Links = () => {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  return (
    <>
      <div className="linksPage">
        <FontAwesomeIcon
          className="linksPage__qrCode"
          icon={['fas', 'qrcode']}
          onClick={() => {
            setIsModalOpened(true);
          }}
        />

        <Header />
        <Button />
        <Footer />
      </div>

      {isModalOpened && <QrCode setIsModalOpened={setIsModalOpened} />}
    </>
  );
};

export default Links;
