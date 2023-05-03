import { useState } from "react"

const MyProfile = (data) => {
    const [toggle, setToggle] = useState(1)

    const toggleButton = (index: number) => {
        setToggle(index)
        console.log(index)
    }
    return (
        <>
            <div>
                <div className=" flex justify-between">

                    <h2 className="tex-xl text-gray-800 lg:text-2xl md:text-xl text-base  font-semibold"> Contact Details</h2>
                    <button className={toggle ===2 ? " visible opacity-1 w-[102px] h-[37px] border border-[#ff2f01] rounded-full":"invisible opacity-0"}  onClick={() => toggleButton(1)}>
                        <span className=" text-[#ff2f01] text-xs" > Modify</span>  </button>
                    <button className={toggle ===1 ? "  visible opacity-1 w-[102px] h-[37px] border border-[#ff2f01] rounded-full":"invisible opacity-0"} onClick={() => toggleButton(2)}>
                        <span className="visible opacity-1 text-[#ff2f01] text-xs"> Save</span>  </button>
                </div>
                <div className="border-b-4 border-[#848484] my-4 "> </div>
                <div className="table bg-white w-full">

                    <div className="flex flex-row  w-full ">
                        <div className="text-xs font-semibold my-auto">First Name:</div>
                        <div className="ml-4 w-2/4"> 

                        {toggle ===1 ?  <input name="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder={data.data.firstname} ></input> :<div className="italic text-xs ml-5">{data.data.firstname}</div>}
                        </div>
                        
                     
                    </div>
                    <div className="border-b border-[#848484] my-3 w-full"> </div>

                    <div className="flex flex-row  w-full ">
                      
                        <div className="text-xs font-semibold my-auto">Last Name:</div>
                        <div className="ml-4 w-2/4">
                        {toggle ===1 ?  <input name="lastname"  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder={data.data.lastname} ></input> :<div className="italic text-xs ml-5">{data.data.lastname}</div>}
                        </div>
                       
                    
                    </div>
                    <div className="border-b border-[#848484] my-3 w-full"> </div>
                    <div className="flex flex-row  w-full ">
                        
                        <div className="text-xs font-semibold my-auto">Email Address:</div>
                        <div className="ml-4 w-2/4">

                        {toggle ===1 ?  <input name="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder={data.data.email} ></input> :<div className="italic text-xs ml-5">{data.data.email}</div>}
                        </div>
                       
                       
                    </div>
                    <div className="border-b border-[#848484] my-3 w-full"> </div>

                    <div className="flex flex-row  w-full ">
                  
                        <div className="text-xs font-semibold my-auto">Phone Number:</div>
                        <div className="ml-4 w-2/4">

                        {toggle ===1 ?  <input name="phoneNumber" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder={data.data.phoneNumber} ></input> :<div className="italic text-xs ml-5">{data.data.phoneNumber}</div>}
                        </div>
                       
                    
                    </div>
                    <div className="border-b border-[#848484] my-3 w-full"> </div>




                </div>
                <div className=" flex justify-between my-8">

                    <h2 className="tex-xl text-gray-800 lg:text-2xl md:text-xl text-base  font-semibold"> Saved Payment Methods</h2>
                    <button className="w-[202px] lg:h-[37px] h-[74px] md:h-[50px] border border-[#ff2f01] rounded-full">
                        <span className="text-[#ff2f01] text-xs"> + Add Payment Methods</span>  </button>
                </div>
                <div className="border-b-4 border-[#848484] my-4 "> </div>
                <div className=" flex justify-between my-8">

                    <h2 className="tex-xl text-gray-800 lg:text-2xl md:text-xl text-base  font-semibold"> Password</h2>
                    <button className="w-[102px] h-[37px] border border-[#ff2f01] rounded-full">
                        <span className="text-[#ff2f01] text-xs"> Modify </span>  </button>
                </div>
                <div className="border-b-4 border-[#848484] my-4 "> </div>
                <div className="text-xs"> {data.data.password} </div>
                <div className="border border-[#848484] my-4 "> </div>
            </div>
        </>
    )
}

export default MyProfile