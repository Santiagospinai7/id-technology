import styled from 'styled-components'

const ChooseUs = () => {
  let content = (
    <StyledChooseUs className='my-20 text-center'>
      <h3 className='text-2xl font-bold mb-3' >¿Tu empresa esta bien ahora?</h3>
      <h2 className='text-3xl font-bold mb-5'>
        <span className='bg-black text-white px-2 py-1'>¡Pues te contamos que puedes estar mucho mejor!</span>
      </h2>
      <p className='mb-10'>Aqui te damos 3 razones que <strong>nos hace especiales</strong> como aliados en tecnología</p>
      
      <ChooseUsGrid className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid gap-4">
              <div>
                  <div className="h-50 bg-blue-500 max-w-full rounded-lg">
                    hi
                  </div>
              </div>
              <div>
                  <div className="h-50 bg-red-500 max-w-full rounded-lg">
                    hi
                  </div>
              </div>
          </div>
          <div className="grid gap-4">
              <div>
                  <div className="h-50 bg-green-500 max-w-full rounded-lg">
                    hi
                  </div>
              </div>
          </div>
      </ChooseUsGrid>

    </StyledChooseUs>
  )

  return content
}


const StyledChooseUs = styled.div`
`

const ChooseUsGrid = styled.div`
`

export default ChooseUs
