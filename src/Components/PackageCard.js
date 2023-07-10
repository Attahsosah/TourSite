import React from "react";

const PackageCard = ({ title, description, price, features, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <img className="" src={image} />
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-col items-center">
        <p className="text-[#f24747] text-3xl font-bold mb-4">{price}</p>
        <button className="bg-[#f24747] hover:bg-[#b92f2f] text-white font-bold py-2 px-4 rounded">
          Select Package
        </button>
      </div>
      <div className="mt-6">
        {features.map((feature, index) => (
          <p key={index} className="text-gray-600 mb-2">
            <svg
              className="w-4 h-4 fill-current text-green-500 mr-2 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
            </svg>
            {feature}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PackageCard;
