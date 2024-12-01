import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import axios from "axios"; // Import axios for making API requests

const OurWork = () => {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(""); // Track errors

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/post"); // Replace with your actual API endpoint
        console.log(response)
        setProducts(response.data.body ); // Set the products data to state
      } catch (err) {
        setError("Failed to load products."); // Handle any errors
      } finally {
        setLoading(false); // Set loading to false when done
      }
    };

    fetchProducts();
  }, []); // Run only once when the component mounts

  return (
    <section className="our-work py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-950">
          {t("work_title")}
        </h1>
        <p className="text-lg md:text-xl text-gray-800 mt-4">{t("work_para")}</p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12 lg:px-20">
        {loading ? (
          <div className="text-center col-span-full">
            <p className="text-xl text-gray-700">{t("loading")}</p> {/* Show loading text */}
          </div>
        ) : error ? (
          <div className="text-center col-span-full">
            <p className="text-xl text-red-500">{error}</p> {/* Show error message */}
          </div>
        ) : (
          products.map((product, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
            >
              {/* Image */}
              <img
                src={`http://localhost:5000/${product.image[0]}` || "/assets/images/default-image.jpg"} // Fallback image
                alt={product.title}
                className="w-full h-72 object-cover"
              />

              {/* Text Overlay */}
              <div className="absolute inset-0 opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 text-white z-10">
                <h3 className="text-lg md:text-2xl font-semibold">{product.title}</h3>
                <p className="text-sm md:text-base mt-1">{product.description}</p>
              </div>

              {/* Button Overlay */}
              <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Link
                  to={`/single/${product._id}`} // Assuming the product has an _id field
                  className="px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-md hover:bg-black"
                >
                  {t("work_button")}
                </Link>
              </div>
            </div>
          ))
        )}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-12">
        <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-semibold text-lg rounded-lg hover:scale-105 transition-transform duration-300">
          {t("discover_more_button")}
        </button>
      </div>
    </section>
  );
};

export default OurWork;
