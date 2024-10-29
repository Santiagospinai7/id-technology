/* eslint-disable react/prop-types */
import InfoCard from "../UI/InfoCard";

const ExperienceShowCase = ({ title, description, cardData }) => {
    return (
        <>
          <h2 className='text-2xl font-bold mb-5'>
            <span className='bg-zinc-800 text-white px-2 py-1'>{title}</span>
          </h2>
          <p className="mt-2 text-lg font-bold">{description}</p>
          
          <div className="mt-16 grid gap-16 md:grid-cols-2 lg:grid-cols-3 mx-15 lg:mx-20">
            {
              cardData.map((card, index) => (
                <InfoCard
                  key={index}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                />
              ))
            }
          </div>
        </>
    );
}

export default ExperienceShowCase;
