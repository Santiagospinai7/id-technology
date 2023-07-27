import { useState } from 'react';

const Reviews = () => {
  const items = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7',
    'Item 8',
  ];

  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % Math.ceil(items.length / 2));
  };

  const handlePrev = () => {
    setCurrentPage(
      (prevPage) => (prevPage - 1 + Math.ceil(items.length / 2)) % Math.ceil(items.length / 2)
    );
  };

  return (
    <div className="flex">
      <button onClick={handlePrev}>Previous</button>
      <div className="flex flex-wrap">
        {items.slice(currentPage * 2, currentPage * 2 + 2).map((item, index) => (
          <div key={index} className="w-1/2 p-4">
            <p className="bg-blue-200 p-4">{item}</p>
          </div>
        ))}
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Reviews
