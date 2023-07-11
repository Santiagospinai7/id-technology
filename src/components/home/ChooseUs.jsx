import styled from 'styled-components'

const ChooseUs = () => {
  let content = (
    <StyledChooseUs className='my-20 text-center'>
      <h3 className='text-2xl font-bold mb-3' >¿Tu empresa esta bien ahora?</h3>
      <h2 className='text-3xl font-bold mb-5'>
        <span className='bg-black text-white px-2 py-1'>¡Pues te contamos que puedes estar mucho mejor!</span>
      </h2>
      <p>Aqui te damos 3 razones que <strong>nos hace especiales</strong> como aliados en tecnología</p>
    </StyledChooseUs>
  )

  return content
}

const StyledChooseUs = styled.div`
  
`

export default ChooseUs
