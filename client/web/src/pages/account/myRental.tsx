import Image from 'next/image';
const MyRental = (data) => {
 
  return (
    <div>
      <h2 className="tex-xl font-semibold text-gray-800 lg:text-2xl md:text-xl text-base "> Current & Upcoming Reservations  (1)</h2>
      <div className="border-b-4 border-[#848484] my-4 "> </div>
      <div className="text-xs my-7">Reservations made with an Car Rent account are listed below.</div>

      <div className="border border-[#848484] w-full lg:h-[150px] md:h-[200px] h-[300px] rounded-xl">

        <div className="w-full h-2/5 bg-[#e3e3e3] rounded-t-lg border border-[#848484] p-2 flex lg:flex-row lg:justify-between md:flex-col flex-col sm:items-center">
          <div className="p-1">
            <span>Apr 20 - Apr 27</span>
            <div className="flex flex-row">

              <span className="text-xs"> Confirmation Number: {data.data.phoneNumber} | </span>
              <div className="text-xs text-[#ff2f01] ml-1"> View Details,</div>
            
              <div className="text-xs text-[#ff2f01] ml-2">  Modify or Cancel</div>
            </div>
          </div>
          <figure>
          <Image
            src={data.data.image}
            alt='cars'
            width={150}
            height={150}
            className="absolute right-0"
          />
        </figure>
        </div>
        <div className='grid grid-cols-3'>
          <div className='flex flex-col ml-4 border-r border-[#848484]'>
            <span className='my-2'>PICK-UP</span>
            <span className='text-[9px]'>{data.data.address}</span>
            <span className='text-xs text-gray-600' >{data.data.pickUpDate}</span>
            <span className='text-xs text-gray-600'> {data.data.pickUpTime}</span>
          </div>
         
          <div className='flex flex-col ml-4 border-r border-[#848484]'>
            <span className='my-2'>RETURN</span>
            <span className='text-[9px] text-gray-600'>{data.data.address}</span>
            <span className='text-xs text-gray-600'>{data.data.pickUpDate}</span>
            <span className='text-xs text-gray-600'> {data.data.pickUpTime}</span>
          </div>
          <div className='flex flex-col ml-4 border-r border-[#848484]'>
            <span className='my-2'>VEHICLE</span>
            <span className='text-xs text-[#3e3e3e]'>{data.data.carType}</span>
            <span className='text-xs text-gray-600'>{data.data.carNumber}</span>
            <span className='text-xs text-gray-600'> {data.data.carMex}</span>
          </div>
           </div>
      </div>
      <div className="text-xs my-7"> We don't have any current or upcoming rentals made with an Car Rent account on file for you.</div>
      <div className="font-semibold text-gray-800 lg:text-2xl md:text-xl text-base mt-8"> Past Rentals</div>
      <div className="border-b-4 border-[#848484] my-4 "> </div>
      <div className="text-xs my-7"> We don't have any receipts for previous rentals made with an Car Rental account on file for you.</div>
    </div>
  )
}

export default MyRental