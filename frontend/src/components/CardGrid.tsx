import React from 'react';

interface Card {
  _id: string;
  title: string;
  description: string;
}

interface CardGridProps {
  cards: Card[];
  isSearching: boolean;
  onBackClick: () => void;
}

const CardGrid: React.FC<CardGridProps> = ({ cards, isSearching, onBackClick }) => {
  if (cards.length === 0 && isSearching) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-xl">No results found.</p>
        <button 
          onClick={onBackClick}
          className="mt-4 bg-[#5ca6f0] text-white px-4 py-2 rounded hover:bg-[#4497ea]"
        >
          Back to all cards
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6 md:gap-[4.5rem] px-2 sm:px-4 md:px-[16rem] py-4 sm:py-6 md:py-[4rem]">
        {cards.map((card) => (
          <div key={card._id} className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md">
            <h2 className="text-lg sm:text-xl font-semibold mb-2">{card.title}</h2>
            <hr className='p-2'/>
            <p className="text-sm sm:text-base text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;