import Image from "next/image";
import { useState } from "react";

function Tabs() {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow((show) => !show);
  };

  const btnArray = [
    {
      id: 1,
      image: "/icons/engine_about.png",
      text: "Engine",
      checkIcon: "/icons/check-orange.png",
    },
    {
      id: 2,
      image: "/icons/gear_about.png",
      text: "Transmission",
      checkIcon: "/icons/check-orange.png",
    },
    {
      id: 3,
      image: "/icons/electric_about.png",
      text: "Electrical",
      checkIcon: "/icons/check-orange.png",
    },
    {
      id: 4,
      image: "/icons/cooling_about.png",
      text: "Cooling",
      checkIcon: "/icons/check-orange.png",
    },
    {
      id: 5,
      image: "/icons/more_about.png",
      text: "20+ More",
      checkIcon: "/icons/check-orange.png",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* -------------- Buttons --------------- */}
      <div className="flex gap-6 justify-center">
        {btnArray.map((btn, i) => (
          <button
            key={i}
            onClick={handleClick}
            className="btn glass font-medium text-gray-700 capitalize"
          >
            <Image
              width={50}
              height={50}
              className="mr-2"
              src={btn.image}
              alt="cars"
            />
            {btn.text}
            <Image
              width={10}
              height={10}
              className="ml-2"
              src={btn.checkIcon}
              alt="cars"
            />
          </button>
        ))}
      </div>
      {/* ------------ Car details ------------ */}
      <div className="flex flex-col my-[300px]">
        <div className="relative">
          {show ? (
            <div className="flex flex-col">
              {/* ------------ row -------------- */}
              <div className="flex">
                <div className="flex">
                  <div className="absolute top-[-250px] flex flex-col items-center gap-4">
                    <div className="w-[100px] h-[100px] flex items-center justify-center bg-white shadow-xl rounded-md">
                      <Image
                        width={30}
                        height={30}
                        className=""
                        src="/about/price_icon.png"
                        alt="cars"
                      />
                    </div>
                    <p>Competitive Pricing</p>
                  </div>
                  <Image
                    width={104}
                    height={180}
                    className="absolute top-[-190px] left-40"
                    src="/about/top-left.png"
                    alt="cars"
                  />
                </div>

                <div className="flex">
                  <div className="absolute top-[-250px] left-[400px] flex flex-col items-center gap-4">
                    <div className="w-[100px] h-[100px] flex items-center justify-center bg-white shadow-xl rounded-md">
                      <Image
                        width={35}
                        height={35}
                        className=""
                        src="/about/idea_icon.png"
                        alt="cars"
                      />
                    </div>
                    <p>Easier Rent</p>
                    <p className="mt-[-20px]">On Your Budget</p>
                  </div>
                  <Image
                    width={21}
                    height={73}
                    className="absolute top-[-82px] left-[450px]"
                    src="/about/top-middle.png"
                    alt="cars"
                  />
                </div>

                <div className="flex">
                  <div className="absolute top-[-250px] right-10 flex flex-col items-center gap-4">
                    <div className="w-[100px] h-[100px] flex items-center justify-center bg-white shadow-xl rounded-md">
                      <Image
                        width={30}
                        height={30}
                        className=""
                        src="/about/wallet_icon.png"
                        alt="cars"
                      />
                    </div>
                    <p>Most Flexible</p>
                    <p className="mt-[-20px]">Payment Plan</p>
                  </div>
                  <Image
                    width={104}
                    height={180}
                    className="absolute top-[-190px] right-[200px]"
                    src="/about/top-right.png"
                    alt="cars"
                  />
                </div>
              </div>
              {/* ------------ row ------------- */}
              <div className="flex">
                <div className="absolute top-[520px] flex flex-col items-center gap-4">
                  <div className="w-[100px] h-[100px] flex items-center justify-center bg-white shadow-xl rounded-md">
                    <Image
                      width={35}
                      height={35}
                      className=""
                      src="/about/budget_icon.png"
                      alt="cars"
                    />
                  </div>
                  <p>The Best Extended</p>
                  <p className="mt-[-20px]">Auto Warrenties</p>
                </div>
                <div className="absolute top-[520px] left-[400px] flex flex-col items-center gap-4">
                  <div className="w-[100px] h-[100px] flex items-center justify-center bg-white shadow-xl rounded-md">
                    <Image
                      width={35}
                      height={35}
                      className=""
                      src="/about/assist_icon.png"
                      alt="cars"
                    />
                  </div>
                  <p>Roadside</p>
                  <p className="mt-[-20px]">Assistance 24/7</p>
                </div>
                <div className="absolute top-[520px] right-10 flex flex-col items-center gap-4">
                  <div className="w-[100px] h-[100px] flex items-center justify-center bg-white shadow-xl rounded-md">
                    <Image
                      width={35}
                      height={35}
                      className=""
                      src="/about/service_icon.png"
                      alt="cars"
                    />
                  </div>
                  <p>Your Choice</p>
                  <p className="mt-[-20px]">of Mechanic</p>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <Image
          width={864}
          height={461}
          src="/cars/car_top.png"
          className="object-contain w-full h-full"
          alt="car"
        />
      </div>
    </div>
  );
}

export default Tabs;
