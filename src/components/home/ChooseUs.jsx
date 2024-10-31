import styled from 'styled-components'
import chooseUs1 from '../../assets/img/Escogernos_1.png'
import chooseUs2 from '../../assets/img/Escogernos_2.png'
import chooseUs3 from '../../assets/img/Escogernos_3.png'

import esetLogo from '../../assets/img/Partner_Eset.png'
import microsoftLogo from '../../assets/img/Partner_Microsoft.png'
import anydekLogo from '../../assets/img/Partner_Anydesk.png'

const ChooseUs = () => {
  let content = (
    <StyledChooseUs className='my-28 text-center'>
      <h3 className='text-2xl font-bold mb-3'>¿Tu empresa esta bien ahora?</h3>
      <h2 className='text-2xl font-bold mb-5'>
        <span className='bg-zinc-800 text-white px-2 py-1'>¡Pues te contamos que puedes estar mucho mejor!</span>
      </h2>
      <p className='mb-10'>Aqui te damos 3 razones que <strong className='underline'>nos hace especiales</strong> como aliados en tecnología:</p>

      <div className="grid grid-cols-1 md:grid-cols-10 gap-8 mb-20">
        {/* First Column */}
        <div className='flex flex-col md:col-span-7'>
          {/* First Row */}
          <div className='flex h-full md:items-end'> {/* Updated to items-end */}
            {/* Left Container */}
            <div className=' w-1/4 md:h-48'> {/* Added h-20 */}
              <div className="flex justify-center items-center h-full">
                <div className="bg-cover bg-center w-full h-full" style={{ backgroundImage: `url(${chooseUs1})` }}></div>
              </div>
            </div>
            {/* Right Container */}
            <div className='bg-[#e4e4e4] flex flex-col justify-center w-3/4 p-5'>
              <strong className='text-lg text-green-200 mb-5 text-left'>No trabajamos a ciegas.</strong>
              <p className='text-sm mb-5 text-left'>Por eso siempre ofrecemos a nuestros clientes <strong>un diagnóstico inicial completamente gratis para identificar sus oportunidades de mejora.</strong> y es que al final cada empresa es un mundo y a nosotros, nos interesa el tuyo.</p>
              <div className="flex items-center"> {/* Added a new flex container */}
                <button className='bg-green-200 hover:bg-green-200 text-white py-2 px-3 rounded-3xl mt-0 text-sm transition duration-300 transform hover:scale-105 hover:shadow-lg'>
                  AGENDA TU DIAGNOSTICO GRATUITO
                </button>
              </div>
            </div>
          </div>

          <div className='my-4'></div>

          {/* Second Row */}
          <div className='flex h-full md:items-end md:ml-10'>
            {/* Left Container */}
            <div className='bg-[#e4e4e4] flex flex-col justify-center w-3/4 p-5'>
              <strong className='text-lg text-green-200 mb-4 text-right'>No nos limitamos a entregar cajas.</strong>
              <p className='text-sm mb-4 text-right'>Los dispositivos tecnológicos son herramientas clave las empresas. por eso no solo te acompañamos en el proceso de compra para que elijas el mejor dispositivo de acuerdo a tus necesidades. si no que <strong>te lo instalamos, lo configuramos y te lo dejamos listo para empezar a trabajar.</strong></p>
              <div className="flex justify-end"> {/* Changed to justify-end */}
                <button className='bg-green-200 hover:bg-green-200 text-white py-2 px-3 rounded-3xl mt-0 text-sm transition duration-300 transform hover:scale-105 hover:shadow-lg'>
                  CONOCE AQUÍ NUESTRO PORTAFOLIO
                </button>
              </div>
            </div>
            {/* Right Container */}
            <div className='bg-blue-300 w-1/4 md:h-48'> {/* Added h-20 */}
              <div className="flex justify-center items-center h-full">
                <div className="bg-cover bg-center w-full h-full" style={{ backgroundImage: `url(${chooseUs3})` }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className='col-span-full md:col-span-3 flex md:flex-col flex-row'>
          {/* Image Container */}
          <div className='md:w-2/4 md:h-48'>
            <div className="flex justify-center items-center h-full">
              <div className="bg-cover bg-center w-full h-full" style={{ backgroundImage: `url(${chooseUs2})` }}></div>
            </div>
          </div>
          {/* Text Container */}
          <div className='bg-[#e4e4e4] md:w-full p-5'>
            <strong className='text-lg text-green-200 mb-4 text-left md:text-center'>No te dejamos solo.</strong>
            <p className='text-sm mb-4 text-left md:text-center'><strong>Una vez decides aliarte con nosotros, cuentas con acompañamiento permanente</strong>, y lo mejor... estamos constantemente atentos a las oportunidades de mejora que surjan en tu empresa. Así que tú tranquilo, nosotros nos encargamos del desarrollo tecnológico de tu compañía.</p>
            {/* <button className='bg-green-200 text-white px-3 py-2 rounded-3xl mx-auto text-sm block'></button> */}
            <button className='bg-green-200 hover:bg-green-200 text-white py-2 px-3 rounded-3xl mt-0 text-sm transition duration-300 transform hover:scale-105 hover:shadow-lg'>
            AGENDA UNA LLAMADA
            </button>
          </div>
        </div>
      </div>

      <h2 className='text-2xl font-bold mb-3' >Somos partner de los grandes lideres en el sector tecnológico</h2>
      <p className='mb-10'>Lo que nos permite ofrecerte soluciones y de alta calidad a precios competitivos</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div >
          <div className="flex justify-center items-center h-32">
            <img src={microsoftLogo} alt="Microsoft_logo" />
          </div>
          <div className='text-center py-4'>
            <p><strong>Partner certificado de Microsoft</strong></p>
          </div>
        </div>
        <div >
          <div className="flex justify-center items-center h-32">
            <img src={esetLogo} alt="Eset_logo" />
          </div>
          <div className='text-center py-4'>
            <p><strong>Partner certificado de ESET</strong></p>
          </div>
        </div>
        <div >
          <div className="flex justify-center items-center h-32">
            <img src={anydekLogo} alt="Anydesk_logo" />
          </div>
          <div className='text-center py-4'>
            <p><strong>Partner certificado de AnyDesk</strong></p>
          </div>
        </div>
      </div>

    </StyledChooseUs>
  )

  return content
}


const StyledChooseUs = styled.div`
  .box-3a {
    grid-template-rows: 30% 70%;
  }
`

export default ChooseUs
