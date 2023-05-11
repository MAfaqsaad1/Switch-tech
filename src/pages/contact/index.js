import React from "react";
import contactImg from "../../assets/contact1.png";
import MaskPng from "../../assets/mask.png";

function Contact() {
    return (
        <div className="">
            <div className=" mx-auto md:px-36 px-5 py-10 ">
                <div className="md:flex items-center justify-end mt-10 md:mt-14 px-0">
                    <div className="md:w-2/5 w-full relative h-full flex items-center">
                        <div className="bg-white w-full md:w-auto shadow-md md:absolute z-10 left-0 md:-right-32 p-6 md:py-12 py-8 space-y-6">
                            <div className="flex space-x-3">
                                <div>
                                    <span className="text-black pb-0.5 font-medium text-sm block select-text">
                                        Toll Free Number
                                    </span>
                                    <a
                                        href="tel:+92 308 488 6911"
                                        className="text-black-200 font-medium lg:text-2xl md:text-base text-sm"
                                    >
                                        +92 308 488 6911
                                    </a>
                                </div>
                            </div>
                            <div className="flex space-x-3">
                                <div>
                                    <span className="text-black pb-0.5 font-medium text-sm block select-text">
                                        Email
                                    </span>
                                    <a
                                        href="mailto:info@switchtechsupply.com"
                                        className="text-black font-medium lg:text-2xl md:text-base text-sm"
                                    >
                                        info@switchtechsupply.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-4/5 lg:h-[70vh] h-full md:mt-0 relative hidden md:flex">
                        <span>
                            <img
                                alt="group25"
                                className="h-full object-cover"
                                src={contactImg}
                            />
                        </span>
                    </div>
                </div>
            </div>
            <div className=" md:max-w-7xl px-5 mx-auto lg:p-5 mb-16">
                <div className="bg-gray-100 py-16 p-5 md:px-36">
                    <div className=" mx-auto">
                        <h3 className="font-semibold md:text-2xl text-base text-center text-black">
                            Leave Us Your <span className="text-primary">Information</span>
                        </h3>
                        <span className="text-gray-700 text-base text-center leading-5 font-light pt-2 block select-text">
                            Please leave your contact details with a short message so that our
                            team can reach you and provide the best help needed.
                        </span>
                        <div className="space-y-3 pt-10">
                            <div className="grid grid-cols-2 gap-3">
                                <input
                                    type="name"
                                    name="name"
                                    id=""
                                    className="p-2 py-1.5 block w-full border
                                     border-gray-100 placeholder-gray-700 text-gray-700 focus:outline-none "
                                    placeholder="Name"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    id=""
                                    className="p-2 py-1.5 block w-full border   border-gray-100 placeholder-gray-700 text-gray-700 focus:outline-none "
                                    placeholder="Email"
                                />
                            </div>
                            <input
                                type="text"
                                name="subject"
                                id=""
                                className="p-2 py-1.5 block w-full border 
                                 border-gray-100 placeholder-gray-700 text-gray-700 focus:outline-none "
                                placeholder="Subject"
                            />
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Message"
                                className="p-2 py-1.5 block w-full border  border-gray-100 placeholder-gray-700 text-gray-700 focus:outline-none"
                            ></textarea>
                        </div>
                        <div className="md:pt-10 pt-6 flex justify-center">
                            <button
                                className="border hover:border-primary border-transparent
                                 hover:text-primary px-6 py-2.5 bg-primary hover:bg-white text-white"
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-cover" style={{ backgroundImage: `url(${MaskPng})` }}>
                <div className="flex items-center h-36  md:px-36 px-5 justify-between">
                    <div className="">
                        <h3 className="text-white text-2xl font-medium">Join Our Newsletter</h3>
                    </div>
                    <div className="flex">
                        <input type="email" className="px-2 outline-none" placeholder="Email" />
                        <button className="border hover:border-primary border-transparent
                         hover:text-primary px-6 py-2.5 bg-primary
                          hover:bg-white text-white">Subscribe</button>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Contact;
