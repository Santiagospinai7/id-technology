import styled from 'styled-components'

const ChooseUs = () => {
  let content = (
    <StyledChooseUs className='my-20 text-center'>
      <h3 className='text-2xl font-bold mb-3' >¿Tu empresa esta bien ahora?</h3>
      <h2 className='text-3xl font-bold mb-5'>
        <span className='bg-black text-white px-2 py-1'>¡Pues te contamos que puedes estar mucho mejor!</span>
      </h2>
      <p className='mb-10'>Aqui te damos 3 razones que <strong>nos hace especiales</strong> como aliados en tecnología</p>
      
      <div className="grid ms:grid-cols-1 md:grid-flow-col gap-5">
        <div className="bg-blue-100 grid gap-5 ms:grid-cols-1 md:col-span-6">
          <div className='bg-blue-200'>
            box-1
          </div>
          <div className='bg-blue-200'>
            box-2
          </div>
        </div>
        <div className="bg-red-100 md:col-span-4">
          <div className='bg-red-200'>
            box-3
          </div>
        </div>
      </div>

    </StyledChooseUs>
  )

  return content
}


const StyledChooseUs = styled.div`
`

const ChooseUsGrid = styled.div`
  .child-grid {
      display: grid;
      grid-template-columns: 70% 30%;
      gap: 1rem;
    }
`

export default ChooseUs
