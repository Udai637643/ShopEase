import React from "react";

function ProductCard({ product, onAdd }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-3 flex flex-col items-center transition-all duration-300 hover:shadow-lg w-full sm:w-60 md:w-64">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-36 object-contain mb-2"
      />

      <h3 className="text-sm md:text-base font-semibold mb-1 text-center">
        {product.name}
      </h3>
      <p className="text-gray-600 text-xs text-center mb-1">
        {product.description}
      </p>
      <p className="text-green-600 font-semibold mb-2 text-sm">
      ₹{product.price}
      </p>

      <button
  className="w-full bg-gradient-to-r from-teal-400 to-blue-500 text-white py-2 rounded-lg text-sm font-semibold shadow-md hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-600 transition duration-300"
  onClick={() => onAdd(product)}
>
  Add to Cart
</button>

    </div>
  );
}

export default ProductCard;
