import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';  
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';  
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import WhatsappButton from '../components/Home/WhatsappButton';

const ProductPage = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/post/${id}`);
                setProduct(response.data.body); 
            } catch (err) {
                setError("Failed to load product details.");
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) {
        return <div className="text-center">{t('loading')}</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    return (
        <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                    <div className="relative mb-12 lg:mb-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-500 opacity-60"></div>
                        {product.image && product.image.length > 1 ? (
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                effect="fade"
                                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                                className="mySwiper"
                            >
                                {product.image.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <img
                                            className="rounded-lg shadow-lg w-full h-auto object-cover"
                                            src={`http://localhost:5000/${image}`}
                                            alt={`Product Image ${index + 1}`}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        ) : (
                            <img
                                className="rounded-lg shadow-lg w-full h-auto object-cover"
                                src={product.image[0] || "/assets/images/default-image.jpg"}
                                alt={product.title}
                            />
                        )}
                    </div>

                    <div className="lg:flex lg:flex-col justify-center">
                        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{product.title}</h1>
                        <p className="text-lg text-gray-700 mb-6">{product.description}</p>
                        <div className="flex items-center space-x-4 mb-6">
                            <span className="text-2xl font-semibold text-gray-900">${product.price}</span>
                            {product.oldPrice && (
                                <span className="text-lg text-gray-500 line-through">${product.oldPrice}</span>
                            )}
                        </div>
                        <div className="flex space-x-4">
                            <Link to='/contact' className="px-6 py-3 bg-gray-950 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 transform hover:scale-105">
                                {t('product_contact')}
                            </Link>
                            <Link  to='https://wa.me/03489324934' className="px-6 py-3 bg-gray-950 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 transform hover:scale-105">
                             Via Whatsapp
                            </Link>
                        </div>

                        <div className="mt-8 flex items-center space-x-4">
                            <div className="flex items-center">
                                <span className="text-lg text-gray-800">{product.rating || 4.8}</span>
                                <svg className="w-5 h-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" stroke="currentColor">
                                    <path fillRule="evenodd" d="M9.049 2.927a1 1 0 011.902 0l2.355 4.772 5.26.765a1 1 0 01.555 1.706l-3.808 3.707.9 5.243a1 1 0 01-1.45 1.054L10 15.847l-4.715 2.478a1 1 0 01-1.45-1.054l.9-5.243-3.808-3.707a1 1 0 01.555-1.706l5.26-.765 2.355-4.772z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="text-gray-600">{product.reviewsCount || 1230} Reviews</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
