/* eslint-disable react/prop-types */

const ServiceDetailBanner = ({ title, description, image, buttonTitle }) => {
  return (
    <div>
      <img src={image} alt="Desarrollo de Software" className="mx-auto lg:h-64 h-48" />
      <h1 className="text-4xl font-bold text-center my-6">{title}</h1>
      <div className="max-w-3xl mx-auto px-4 text-center">
        {description}
      </div>
      <button 
      onClick={() => window.open('https://wa.me/+573159266621?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios')}
      className='bg-green-200 hover:bg-green-300 text-white mt-8 px-10 py-2 rounded-3xl text-sm'>{buttonTitle.toUpperCase()}</button>
    </div>
  );
}

export default ServiceDetailBanner;
