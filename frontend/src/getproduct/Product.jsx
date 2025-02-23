import React, { useEffect, useState } from "react";
import axios from "axios";
import "./product.css";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "mongodb://127.0.0.1:27017/api/products"
        );
        setProducts(response.data);
      } catch (error) {
        console.log("Error while fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full overflow-hidden">
      {/* Table wrapper with horizontal scroll for small screens */}
      <div className="w-full overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 min-w-[800px]">
          <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white">
            <div className="flex justify-between items-center flex-wrap gap-4">
              <div>
                <h2 className="text-xl font-semibold">Our Products</h2>
                <p className="mt-1 text-sm font-normal text-gray-500">
                  Browse a list of our products.
                </p>
              </div>
              <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
                + Add new Product
              </button>
            </div>
          </caption>

          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-4 py-3 sm:px-6">
                Product
              </th>
              <th
                scope="col"
                className="px-4 py-3 sm:px-6 hidden sm:table-cell"
              >
                Tags
              </th>
              <th scope="col" className="px-4 py-3 sm:px-6">
                Price
              </th>
              <th scope="col" className="px-4 py-3 sm:px-6">
                Stock
              </th>
              <th
                scope="col"
                className="px-4 py-3 sm:px-6 hidden md:table-cell"
              >
                Description
              </th>
              <th scope="col" className="px-4 py-3 sm:px-6">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {products.map((product, index) => (
              <tr key={product.id} className="bg-white hover:bg-gray-50">
                <td className="px-4 py-3 sm:px-6">
                  <div className="flex items-center space-x-3">
                    {/* Responsive image size */}
                    {/* <div className="flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover"
                      />
                    </div> */}
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-900">
                        {product.name}
                      </span>
                      {/* Show tags on mobile in product cell */}
                      <div className="sm:hidden flex flex-wrap gap-1 mt-1">
                        <span
                          key={index}
                          className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-600"
                        >
                          {product.hashtags}
                        </span>
                      </div>
                    </div>
                  </div>
                </td>

                {/* Hide tags column on mobile */}
                <td className="px-4 py-3 sm:px-6 hidden sm:table-cell">
                  <div className="flex flex-wrap gap-1">
                    <span
                      key={index}
                      className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600"
                    >
                      {product.hashtags}
                    </span>
                  </div>
                </td>

                <td className="px-4 py-3 sm:px-6 font-medium whitespace-nowrap">
                  {product.price}
                </td>

                <td className="px-4 py-3 sm:px-6 whitespace-nowrap">
                  <span className="px-2 py-1 rounded-full text-xs">
                    {product.stock}
                  </span>
                </td>

                {/* Hide description on mobile and tablets */}
                <td className="px-4 py-3 sm:px-6 hidden md:table-cell">
                  <p className="truncate max-w-xs" title={product.description}>
                    {product.description}
                  </p>
                </td>

                <td className="px-4 py-3 sm:px-6">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm whitespace-nowrap"
                      onClick={() => {
                        /* Handle update */
                      }}
                    >
                      Update
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800 font-medium text-sm whitespace-nowrap"
                      onClick={() => {
                        /* Handle delete */
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;
