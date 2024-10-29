/* eslint-disable react/prop-types */

const ServiceDetailBanner = ({ title, description, image, buttonTitle }) => {
  return (
    <div>
      <img src={image} alt="Desarrollo de Software" className="mx-auto lg:h-64 h-48" />
      <h1 className="text-4xl font-bold text-center my-6">{title}</h1>
      <div className="max-w-3xl mx-auto px-4 text-center">
        {description}
      </div>
      <button className='bg-green-200 hover:bg-green-300 text-white mt-8 px-10 py-2 rounded-3xl text-sm'>{buttonTitle.toUpperCase()}</button>
    </div>
  );
}

export default ServiceDetailBanner;
