import mainImage from '../assets/Recursos/3_Service_Software/Group_370.png'
import cardImage4 from '../assets/Recursos/3_Service_Software/Group_464.png'
import cardImage2 from '../assets/Recursos/3_Service_Software/Group_375.png'
import cardImage3 from '../assets/Recursos/3_Service_Software/Group_377.png'
import cardImage1 from '../assets/Recursos/3_Service_Software/Group_463.png'

import ServiceDetailBanner from '../components/services/ServiceDetailBanner'
import ExperienceShowCase from '../components/services/ExperienceShowCase'

const DevelopmentService = () => { 

  const serviceData = {
    bannerData: {
      title: 'Desarrollo de Software',
      description: (
        <>
          <p className="mt-4 text-lg">
            <strong className='text-green-100'>Con un enfoque centrado en tus necesidades, creamos soluciones tecnológicas a la medida</strong>, ya sea para la web o para escritorio, que se adaptan perfectamente a tus objetivos y procesos, <strong className='text-green-100'>maximizando tu eficiencia y potenciando tu productividad.</strong>
          </p>
          <p className="mt-4 text-lg">
            Te acompañamos en cada etapa del proceso, desde la concepción del proyecto hasta su implementación, asegurando que obtengas un software sólido, confiable y de fácil uso.
          </p>
        </>
      ),
      image: mainImage,
      buttonTitle: 'COTIZA TU PROYECTO'
    },
    ExperienceShowCaseData: {
      title: 'Impulsa tu éxito con nosotros',
      description: 'Descubre por qué elegirnos como tu aliado tecnológico',
      cardData: [
        {
          title: 'Empresas únicas merecen soluciones a la medida.',
          description: (
            <>
              Por medio de un diálogo constante, <span className="font-bold">identificamos oportunidades y desarrollamos aplicativos que hacen de tu día a día, uno más ameno y eficiente.</span> Es ya que te queremos ver crecer, en base a tu realidad.
            </>
          ),
          image: cardImage1
        },
        {
          title: 'Nunca paramos de aprender.',
          description: (
            <>
              En ID Technology somos conscientes de la alta velocidad en que la tecnología evoluciona, es por esto que nos <span className="font-bold">mantenemos constantemente actualizados y te permite disfrutar de lo último en el mercado.</span>
            </>
          ),
          image: cardImage2
        },
        {
          title: 'Somos la suma de experiencia y conocimiento.',
          description: (
            <>
              Con 20 años en el mercado, nos hemos encargado de recolectar los mejores aprendizajes y prácticas de desarrollo.<span className="font-bold"> Confía en nuestro legado y descubre cómo podemos transformar tus ideas en resultados tangibles y exitosos.</span>
            </>
          ),
          image: cardImage3
        },
        {
          title: 'Desarrollo de software es solo el comienzo.',
          description: (
            <>
              <span className="font-bold">Sabemos que el funcionamiento de tu empresa necesita de soluciones integrales.</span> ¿Buscas adquirir el hardware adecuado para potenciar tus soluciones? ¿Requieres soporte técnico confiable y oportuno? Tú confía, que nosotros te apoyamos.
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

export default DevelopmentService;