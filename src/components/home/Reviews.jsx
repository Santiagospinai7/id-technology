import { useState, useEffect } from 'react';

const Reviews = () => {
  const feedbacks = {
    "Gloria, del sector de seguros": 'Valoro mucho el profesionalismo con el que siempre nos han atentendido lo que hacen que tengan mucha credibilidad y eso es importante para nuestra agencia.',
    "Diana, del sector de la salud": 'Lo que mas valoro es la transparencia y cuidado con la información de mi empresa.',
    "customer3": 'Lorem ipsum dolor sit consectetur.',
    "customer4": 'Lorem ipsum dolor sit consectetur.',
    "customer5": 'Lorem ipsum dolor sit consectetur.',
    "customer6": 'Lorem ipsum dolor sit consectetur.',
  }

  const [currentPage, setCurrentPage] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const totalPages = Math.ceil(Object.keys(feedbacks).length);
  const totalPages2 = Math.ceil(Object.keys(feedbacks).length / 2);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage(
      (prevPage) => (prevPage - 1 + totalPages) % totalPages
    );
  };

  const handleNext2 = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages2);
  };

  const handlePrev2 = () => {
    setCurrentPage(
      (prevPage) => (prevPage - 1 + totalPages) % totalPages2
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="text-center py-14 mx-10">
      <h2 className="text-2xl font-bold mb-10">Lo que valoran nuestros clientes de nuestros servicios</h2>
      {windowWidth < 900 && (
        <div className="flex items-center justify-center py-14 space-x-4 mx-10">
          <button onClick={handlePrev}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAjklEQVR4nO3asQ3CQBAF0WliLdN/JyRImAgCygEhXUSO9HeZ18HXOPDpDiT9yhm4ARvNXYEX8Og+poD7GvMETjRWjglVlglVlglVlgllmVSWSWWZVJZJNarMto7LnzEHjY0YUl+f1k5DjkhhiRSWSGGJFJZIYYkUlkhR/oqHqAklWMfSEdfTlykPBqR/8Abo/nQfGMTYTAAAAABJRU5ErkJggg=="
              style={{ transform: 'rotate(180deg)' }}
              alt="Backward Arrow"
            />
          </button>
          <div className="flex flex-wrap w-full ">
            {Object.entries(feedbacks).slice(currentPage * 1, currentPage * 1 + 1).map(([key, value], index) => (
              <div key={index} className="w-2/2 p-4">
                <p className="p-4 text-green-200 font-bold">"{value}"</p>
                <p className="text-right p-4 font-bold">- {key}</p>
              </div>
            ))}
          </div>
          <button onClick={handleNext}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAjklEQVR4nO3asQ3CQBAF0WliLdN/JyRImAgCygEhXUSO9HeZ18HXOPDpDiT9yhm4ARvNXYEX8Og+poD7GvMETjRWjglVlglVlglVlgllmVSWSWWZVJZJNarMto7LnzEHjY0YUl+f1k5DjkhhiRSWSGGJFJZIYYkUlkhR/oqHqAklWMfSEdfTlykPBqR/8Abo/nQfGMTYTAAAAABJRU5ErkJggg=="/></button>
        </div>
      )}

      {windowWidth >= 900 && (
        <div className="flex items-center justify-between py-14 space-x-4 mx-10"> 
          <button onClick={handlePrev2}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAjklEQVR4nO3asQ3CQBAF0WliLdN/JyRImAgCygEhXUSO9HeZ18HXOPDpDiT9yhm4ARvNXYEX8Og+poD7GvMETjRWjglVlglVlglVlgllmVSWSWWZVJZJNarMto7LnzEHjY0YUl+f1k5DjkhhiRSWSGGJFJZIYYkUlkhR/oqHqAklWMfSEdfTlykPBqR/8Abo/nQfGMTYTAAAAABJRU5ErkJggg=="
              style={{ transform: 'rotate(180deg)' }}
              alt="Backward Arrow"
            />
          </button>
          <div className="flex flex-wrap w-full "> 
            {Object.entries(feedbacks).slice(currentPage * 2, currentPage * 2 + 2).map(([key, value], index) => (
              <div key={index} className="w-1/2 p-4"> 
                <p className="p-4 text-green-200 font-bold">"{value}"</p>
                <p className="text-right p-4 font-bold">- {key}</p>
              </div>
            ))}
          </div>
          <button onClick={handleNext2}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAjklEQVR4nO3asQ3CQBAF0WliLdN/JyRImAgCygEhXUSO9HeZ18HXOPDpDiT9yhm4ARvNXYEX8Og+poD7GvMETjRWjglVlglVlglVlgllmVSWSWWZVJZJNarMto7LnzEHjY0YUl+f1k5DjkhhiRSWSGGJFJZIYYkUlkhR/oqHqAklWMfSEdfTlykPBqR/8Abo/nQfGMTYTAAAAABJRU5ErkJggg=="/></button>
        </div>
      )}
    </div>
  );
}

export default Reviews