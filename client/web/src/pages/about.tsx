/* eslint-disable react/no-unescaped-entities */
import DownloadApp from "@/components/Home/DownloadApp";
import ScrollToTop from "@/components/Layout/ScrollToTop";
import Tabs from "@/components/Tabs/Tabs";
import Image from "next/image";

const Account = () => {
  return (
    <div>
      <Image
        width={1920}
        height={500}
        className="w-full h-full]"
        src="/cars/cars_about.png"
        alt="cars"
      />
      <h1 className="text-2xl font-medium">Our Team</h1>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:gap-20 sm:gap-2">
          <div className="flex flex-col items-center">
            <Image
              width={163}
              height={255}
              className="hover:scale-95 duration-200"
              src="/about/ganzo.png"
              alt="ganzo"
            />
            <span className="mt-5">Ganzorig</span>
            <p className="text-xs">ganzorig@gmail.com</p>
          </div>
          <div className="flex flex-col items-center mt-6">
            <Image
              width={163}
              height={255}
              className="hover:scale-95 duration-200"
              src="/about/mairaa.png"
              alt="maira"
            />
            <span className="mt-6">Maira</span>
            <p className="text-xs">Maira@gmail.com</p>
          </div>
          <div className="flex flex-col items-center mt-10">
            <Image
              width={181}
              height={242}
              className="hover:scale-95 duration-200"
              src="/about/temka.png"
              alt="temka"
            />
            <span className="mt-5">Temuujin</span>
            <p className="text-xs">temkasobri@gmail.com</p>
          </div>
          <div className="flex flex-col items-center mt-8">
            <Image
              width={172}
              height={255}
              className="hover:scale-95 duration-200"
              src="/about/lkhagva.png"
              alt="lkhagva"
            />
            <span className="mt-5">Lkhagva</span>
            <p className="text-xs">Lkhagva@gmail.com</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              width={170}
              height={274}
              className="hover:scale-95 duration-200"
              src="/about/bilguun1.png"
              alt="bilguun"
            />
            <span className="mt-6">Bilguun</span>
            <p className="text-xs">Bilguun@gmail.com</p>
          </div>
        </div>
        <div className="w-full mt-20 flex flex-col items-center">
          <div className="w-full h-[1.5px] bg-gray-300"></div>
          <h2 className="mt-10 text-xl font-semibold">About Us</h2>
          <p className="mt-10 p-4 text-xs tracking-wide leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="m-10 font-medium  text-red-primary">Top Rated Car Rental</h1>
          <Tabs />
        </div>
      </div>
      <DownloadApp />
      <ScrollToTop />
    </div>
  );
};

export default Account;
