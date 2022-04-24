import React from "react";
import { useNavigate } from "react-router-dom";

// const Products = () => {
//   const [price, setPrice] = useState(4000);

//   const changePriceHandler = () => {
//     setPrice(6000);
//   };

//   if (price > 5000) {
//     throw new Error('Price is over standard');
//   }

//   return (
//     <div>
//       <ul>
//         <li>
//           <h4>Indomie</h4>
//           <p>Rp. {price}</p>
//           <button onClick={changePriceHandler}>Change Price</button>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Products;

const Product = ({ product }) => {
  console.log(product.id);
  const navigate = useNavigate();

  // /product/:id
  const productDetailHandler = () => {
    navigate("1");
  };

  return (
    <>
      <div onClick={productDetailHandler}>
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://indomie.com.au/wp-content/uploads/2020/03/migorengjumbo-new.png"
                  alt="image"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {product.title}
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                Rp. {product.price}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Product;
