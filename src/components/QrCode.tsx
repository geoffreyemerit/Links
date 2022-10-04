import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface QrCodeProps {
  setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const QrCode = ({ setIsModalOpened }: QrCodeProps) => {
  return (
    <div className="blur">
      <div className="qrCode">
        <h1 className="qrCode__title">Mon profil vous intéresse ?</h1>
        <h2 className="qrCode__subtitle">
          Ajouter mon contact directement dans votre téléphone.
        </h2>
        <img
          className="qrCode__logo"
          src="./assets/qrcode_geoffrey.png"
          alt="qrcode de geoffrey"
        />

        <FontAwesomeIcon
          className="qrCode__cross"
          icon={['far', 'circle-xmark']}
          onClick={() => {
            setIsModalOpened(false);
          }}
        />
        <a
          className="qrCode__download"
          href="./assets/qrcode_geoffrey.png"
          target="_blank"
          download
        >
          <span>TÉLÉCHARGER LE QR CODE</span>
        </a>
      </div>
    </div>
  );
};

export default QrCode;
