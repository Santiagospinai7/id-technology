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
          <div className='bg-blue-200 grid grid-flow-col'>
            <div className='bg-blue-300 col-span-3'>
              image
            </div>
            <div className='bg-blue-400 col-span-7'>
              box-1b
            </div>
          </div>
          <div className='bg-blue-200 grid grid-flow-col'>
            <div className='bg-blue-300 col-span-7'>
              box-2a
            </div>
            <div className='bg-blue-400 col-span-3'>
              image
            </div>
          </div>
        </div>
        <div className="bg-red-100 md:col-span-4">
          {/* <div className='h-full bg-red-200 grid grid-rows-2' style={{ gridTemplateRows: "30% 70%" }}>
            <div className='bg-red-300'>
              image
            </div>
            <div className='bg-red-400'>
              box-3b
            </div>
          </div> */}
          <div className='h-full bg-blue-200 grid grid-flow-col md:grid-rows-2'>
            <div className='bg-blue-300 col-span-3'>
              box-3a
            </div>
            <div className='bg-blue-400 col-span-7'>
              image
            </div>
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
