import { useState } from 'react';

const Reviews = () => {
  const feedbacks = {
    customer1: 'Lorem ipsum dolor sit consectetur.',
    customer2: 'Lorem ipsum dolor sit consectetur.',
    customer3: 'Lorem ipsum dolor sit consectetur.',
    customer4: 'Lorem ipsum dolor sit consectetur.',
    customer5: 'Lorem ipsum dolor sit consectetur.',
    customer6: 'Lorem ipsum dolor sit consectetur.',
  }

  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % Math.ceil(Object.keys(feedbacks).length / 2));
  };

  const handlePrev = () => {
    setCurrentPage(
      (prevPage) => (prevPage - 1 + Math.ceil(Object.keys(feedbacks).length / 2)) % Math.ceil(Object.keys(feedbacks).length / 2)
    );
  };

  return (
    <div className="flex items-center justify-between py-14 space-x-4"> {/* Add space between items */}
      <button className='bg-gray-300' onClick={handlePrev}>Previous</button>
      <div className="flex flex-wrap w-full bg-gray-200"> {/* Increase the center gap using space-y */}
        {Object.entries(feedbacks).slice(currentPage * 2, currentPage * 2 + 2).map(([key, value], index) => (
          <div key={index} className="w-1/2 p-4"> {/* Increase the width to w-3/5 */}
            <p className="bg-blue-200 p-4">{value}</p>
            <p className="bg-green-200 text-right p-4">{key}</p>
          </div>
        ))}
      </div>
      <button className='bg-gray-300' onClick={handleNext}>Next</button>
    </div>
  );
}

export default Reviews
