import mainImage from '../assets/Recursos/6_Service_Automatizacion/Group_470.png'
import cardImage4 from '../assets/Recursos/6_Service_Automatizacion/Group_504.png'
import cardImage2 from '../assets/Recursos/6_Service_Automatizacion/Group_502.png'
import cardImage3 from '../assets/Recursos/6_Service_Automatizacion/Group_498.png'
import cardImage1 from '../assets/Recursos/6_Service_Automatizacion/Group_500.png'

import ServiceDetailBanner from '../components/services/ServiceDetailBanner'
import ExperienceShowCase from '../components/services/ExperienceShowCase'

const AutomatizationService = () => { 

  const serviceData = {
    bannerData: {
      title: 'Automatización de Procesos',
      description: (
        <>
          <p className="mt-4 text-lg">
          En ID Technology, automatizamos procesos operativos para que tu equipo se enfoque en lo esencial. Aprovechamos tus herramientas actuales, como Microsoft 365, para <strong className='text-green-100'>reducir tareas repetitivas y agilizar el flujo de trabajo, creando un entorno más productivo y eficiente.</strong> Con nuestra experiencia, transformamos procesos e identificamos mejoras que convierten datos en información que te apoyan para tomar decisiones estratégicas, rápidas y efectivas.
          </p>
        </>
      ),
      image: mainImage,
      buttonTitle: 'Agenda una llamada'
    },
    ExperienceShowCaseData: {
      title: 'AUTOMATIZA para ganar TIEMPO y maximizar EFICIENCIA en tu empresa',
      description: 'Aquí te contamos por qué confiar en nuestra experiencia',
      cardData: [
        {
          title: 'Nos tomamos el tiempo de entender tus procesos.',
          description: (
            <>
              Nos sumergimos en el día a día de tu operación para comprender tus procesos en profundidad. Así, <span className="font-bold">logramos conocer sus necesidades reales y brindar soluciones precisas.</span>
            </>
          ),
          image: cardImage1
        },
        {
          title: 'Identificamos oportunidades de mejora.',
          description: (
            <>
              No solo respondemos a tus necesidades actuales, sino que también detectamos oportunidades de optimización en el camino, <span className="font-bold">ayudándote a lograr procesos más eficientes y productivos.</span>
            </>
          ),
          image: cardImage2
        },
        {
          title: 'Aprovechamos las herramientas que ya tienes.',
          description: (
            <>
              Trabajamos con la tecnología que ya usas en tu empresa, como Microsoft 365, <span className="font-bold">integrando soluciones automatizadas sin necesidad de adquirir nuevas plataformas.</span>
            </>
          ),
          image: cardImage3
        },
        {
          title: 'Transformamos datos para apoyar decisiones inteligentes.',
          description: (
            <>
              Los datos que se generan a través de la automatización se pueden organizar de tal manera que se conviertan en <span className="font-bold">información que respalde la toma de decisiones tácticas y estratégicas.</span>
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

export default AutomatizationService;