import { useState } from 'react';

const Gallery = ({ images }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Define the categories based on the unique values in the images array
  const categories = ['All',  ...new Set(images.map((img) => img.category))];

  // Filter the images based on the selected category
  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8 pb-0 ">
      <div className="flex justify-center mb-8">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`mr-4 py-2 px-4 rounded-full ${
              selectedCategory === category
                ? 'bg-gray-900 text-white transition '
                : 'bg-red-400 shadow-md hover:scale-105 hover:shadow-2xl text-gray-800 font-OpenSans '
            }`}
            onClick={() => setSelectedCategory(category) }
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {filteredImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            category={image.category}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
