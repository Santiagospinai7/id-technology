import styled from 'styled-components'
import chooseUs1 from '../../assets/img/Escogernos_1.png'
import chooseUs2 from '../../assets/img/Escogernos_2.png'
import chooseUs3 from '../../assets/img/Escogernos_3.png'

import esetLogo from '../../assets/img/Partner_Eset.png'
import microsoftLogo from '../../assets/img/Partner_Microsoft.png'
import anydekLogo from '../../assets/img/Partner_Anydesk.png'

const ChooseUs = () => {
  let content = (
    <StyledChooseUs className='my-16 text-center'>
      <h3 className='text-2xl font-bold mb-3' >¿Tu empresa esta bien ahora?</h3>
      <h2 className='text-3xl font-bold mb-5'>
        <span className='bg-zinc-800 text-white px-2 py-1'>¡Pues te contamos que puedes estar mucho mejor!</span>
      </h2>
      <p className='mb-10'>Aqui te damos 3 razones que <strong className='underline'>nos hace especiales</strong> como aliados en tecnología</p>
      <div className="grid ms:grid-cols-1 md:grid-flow-col gap-5 mb-20">
        <div className="bg-blue-100 grid gap-5 ms:grid-cols-1 md:col-span-6">
          <div className='bg-blue-200 grid grid-flow-col'>
            <div className='bg-blue-300 col-span-3'>
              <img src={chooseUs1} alt="Ecogernos 1" />
            </div>
            <div className='bg-blue-400 col-span-7'>
              <strong>No trabajamos a ciegas.</strong>
              <p>Por eso siempre ofrecemos a nuestros clientes <strong>un diagnóstico inicial completamente gratis para identificar sus oportunidades de mejora.</strong> y es que al final cada empresa es un mundo y a nosotros, nos interesa el tuyo.</p>
              <button className='bg-green-200 text-white p-2 rounded-3xl mt-4'>AGENDA TU DIAGNOSTICO GRATUITO</button>
            </div>
          </div>
          <div className='bg-blue-200 grid grid-flow-col'>
            <div className='bg-blue-300 col-span-7'>
              <strong>No nos limitamos a entregar cajas.</strong>
              <p>Los dispositivos tecnológicos son herramientas clave las empresas. por eso no solo te acompañamos en el proceso de compra para que elijas el mejor dispositivo de acuerdo a tus necesidades. si no que <strong>te lo instalamos, lo configuramos y te lo dejamos listo para empezar a trabajar.</strong></p>
              <button className='bg-green-200 text-white p-2 rounded-3xl mt-4'>CONOCE AQUÍ NUESTRO PORTAFOLIO</button>
            </div>
            <div className='bg-blue-400 col-span-3'>
              <img src={chooseUs3} alt="Ecogernos 1" />
            </div>
          </div>
        </div>
        <div className="bg-red-100 md:col-span-4">
          <div className='h-full bg-blue-200 grid grid-flow-col md:grid-rows-2'>
            <div className='bg-blue-300 col-span-3'>
              <img src={chooseUs2} alt="Ecogernos 1" />
            </div>
            <div className='bg-blue-400 col-span-7'>
              <strong>No te dejamos solo.</strong>
              <p><strong>Una vez decides aliarte con nosotros, cuentas con acompañamiento permanente</strong>, y lo mejor... estamos constantemente atentos a las oportunidades de mejora que surjan en tu empresa. Asi que tu tranquilo, nosotros nos encargamos del desarrollo tecnológico de tu compañia.</p>
              <button className='bg-green-200 text-white p-2 rounded-3xl mt-4'>AGENDA UNA LLAMADA</button>
            </div>
          </div>
        </div>
      </div>

      <h2 className='text-2xl font-bold mb-3' >Somos partner de los grandes lideres en el sector tecnológico</h2>
      <p className='mb-10'>Lo que nos permite ofrecerte soluciones y de alta calidad a precios competitivos</p>

      <div className="grid grid-cols-3 gap-5">
        <div className="bg-blue-100">
          <div className='bg-blue-200'>
            <img src={microsoftLogo} alt="Microsoft_logo" />
          </div>
          <div className='bg-blue-300'>
            <p><strong>Partner certificado de Microsoft</strong></p>
          </div>
        </div>
        <div className="bg-blue-100">
          <div className='bg-blue-200'>
            <img src={esetLogo} alt="Eset_logo" />
          </div>
          <div className='bg-blue-300'>
            <p><strong>Partner certificado de ESET</strong></p>
          </div>
        </div>
        <div className="bg-blue-100">
          <div className='bg-blue-200'>
            <img src={anydekLogo} alt="Anydesk_logo" />
          </div>
          <div className='bg-blue-300'>
            <p><strong>Partner certificado de AnyDeskx</strong></p>
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
