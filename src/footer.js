import React from "react";
import bgFooter from "./assets/bg-footer.png";
import footerLogo from "./assets/footer-logo.png";

function Footer() {
  return (
    <div>
      <div
        className="footer-bg relative text-gray-100 md:py-6"
        style={{ backgroundImage: `url(${bgFooter})` }}
      >
        <div className=" mx-auto md:px-36 px-4  grid md:grid-cols-12 grid-cols-1 gap-6 py-10">
          <div className="md:col-span-6 flex-row relative z-50">
            <div className=" md:mb-10 mb-6 ">
              <img src={footerLogo} alt="" srcset="" />
            </div>
            <span className="text-base pb-10 text-gray-100 leading-5 block select-text">
              Switch Tech Supply LLC is the global IT hardware reseller and IT
              product supplier. Having strong connections with renowned IT
              hardware manufacturers, we help our customers get the best
              products at incredible prices regardless of their size &amp;
              nature. Switch Tech Supply work closely with all the valued
              customers to help them procure the best-in-class IT hardware
              meeting their needs from well-reputed brands &amp;
              manufacturers.&nbsp;
            </span>
            <div className="w-full flex-row lg:flex items-center justify-between space-y-4 lg:space-y-0">
              <div className="flex md:w-56 items-center border border-gray-200 space-x-3 px-4 py-2.5">
                <div className="w-8 h-8 relative"></div>
                <a
                  href="tel:+923084886911"
                  className="flex flex-col space-y-0.5"
                >
                  <span className="text-sm block select-text">
                    Talk to Our Support
                  </span>
                  <span className="text-sm tracking-wide block select-text">
                    +92 308 488 6911
                  </span>
                </a>
              </div>
              <div className="flex md:w-56 items-center border md:justify-center border-gray-200 space-x-3 px-4 py-2.5">
                <a
                  href="mailto:info@switchtechsupply.com"
                  className="flex flex-col space-y-0.5"
                >
                  <span className="text-sm block select-text">
                    Talk to Our Support
                  </span>
                  <span className="text-sm tracking-wide block select-text">
                    info@switchtechsupply.com
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="md:col-span-3 md:pt-10 pt-6 text-base space-y-4">
            <h2 className="text-base">Quick links</h2>
            <ul className="space-y-2">
              <li>
                <a href="/about">About us</a>
              </li>
              <li>
                <a href="/contact">Contact us</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms-of-sale">Terms and Conditions</a>
              </li>
              <li>
                <a href="/refund-policy">Refund Policy</a>
              </li>
              <li>
                <a href="/faq">FAQs</a>
              </li>
              <li>
                <a href="/blogs">Blogs</a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3 md:pt-10 pt-5">
            <h2 className="text-base">Newsletter</h2>
            <h2 className="text-base mt-4">
              Subscribe to our mailing list to get the new updates!
            </h2>
            <div className="bg-gray-100 flex items-center space-x-2 justify-between px-1.5 py-1 w-full mt-4">
              <div className="pl-1"></div>
              <input
                type="email"
                name=""
                id=""
                className="text-gray-700 text-base py-2  w-full focus:outline-none "
                placeholder="Email Address"
              />
              <div className="bg-primary w-12 flex items-center cursor-pointer justify-center h-7"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
