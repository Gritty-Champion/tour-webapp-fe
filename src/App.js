import "./App.css";
import { DowntownLibertyCruise } from "./layout/route/downtownLib";
import { Event } from "./layout/route/event";
import { Home } from "./layout/route/home";
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
import SignInUI from "./component/pages/SignInUi";

function App() {
  const navigate = useNavigate();
  let [data, setData] = useState("");
  let [totalAmount, setTotalAmount] = useState(0);
  const getnamePackages = (uniqueValue) => {
    //  console.log(value,"getnamePackages");

    let filterData;

    // Check if uniqueValue exists in iconicPackages array
    const foundInIconic = dammyDataIconic.some(
      (item) => item.uniqueId === uniqueValue
    );

    // Check if uniqueValue exists in doublePackages array
    const foundInDouble = dammyDataDoubleBus.some(
      (item) => item.uniqueId === uniqueValue
    );

    // check Single exists

    const singlBus = dammyDataSingleBus.some(
      (item) => item.uniqueId === uniqueValue
    );

    if (foundInIconic) {
      filterData = dammyDataIconic.filter(
        (item) => item.uniqueId === uniqueValue
      );
      console.log("filterdataIF", filterData);
    } else if (foundInDouble) {
      filterData = dammyDataDoubleBus.filter(
        (item) => item.uniqueId === uniqueValue
      );
      console.log("filterdataElseif", filterData);
    } else {
      filterData = dammyDataSingleBus.filter(
        (value) => value.uniqueId == uniqueValue
      );
      console.log("filterdataElse", filterData);
    }

    if (filterData && filterData.length > 0) {
      navigate(`/packages/${filterData[0].uniqueId}`);
      setData(filterData[0].uniqueId);
      localStorage.setItem("link", filterData[0].uniqueId);
      console.log("Ending Function");
      // window.location.reload();
    }
  };
  useEffect(() => {
    getnamePackages();
  }, []);
  let getSessionId = sessionStorage.getItem("password");
  console.log("datadatadatadata", totalAmount);

  useEffect(() => {
    if (getSessionId == "success") {
      navigate("/");
    } else {
      navigate("/password");
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home getnamePackages={getnamePackages} />} />
        <Route
          path="/packages/:packageName"
          element={
            <HolidayTour
              data={data}
              getnamePackages={getnamePackages}
              setTotalAmount={setTotalAmount}
            />
          }
        />
        <Route path="/signin" element={<SignInUI />} />
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
          element={<Aboutus getnamePackages={getnamePackages} />}
        />
        <Route
          path="/contact"
          element={<Contact getnamePackages={getnamePackages} />}
        />
        <Route
          path="/faq"
          element={<Faqs getnamePackages={getnamePackages} />}
        />
        <Route
          path="/attraction"
          element={<Attraction getnamePackages={getnamePackages} />}
        />
        <Route path="/holiday-tour" element={<HolidayTour />} />
        <Route
          path="/private-hire"
          element={<PrivateHire getnamePackages={getnamePackages} />}
        />
        <Route
          path="/tour"
          element={<Tour getnamePackages={getnamePackages} />}
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
