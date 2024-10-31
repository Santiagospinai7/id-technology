import BannerImg from '../../assets/img/banner.png'

const Banner = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row my-20 '>
        <div className='w-full md:w-1/2 mb-4 p-0 md:p-20'>
          <img src={BannerImg} alt='banner' className='w-full h-full object-cover max-w-full' />
        </div>
        <div className='w-full md:w-1/2 flex flex-col justify-center items-center md:items-start p-4 mt-4 md:mt-0'>
          <h1 className='text-4xl font-bold text-center md:text-left'>Una alianza que te conviene</h1>
          <p className='text-base text-center md:text-left mt-7'>Ayudamos a las empresas a <strong className='text-green-100'>ahorrar su dinero, proteger su información y prevenir los riesgos del área tecnológica</strong>, a través de soluciones como soporte técnico, inteligencia de negocios, distribución de hardware, desarrollo y distribución de software.</p>
          {/* button go to whatsapp https://wa.me/+573159266621/text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios */}
          <button 
          onClick={() => window.open('https://wa.me/+573159266621?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios')}
          className='bg-green-200 hover:bg-green-300 text-white px-4 py-2 rounded-3xl mt-7 text-sm transition duration-300 transform hover:scale-105 hover:shadow-lg'>
            AGENDA TU DIAGNOSTICO GRATUITO
          </button>
        </div>
      </div>
    </>
  )
}

export default Banner
