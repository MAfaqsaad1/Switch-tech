import React from "react";
import AboutImg from "../../assets/about.webp";
import officeImg from "../../assets/office.webp";

function About() {
    return (
        <div className="pb-20">
            <div className="md:px-36 w-full mx-auto  px-5 md:py-16 pt-10">
                <div className="md:px-10 mx-auto md:flex  md:space-x-8">
                    <div className="mt-5 flex flex-col md:w-9/12 lg:pt-4 md:pt-0 pt-4">
                        <h1 className="pb-3 text-black-200 font-bold text-3xl">
                            About <span className="text-secondry">Us</span>
                        </h1>
                        <span className="text-sm font-bold text-black leading-5 block select-text">
                            Switch Tech Supply story begins with the ambition and
                            entrepreneurial spirit of professionals who shared a collective
                            desire to innovate and create.
                        </span>
                        <div className="mt-5 h-1 w-14 bg-secondry"></div>
                        <span className="text-sm leading-5 text-gray-800 pt-7 block select-text">
                            Switch Tech Supply began with the vision to provide the best
                            quality products hand-picked by our expert team
                        </span>
                        <span className="text-sm leading-5 text-gray-800 pt-3 block select-text">
                            Switch Tech Supply is a team of experts that work together to
                            create a successful and innovative business for hardware IT
                            products. By working with the best manufacturers, we provide our
                            clients with the best. Our business headquarters is based in
                            Wyoming, but our products are sold different countries. Our goals
                            and objectives align well to give clients best experience with our
                            IT products.
                        </span>
                        <span className="text-sm leading-5 text-gray-800 pt-3 block select-text">
                            With the vision to become one of the top IT reseller companies in
                            the world with its products, Switch Tech Supply is slowly
                            expanding to reach out to every client around the world.
                        </span>
                        <button
                            className="text-base mt-10 w-56 text-white px-8 py-2.5 bg-primary hover:bg-white border border-primary hover:text-primary"
                            aria-label="this is button"
                        >
                            Read More
                        </button>
                    </div>
                    <div className="mt-4 w-full relative ml-0 md:w-5/12 flex items-center justify-center">
                        <span>
                            <img alt="about-new" src={AboutImg} />
                        </span>
                    </div>
                </div>
            </div>
            <div className="md:px-36 mx-auto md:p-5 px-5 py-5 md:pb-16">
                <div className="grid md:grid-cols-6 grid-cols-1 gap-7">
                    <div className="h-[350px] md:col-span-2 relative">
                        <span>
                            <img src={officeImg} alt="" srcset="" />
                        </span>
                    </div>
                    <div className="w-full md:col-span-4">
                        <span className="md:text-2xl text-lg font-bold text-black sm:text-lg w-full block select-text">
                            We Provide Continuous &amp; Kind Service for Customers
                        </span>
                        <div className="h-0.5 my-2 bg-secondry w-10"></div>
                        <dlv className="divide-y divide-gray-300">
                            <div className="py-2 md:px-3">
                                <div className="text-lg">
                                    <button className="text-left w-full flex justify-between items-center">
                                        <span className="font-normal md:text-base text-2xs text-black-200 md:leading-none">
                                            Customer Service
                                        </span>
                                        <span>
                                            <span className="ml-6 md:h-5 h-4 md:w-5 w-4 bg-primary text-white flex items-center justify-center">
                                                -
                                            </span>
                                        </span>
                                    </button>
                                </div>
                                <div>
                                    <div className="my-2" id="">
                                        <h6 className="text-sm leading-5 font-light text-gray-700">
                                            Our customer service is 24/7 ready to answer any kind of
                                            queries you might have about our products. We believe in
                                            providing the best experience to our customers with our
                                            products
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className="py-2 md:px-3">
                                <div className="text-lg">
                                    <button className="text-left w-full flex justify-between items-center">
                                        <span className="font-normal md:text-base text-2xs text-black-200 md:leading-none">
                                            Online Consultation
                                        </span>
                                        <span>
                                            <span className="ml-6 md:h-5 h-4 md:w-5 w-4 bg-primary text-white flex items-center justify-center">
                                                +
                                            </span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className="py-2 md:px-3">
                                <div className="text-lg">
                                    <button className="text-left w-full flex justify-between items-center">
                                        <span className="font-normal md:text-base text-2xs text-black-200 md:leading-none">
                                            Sales Management
                                        </span>
                                        <span>
                                            <span className="ml-6 md:h-5 h-4 md:w-5 w-4 bg-primary text-white flex items-center justify-center">
                                                +
                                            </span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className="py-2 md:px-3">
                                <div className="text-lg">
                                    <button
                                        className="text-left w-full flex justify-between items-center"
                                        id="headlessui-disclosure-button-19"
                                        type="button"
                                        aria-expanded="false"
                                    >
                                        <span className="font-normal md:text-base text-2xs text-black-200 md:leading-none">
                                            Complete buyer Supply Store
                                        </span>
                                        <span>
                                            <span className="ml-6 md:h-5 h-4 md:w-5 w-4 bg-primary text-white flex items-center justify-center">
                                                +
                                            </span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </dlv>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default About;
