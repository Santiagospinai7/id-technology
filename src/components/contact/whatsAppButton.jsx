import whatsappIcon from '../../assets/img/Whatsapp.png';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+573159266621?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50"
      style={{
        width: '100px',
        height: '100px',
      }}
    >
      <img
        src={whatsappIcon}
        alt="WhatsApp Icon"
        className="w-full h-full hover:scale-110 transition-transform duration-200 ease-in-out"
      />
    </a>
  );
};

export default WhatsAppButton;