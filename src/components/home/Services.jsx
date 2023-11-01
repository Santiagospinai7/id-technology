import React, {useState} from 'react';
import software_development from '../../assets/img/Desarollo_Normal.png';
import distribution from '../../assets/img/Distribucion_Normal.png';
import business_intelligence from '../../assets/img/Inteligencia_Normal.png';
import support from '../../assets/img/Soporte_Hoover.png';

const ServiceCard = ({ title, description, hoverText, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${
        isHovered ? 'bg-[#2E995B]' : 'bg-[#80D5A3]'
      } relative p-6 text-center transition duration-300 transform scale-90 hover:scale-100 hover:text-white`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} alt={title} className="mx-auto mb-4" />
      <p className="font-bold mb-2">{title}</p>
      <p className="mb-4">{description}</p>
      <p
        className={`absolute bottom-6 left-0 right-0 mx-auto text-white ${
          isHovered ? 'block' : 'hidden'
        }`}
      >
        {hoverText}
      </p>
    </div>
  );
};


const Services = () => {
  return (
    <div className="text-center py-14">
      <h2 className="text-2xl font-bold mb-10">Ayudamos a fortalecer tu empresa por medio de</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <ServiceCard
          title="Desarrollo de software"
          description="Diseñamos y desarrollamos programas y aplicaciones para la web y escritorio a la medida de tus necesidades"
          hoverText="Leer más"
          image={software_development}
        />
        <ServiceCard
          title="Soporte Técnico"
          description="Asesoramos y/o gestionamos todos o parte de tus procesos informáticos"
          hoverText="Leer más"
          image={support}
        />
        <ServiceCard
          title="Distribución de hardware y software"
          description="Proveemos e instalamos componentes tecnológicos y esenciales para el desarrollo de tus tareas diarias."
          hoverText="Leer más"
          image={distribution}
        />
        <ServiceCard
          title="Inteligencia de negocios"
          description="Creamos soluciones que ayudan a las empresas a tomar decisiones informadas mediante el análisis de datos en tiempo real."
          hoverText="Leer más"
          image={business_intelligence}
        />
      </div>
    </div>
  );
};

export default Services;
