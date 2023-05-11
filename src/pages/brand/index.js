import React from "react";

import img13 from "../../assets/img_13.png";
import img14 from "../../assets/img_14.png";
import img15 from "../../assets/img_15.png";
import img16 from "../../assets/img_16.png";
import img17 from "../../assets/img_17.png";
import img18 from "../../assets/img_18.png";
import img19 from "../../assets/img_19.png";
import img20 from "../../assets/img_20.png";
function Brands() {
    return (
        <div className="pb-10">

            <div class=" md:px-36 px-4 w-full mx-auto pt-10 pb-16">
                <h1 class="font-semibold text-2xl">
                    Our <span class="text-primary">Top Brands</span>
                </h1>
                <div class="grid md:grid-cols-4 grid-cols-2 items-center gap-x-3 lg:gap-y-16 pt-5">
                    <div class="flex h-36 items-center justify-center cursor-pointer transition-all">
                        <div class="w-full h-full" href="/brands/lenovo">
                            <img src={img13} alt="" srcset="" className="" />

                        </div>
                    </div>
                    <div class="flex h-36 items-center justify-center cursor-pointer transition-all">
                        <div class="w-full h-full" href="/brands/cisco">
                            <img src={img14} alt="" srcset="" className="" />
                        </div>
                    </div>
                    <div class="flex h-36 items-center justify-center cursor-pointer transition-all">
                        <div class="w-full h-full" href="/brands/juniper-networks">
                            <img src={img15} alt="" srcset="" className="" />
                        </div>
                    </div>
                    <div class="flex h-36 items-center justify-center cursor-pointer transition-all">
                        <div class="w-full h-full" href="/brands/hp">
                            <img src={img16} alt="" srcset="" className="" />
                        </div>
                    </div>
                    <div class="flex h-36 items-center justify-center cursor-pointer transition-all">
                        <div class="w-full h-full" href="/brands/dell">
                            <img src={img17} alt="" srcset="" className="" />
                        </div>
                    </div>
                    <div class="flex h-36 items-center justify-center cursor-pointer transition-all">
                        <div class="w-full h-full" href="/brands/seagate">
                            <img src={img18} alt="" srcset="" className="" />
                        </div>
                    </div>
                    <div class="flex h-36 items-center justify-center cursor-pointer transition-all">
                        <div class="w-full h-full" href="/brands/intel">
                            <img src={img19} alt="" srcset="" className="" />
                        </div>
                    </div>
                    <div class="flex h-36 items-center justify-center cursor-pointer transition-all">
                        <div class="w-full h-full" href="/brands/finisar">
                            <img src={img20} alt="" srcset="" className="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Brands;
