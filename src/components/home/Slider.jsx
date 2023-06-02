import LogoMicrosoft from '../../assets/img/Partner_Microsoft.png'

const Slider  = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-row justify-center items-center'>
        <div className='w-1/5'>
          <img src={LogoMicrosoft} alt='logo' className='w-full h-full object-cover' />
        </div>
        <div className='w-1/5'>
          <img src={LogoMicrosoft} alt='logo' className='w-full h-full object-cover' />
        </div>
        <div className='w-1/5'>
          <img src={LogoMicrosoft} alt='logo' className='w-full h-full object-cover' />
        </div>
        <div className='w-1/5'>
          <img src={LogoMicrosoft} alt='logo' className='w-full h-full object-cover' />
        </div>
        <div className='w-1/5'>
          <img src={LogoMicrosoft} alt='logo' className='w-full h-full object-cover' />
        </div>
      </div>
    </div>
  )
}

export default Slider
