import "./App.css";
import { DowntownLibertyCruise } from "./layout/route/downtownLib";
import { Event } from "./layout/route/event";
import { Home } from "./layout/route/home";
import { Provider } from 'react-redux';
import { Route, Routes } from "react-router-dom";
import { NorthPoleExpress } from "./layout/route/northPoleExpress";
import { Aboutus } from "./layout/route/aboutus";
import { HolidayTour } from "./layout/route/holidayLight";
import { Tour } from "./layout/route/tour";
import {
  dammyDataSingleBus,
  dammyDataDoubleBus,
  dammyDataIconic,
} from "./data/packages";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Contact } from "./layout/route/contact";
import { Faqs } from "./layout/route/faqs";
import { Attraction } from "./layout/route/attraction";
import { PrivateHire } from "./layout/route/privateHire";
import { Terms_Condition } from "./layout/route/Terms&Condition";
import { DetailSectionPage } from "./layout/route/detailSection";
import { PrivacyPolicy } from "./layout/route/privacy";
import { CheckPassword } from "./module/authentication";
import { ConfirmationForm } from "./module/reserve";
import { Checkout } from "./module/checkout";
import { ThankYou } from "./module/thankyou";

function App() {
  const navigate = useNavigate();
  let [data, setData] = useState("");
  let [totalAmount, setTotalAmount] = useState(0);
  const [packageData, setPackageData] = useState([]);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://api.nyiconictours.com/package/all")
      .then((response) => response.json())
      .then((data) => setPackageData(data?.data?.sort((a, b) => a.orderNumber - b.orderNumber)));
  }, []);
  useEffect(() => {
    fetch("https://api.nyiconictours.com/category/all")
      .then((response) => response.json())
      .then((data) => setCategory(data?.data));
  }, []);
  const getnamePackages = (uniqueValue) => {
    //  console.log(value,"getnamePackages");
    
    console.log("Unique Value----->",uniqueValue);
    console.log("Packages Data",packageData);
    let filterData;
   filterData= packageData.filter((pack) => pack?.packageLabel==uniqueValue)
   console.log("Filter Data----->",filterData);
    if (filterData && filterData.length > 0) {
      setData(filterData[0]?.packageLabel);
      localStorage.setItem("link", filterData[0]?.packageLabel);
      navigate(`/packages/${filterData[0]?.packageLabel}`);
      console.log("Ending Function");
      // window.location.reload();
    }
  };
  useEffect(() => {
    getnamePackages();
  }, []);
  let getSessionId = sessionStorage.getItem("password");
  console.log("datadatadatadata", totalAmount);

  return (
    <> 
      <Routes>
        <Route path="/" element={<Home getnamePackages={getnamePackages} packages={packageData} category={category}/>} />
        <Route
          path="/packages/:packageName"
          element={
            <HolidayTour
              data={data}
              getnamePackages={getnamePackages}
              setTotalAmount={setTotalAmount}
              packages={packageData}
              category={category}
            />
          }
        />
        <Route
          path="/events"
          element={<Event getnamePackages={getnamePackages} />}
        />
        <Route
          path="/downtown-liberty-cruise-same-day"
          element={<DowntownLibertyCruise getnamePackages={getnamePackages} />}
        />

        <Route
          path="/iconic-holiday-lights"
          element={<NorthPoleExpress getnamePackages={getnamePackages} />}
        />
        <Route
          path="/about-us"
          element={<Aboutus getnamePackages={getnamePackages} packages={packageData} category={category}/>}
        />
        <Route
          path="/contact"
          element={<Contact getnamePackages={getnamePackages} packages={packageData} category={category}/>}
        />
        <Route
          path="/faq"
          element={<Faqs getnamePackages={getnamePackages} category={category} packages={packageData} />}
        />
        <Route
          path="/attraction"
          element={<Attraction getnamePackages={getnamePackages} category={category}/>}
        />
        <Route path="/holiday-tour" element={<HolidayTour />} />
        <Route
          path="/private-hire"
          element={<PrivateHire getnamePackages={getnamePackages} packages={packageData} category={category} />}
        />
        <Route
          path="/tour"
          element={<Tour getnamePackages={getnamePackages} packages={packageData} category={category} />}
        />
        <Route
          path="/terms&Condition"
          element={<Terms_Condition getnamePackages={getnamePackages} />}
        />
        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy getnamePackages={getnamePackages} />}
        />

        <Route
          path="/detail-Section"
          element={<DetailSectionPage getnamePackages={getnamePackages} />}
        />
        <Route path="/password" element={<CheckPassword />} />
        <Route
          path="/reserve/confirm"
          element={<ConfirmationForm data={data} totalAmount={totalAmount} />}
        />

        <Route path="/checkout/payment" element={<Checkout />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </>
  );
}

export default App;
{
  /* <GalleryDownTownLibrary/>
      <div className='w-4/5 mx-auto flex gap-5 justify-between'>
        <InfoSectionLiberty/>
        <PricingSection/>
      </div>
      <Footer/> 

    */
}
