import React from 'react'
import { useTranslation } from 'react-i18next';
import { FiArrowRightCircle } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Button = () => {
    const { t } = useTranslation()
    return (
        <div className=" text-white flex items-center justify-center w-auto">
            <Link
                to='/our-work'
                className="flex  mt-4 py-2 px-4 bg-gradient-to-r bg-gray-900 rounded-md text-white text-md font-semibold hover:scale-105 transform transition-all duration-300"
            >
                { t('section2_button')}
                <FiArrowRightCircle size={30} className='pl-2' />

            </Link>
        </div>
    )
}

export default Button