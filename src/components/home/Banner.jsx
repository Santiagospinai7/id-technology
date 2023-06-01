import BannerImg from '../../assets/img/banner.png'

const Banner = () => {
  return (
    // I need to add a space between the two classes inside the first div, also in the right container add a space line between title, description and button and in the strong tag inside the description the text has to be green 100
    <>
      <div className='flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2'>
          <img src={BannerImg} alt='banner' className='w-full h-full object-cover' />
        </div>
        <div className='w-full md:w-1/2 flex flex-col justify-center items-center md:items-start p-4'>
          <h2 className='text-3xl font-bold text-center md:text-left'>Una alianza que te conviene</h2>
          <p className='text-l text-center md:text-left mt-4'>Ayudamos a las empresas a <strong className='text-green-100'> ahorrar su dinero, proteger su información y prevenir los riesgos del área tecnológica</strong>, a través de soluciones como soporte técnico, inteligencia de negocios, distribución de hardware, desarrollo y distribución de sofware.</p>
          <button className='bg-green-200 text-white p-4 rounded-3xl mt-4'>AGENDA TU DIAGNOSTICO GRATUITO</button>
        </div>
      </div>
    </>
  )
}

export default Banner

