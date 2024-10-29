/* eslint-disable react/prop-types */


const InfoCard = ({ title, description, image }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center relative">
      {
        image && (
          <div className="absolute -top-8">
            <img src={image} alt="Icono de Solución" className="mx-auto w-24 h-24" />
          </div>
        )
      }
      <h3 className="text-base font-semibold mt-12 mb-2 text-green-100">
        {title}
      </h3>
      <p className="text-sm">
        {description}
      </p>
    </div>
  );
}

export default InfoCard;
