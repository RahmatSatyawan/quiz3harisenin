import React from "react";
import Product from "../components/Product";
import { productList_DUMMY } from "../utils/constans";

const List = () => {
  const products = productList_DUMMY;

  return (
    <>
      <div className="max-w-7xl mx-auto my-10 py-20 px-4 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Latest Customers
          </h5>
          <a
            href="/"
            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Home
          </a>
        </div>
        <div>
          {products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </div>
    </>
  );
};

export default List;
