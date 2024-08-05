import { NavLink } from 'react-router-dom';
import  mainImage from '../assets/Recursos/3_Service_Software/Group 370.png';

const DevelopmentService = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
      <section className="text-center">
        <img src={mainImage} alt="Desarrollo de Software" className="mx-auto" />
        <h1 className="text-3xl font-bold mt-4">Desarrollo de Software</h1>
        <p className="mt-4 text-lg text-green-600">
          Con un enfoque centrado en tus necesidades, creamos soluciones tecnológicas a la medida, ya sea para la web o para escritorio, que se adaptan perfectamente a tus objetivos y procesos, maximizando tu eficiencia y potenciando tu productividad.
        </p>
        <p className="mt-4 text-lg">
          Te acompañamos en cada etapa del proceso, desde la concepción del proyecto hasta su implementación, asegurando que obtengas un software sólido, confiable y de fácil uso.
        </p>
        <NavLink to="/contact" className="mt-8 inline-block bg-green-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-green-600">
          COTIZA TU PROYECTO
        </NavLink>
      </section>
      
      <section className="mt-16 text-center py-32">
        <h2 className="text-2xl font-semibold">Impulsa tu éxito con nosotros</h2>
        <p className="mt-2 text-lg">Descubre por qué elegirnos como tu aliado tecnológico</p>
        
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Empresas únicas merecen soluciones a la medida.</h3>
            <p>Por medio de un diálogo constante, identificamos oportunidades y desarrollamos aplicativos que hacen de tu día a día, uno más ameno y eficiente. Es ya que te queremos ver crecer, en base a tu realidad.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Nunca paramos de aprender.</h3>
            <p>En ID Technology somos conscientes de la alta velocidad en que la tecnología evoluciona, es por esto que nos mantenemos constantemente actualizados y te permite disfrutar de lo último en el mercado.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Somos la suma de experiencia y conocimiento.</h3>
            <p>Con 20 años en el mercado, nos hemos encargado de recolectar los mejores aprendizajes y prácticas de desarrollo. Confía en nuestro legado y descubre cómo podemos transformar tus ideas en resultados tangibles y exitosos.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Desarrollo de software es solo el comienzo.</h3>
            <p>Sabemos que el funcionamiento de tu empresa necesita de soluciones integrales. ¿Buscas adquirir el hardware adecuado para potenciar tus soluciones? ¿Requieres soporte técnico confiable y oportuno? Tú confía, que nosotros te apoyamos.</p>
          </div>
        </div>
      </section>
    
    </div>
  );
}

export default DevelopmentService;