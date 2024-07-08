import React from "react";
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="w-full lg:w-1/3 text-center lg:text-left mb-6 lg:mb-0">
                        <h2 className="text-2xl font-bold">VideoUploader</h2>
                        <p className="text-gray-400 mt-2">
                            Upload and share your videos with the world.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/3 text-center mb-6 lg:mb-0">
                        <h3 className="text-xl font-semibold">Quick Links</h3>
                        <ul className="mt-4">
                            <li className="mt-2">
                                <a href="/" className="text-gray-400 hover:text-white">Home</a>
                            </li>
                            <li className="mt-2">
                                <a href="/" className="text-gray-400 hover:text-white">Upload Video</a>
                            </li>
                            <li className="mt-2">
                                <a href="/" className="text-gray-400 hover:text-white">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-1/3 text-center lg:text-right">
                        <h3 className="text-xl font-semibold">Follow Us</h3>
                        <div className="flex justify-center lg:justify-end mt-4">
                            <a href="#" className="text-gray-400 hover:text-white mx-2">
                            <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white mx-2">
                            <FontAwesomeIcon icon={faTwitter} />                            </a>
                            <a href="#" className="text-gray-400 hover:text-white mx-2">
                            <FontAwesomeIcon icon={faInstagram} />                            </a>
                            <a href="#" className="text-gray-400 hover:text-white mx-2">
                            <FontAwesomeIcon icon={faLinkedin} />                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-4">
                    <p className="text-center text-gray-400 text-sm">
                        &copy; 2024 VideoUploader. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
