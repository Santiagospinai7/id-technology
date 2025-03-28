import software_development from '../../assets/img/Desarollo_Normal.png';
import distribution from '../../assets/img/Distribucion_Normal.png';
import business_intelligence from '../../assets/img/Inteligencia_Normal.png';
import support from '../../assets/img/Soporte_Hoover.png';
import ServiceCard from '../UI/ServiceCard';


const Services = () => {
  return (
    <div className="text-center py-14">
      <h2 className="text-2xl font-bold mb-10">Ayudamos a fortalecer tu empresa por medio de</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <ServiceCard
          title="Desarrollo de software"
          description="Diseñamos y desarrollamos programas y aplicaciones para la web y escritorio a la medida de tus necesidades"
          // hoverText="Leer más"
          image={software_development}
          url={'/servicios/desarrollo-de-software'}
        />
        <ServiceCard
          title="Soporte Técnico"
          description="Asesoramos y/o gestionamos todos o parte de tus procesos informáticos"
          // hoverText="Leer más"
          image={support}
          url={'/servicios/soporte-tecnico'}
        />
        <ServiceCard
          title="Distribución de hardware y software"
          description="Proveemos e instalamos componentes tecnológicos y esenciales para el desarrollo de tus tareas diarias."
          // hoverText="Leer más"
          image={distribution}
          url={'/servicios/distribucion-de-hardware-y-software'}
        />
        <ServiceCard
          title="Automatización de procesos"
          description="Automatizamos tareas operativas usando la Office de microsoft 365 para optimizar el flujo de trabajo y facilitar decisiones estratégicas."
          // hoverText="Leer más"
          image={business_intelligence}
          url='/servicios/automatizacion-de-procesos'
        />
      </div>
    </div>
  );
};

export default Services;
