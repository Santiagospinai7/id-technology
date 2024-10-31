import mainImage from '../assets/Recursos/5_Service_Distribucion/Group_381.png'
import cardImage4 from '../assets/Recursos/5_Service_Distribucion/Group_498.png'
import cardImage2 from '../assets/Recursos/5_Service_Distribucion/Group_484.png'
import cardImage3 from '../assets/Recursos/5_Service_Distribucion/Group_492.png'
import cardImage1 from '../assets/Recursos/5_Service_Distribucion/Group_476.png'

import ServiceDetailBanner from '../components/services/ServiceDetailBanner'
import ExperienceShowCase from '../components/services/ExperienceShowCase'

const HwDistributionService = () => { 

  const serviceData = {
    bannerData: {
      title: 'Distribución de Hardware y Software',
      description: (
        <>
          <p className="mt-4 text-lg">
          Escoger lo que realmente sume a tu empresa puede ser abrumador con tantas opciones disponibles. En ID Technology, te ayudamos a elegir las herramientas que aportarán verdadero valor. 
          <strong className='text-green-100'>No solo ofrecemos precios competitivos, sino que te acompañamos en todo el proceso, asegurándonos de que cada equipo y/o programa adquirido esté perfectamente integrado y funcione adecuadamente.</strong>
          </p>
        </>
      ),
      image: mainImage,
      buttonTitle: 'Agenda una llamada'
    },
    ExperienceShowCaseData: {
      title: 'Escoge LO MEJOR para tu empresa, con el respaldo de EXPERTOS en cada paso',
      description: 'Aquí te contamos por qué somos tu mejor opción',
      cardData: [
        {
          title: 'Nuestra asesoría es honesta y transparente.',
          description: (
            <>
              Siempre te recomendamos lo que realmente necesitas, sin venderte de más. Nuestro enfoque es ayudarte a tomar decisiones correctas y hacer la mejor inversión para tu negocio, <span className="font-bold">evitando costos innecesarios y asegurando que cada elección tecnológica sume valor a tu empresa.</span>
            </>
          ),
          image: cardImage1
        },
        {
          title: 'Calidad garantizada con marcas de confianza.',
          description: (
            <>
              Trabajamos solo con marcas reconocidas, <span className="font-bold">asegurando calidad, respaldo y garantía oficial </span>en cada componente de hardware y software. Nuestras soluciones cumplen con los más altos estándares para un desempeño confiable en tus operaciones.
            </>
          ),
          image: cardImage2
        },
        {
          title: 'En ID Technology no dejamos las cosas a medias.',
          description: (
            <>
              No solo vendemos productos; <span className="font-bold">también los instalamos y configuramos para que estén listos desde el primer día.</span> Nuestro soporte especializado garantiza un funcionamiento óptimo, integrando cada solución a tus procesos e infraestructura.
            </>
          ),
          image: cardImage3
        },
        {
          title: 'Construimos sobre tu infraestructura actual.',
          description: (
            <>
              Valoramos la inversión y trayectoria tecnológica de tu empresa. Por eso, construimos sobre la infraestructura existente, <span className="font-bold">aprovechando al máximo tus recursos actuales y potenciándolos con las mejores soluciones disponibles en el mercado.</span>
            </>
          ),
          image: cardImage4
        }
      ]
    },
  }

  return (
    <div className="relative bg-white">
      <div className="bg-softwareBanner bg-no-repeat bg-contain bg-top w-full">
        <section className="text-center max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-26 pt-16">
          <ServiceDetailBanner
            title={serviceData.bannerData.title}
            description={serviceData.bannerData.description}
            image={serviceData.bannerData.image}
            buttonTitle={serviceData.bannerData.buttonTitle}
          />
        </section>
      </div>
      
      <div className="w-full bg-software-bg-2 bg-no-repeat bg-cover">
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
}

export default HwDistributionService;