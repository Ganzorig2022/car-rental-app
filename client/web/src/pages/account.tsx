import DownloadApp from "@/components/Home/DownloadApp";
import ScrollToTop from "@/components/Layout/ScrollToTop";


const Account = () => {
    return (
      <div>
        <div className="tabs tabs-boxed w-fit flex justify-center">
            <a className="tab">My Rentals</a> 
            <a className="tab tab-active">My Profile</a> 
            <a className="tab">My Redeem</a>
        </div>

      <DownloadApp />
      <ScrollToTop />
      </div>
    );
  };
  
  export default Account;