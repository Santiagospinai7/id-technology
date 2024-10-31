import ServiceDetailBanner from "../components/services/ServiceDetailBanner";
import ExperienceShowCase from "../components/services/ExperienceShowCase";

// Usa `new URL` para asegurar rutas correctas en producción
const bannerImage = new URL('../assets/Recursos/4_Service_Soporte/Group_456.png', import.meta.url).href;
const cardImage1 = new URL('../assets/Recursos/4_Service_Soporte/Group_467.png', import.meta.url).href;
const cardImage2 = new URL('../assets/Recursos/4_Service_Soporte/Group_460.png', import.meta.url).href;
const cardImage3 = new URL('../assets/Recursos/4_Service_Soporte/Group_468.png', import.meta.url).href;
const cardImage4 = new URL('../assets/Recursos/4_Service_Soporte/Group_466.png', import.meta.url).href;

const TechnicalSupportService = () => {
  const serviceData = {
    bannerData: {
      title: 'Soporte Técnico',
      description: (
        <>
          <p>Imagina tener a tu disposición un equipo de expertos dedicados a <strong className='text-green-100'>mantener tus sistemas en perfecto funcionamiento, listos para resolver cualquier desafío en un abrir y cerrar de ojos.</strong> Ya sea que enfrentes problemas con tus dispositivos, necesites asesoramiento para optimizar tus procesos o busques asegurar tus datos más valiosos, nuestro servicio de soporte técnico está aquí para ofrecerte <strong className='text-green-100'>soluciones sin complicaciones.</strong></p>
        </>
      ),
      image: bannerImage,
      buttonTitle: 'Agenda una llamada'
    },
    ExperienceShowCaseData: {
      title: 'Apóyate en aliados EXPERTOS y no pongas en RIESGO tu información',
      description: 'Aquí te contamos por qué confiar en nosotros',
      cardData: [
        {
          title: 'Somos expertos en lo que hacemos.',
          description: (
            <>
              Con más de 20 años en la industria tecnológica estamos <span className="font-bold">capacitados para tomar las mejores decisiones a la hora de resolver problemas técnicos priorizando el cuidado de la información e infraestructura tecnológica de tu empresa.</span>
            </>
          ),
          image: cardImage1
        },
        {
          title: 'Valoramos las relaciones humanas.',
          description: (
            <>
              Como equipo nos esmeramos en construir relaciones <span className="font-bold">personalizadas, cálidas y amigables.</span> Durante nuestras conversaciones estamos dispuestos a escucharte para <span className="font-bold">comprender a fondo las necesidades específicas</span> que nos faciliten la entrega de soluciones asertivas.
            </>
          ),
          image: cardImage2
        },
        {
          title: 'Usamos la tecnología a nuestro favor.',
          description: (
            <>
              Centralizamos nuestro soporte técnico para que tus operaciones continúen sin interrupciones lo más pronto posible. Al contactarnos eres atendido por la central de soporte que se encarga de <span className="font-bold">identificar la prioridad de tu caso y re-direccionarte al especialista idóneo.</span>
            </>
          ),
          image: cardImage3
        },
        {
          title: 'Con tu seguridad y confidencialidad no jugamos.',
          description: (
            <>
              Valoramos la confianza que depositas en nosotros al permitirnos el acceso a tus dispositivos, aplicaciones e información confidencial. Por eso, respetamos y aplicamos <span className="font-bold">las regulaciones de protección de datos y te garantizamos tranquilidad en cada interacción.</span>
            </>
          ),
          image: cardImage4
        }
      ]
    }
  };

  return (
    <div className="relative bg-white">
      <div className="bg-technicalSupportBanner bg-no-repeat bg-contain bg-top w-full">
        <section className="text-center max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-26 pt-16">
          <ServiceDetailBanner
            title={serviceData.bannerData.title}
            description={serviceData.bannerData.description}
            image={serviceData.bannerData.image}
            buttonTitle={serviceData.bannerData.buttonTitle}
          />
        </section>
      </div>
      
      <div className="w-full bg-technicalSupport-bg-2 bg-no-repeat bg-cover">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="mt-16 text-center py-32">
            <ExperienceShowCase
              title={serviceData.ExperienceShowCaseData.title}
              description={serviceData.ExperienceShowCaseData.description}
              cardData={serviceData.ExperienceShowCaseData.cardData}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSupportService;