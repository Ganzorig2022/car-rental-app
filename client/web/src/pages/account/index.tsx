import { Console } from "console";
import { useState } from "react";
import MyProfile from "./myProfile";
import MyRental from "./myRental";


const Account = () => {
    const data = {
        firstname: "Temuujin",
        lastname: "Erdene",
        email: "temuujin@gmail.com",
        phoneNumber: "99999999",
        password: "qwerty",
        address: "Khan-Uul district 17 Ulaanbaatar Mongolia",
        pickUpDate: "Sat, Apr22, 2023",
        pickUpTime: "12:00 PM",
        returnDate: "Sun, Apr23, 2023",
        returnTime: "12:00 PM",
        
        carType: "Standart SUV",
        carNumber: "BMW x6 or similar",
        carMex: "Automatic",

    }
    const [toggle, setToggle] = useState(1)

    const toggleTab = (index: number) => {
        setToggle(index)
        console.log(index)
    }
    return (
        <>
            <div className="w-[300px] md:w-[600px] lg:w-[1000px] h-[200px] flex flex-col md:flex-row lg:flex-row mx-auto justify-between m-8 ">
                <div className="w-3/5 m-8 mx-auto">

                    <h6 className="text-sm md:text-base lg:text-2xl font-normal leading-8">{data.firstname}    {data.lastname}</h6>
                    <p className="lg:text-[10px] md:text-[8px] text-[8px] mt-2">Start a reservation to earn and redeem points. While making a reservation, you will have the option to use your points on
                        qualifying rentals by selecting the number of days you wish to redeem.</p>
                </div>
                <div className="lg:w-[156px] md:w-[100px] w-[156px] h-[20px] lg:h-[36px] md:h-[30px] mx-auto lg:m-10 m-1">
                    <button className={`w-full main-button`}>Reserve Redeem</button>
                </div>
            </div>
            <div className="mx-auto w-4/5 h-[700px] bg-white flex flex-col items-center  ">
                <div className="lg:w-1/3 md:w-1/3 w-2/3 mx-auto h-[40px] bg-[#393939]  rounded-xl flex justify-center items-center">

                <div
                  
                    className="w-5/6 mx-auto h-[35px] flex flex-row items-center px-[3xl] rounded-xl overflow-hidden shadow-2xl shadow-900/20 transition bg-[#393939]"
                >
                    <div
                    
                        className={toggle === 1 ? "tabs active-tabs bg-[#ff2f01] w-1/2 h-full rounded-xl flex items-center justify-center " : "tabs w-1/2 flex items-center justify-center"}
                        onClick={() => toggleTab(1)}
                    >
                        <span 
                        className= "text-white text-center text-xs lg:text-base md:text-sm"
                        
                        > My Rentals</span>
                    </div>
                    <div
                        className={toggle === 2 ? "tabs active-tabs bg-[#ff2f01] w-1/2 h-full rounded-xl flex items-center justify-center" : "tabs w-1/2 flex items-center justify-center"}
                        onClick={() => toggleTab(2)}
                    >
                        <span className="text-white text-xs lg:text-base md:text-sm"> My profile</span>
                    </div>
                </div>
                </div>
                <div className="mt-6 relative rounded-3xl bg-white w-full h-[300px] flex justify-center">

                    <div
                        className={toggle === 1 ? " w-full h-[650px] absolute visible top-0  opacity-1 p-6 transition duration-300 bg-white" : " invisible opacity-0"}
                    >
                       <MyRental data={data}/>
                    </div>
                    <div
                        className={toggle === 2 ? "w-full h-[650px] absolute visible top-0  opacity-1 p-8 transition duration-300 bg-white" : " invisible opacity-0 "}
                    >
                        <MyProfile data={data}/>
                    </div>
                </div>


            </div>

        </>
    )
}
export default Account
