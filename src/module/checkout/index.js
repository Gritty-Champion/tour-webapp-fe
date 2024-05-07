import React, { useCallback, useEffect, useState } from "react";
import { PaymentForm, CreditCard } from "react-square-web-payments-sdk";
import "./index.css";
import { useNavigate } from "react-router-dom";
export const Checkout = ({ formdata, setFormData }) => {
  //  console.log(formdata);

  let [amount, setAmount] = useState(50);
  const handlePayment = useCallback(async ({ token, buyer }) => {
    try {
      console.info({ token, buyer });

      const body = JSON.stringify({
        sourceId: token.token,
      });
      
      const paymentResponse = await fetch("https://bus-serivices.onrender.com/pay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          
          // "X-Requested-With": "XMLHttpRequest",  // Optional header
        },
        // credentials: "include",  // Set credentials to true
        body: body,
      });
        console.log("paymentResponse",paymentResponse);
      if (paymentResponse.ok) {
        const paymentData = await paymentResponse.json();
        console.log("Payment successful:", paymentData);
        // Do something with the payment data
      } else {
        console.error("Payment failed:", paymentResponse.statusText);
        // Handle payment failure
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      // Handle other errors
    }
  }, []);
  const handlePaymentFormSubmit = async ({ token, buyer }) => {
    // You can perform any additional actions before calling handlePayment
    console.log("Handling payment form submission...");

    // Call the handlePayment function
    await handlePayment({ token, buyer });
  };
  let navigate = useNavigate();
  return (
    <div>
      <PaymentForm
        applicationId={"sq0idp-3WiRzwafQaugUf_clAWqQA"}
        cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
          console.log("token:", token);
          console.log("verifiedBuyer:", verifiedBuyer);
          console.info({ token, verifiedBuyer });

          const body = JSON.stringify({
            sourceId: token.token,
            amount: formdata.amount,
            formData: formdata,
          });

          const paymentResponse = await fetch(
            "https://bus-serivices.onrender.com/pay",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                             
                // "X-Requested-With": "XMLHttpRequest", // Optional header
              },
              // credentials: "include", // Set credentials to true
              body:body,
            }
          );

          if (paymentResponse.ok) {
            const paymentData = await paymentResponse.json();
            console.log("Payment successful:", paymentData);
            setFormData({
              email: "",
              firstName: "",
              lastName: "",
              amount: "",
              packageName: "",
            });
            navigate("/thank-you");
            // Do something with the payment data
          } else {
            console.error("Payment failed:", paymentResponse.statusText);
            // Handle payment failure
          }
        }}
        locationId={"LZZWM24S78REF"}
        amountMoney={{ amount, currency: "USD" }}
      >
        <CreditCard
          buttonProps={{
            css: {
              "[data-theme='dark'] &": {
                backgroundColor: "#FB520E",
                color: "var(--ifm-color-emphasis-100)",
                "&:hover": {
                  backgroundColor: "#FB520E",
                },
              },
              backgroundColor: "#FB520E",
              fontSize: "18px",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#FB520E",
              },
            },
          }}
          style={{
            input: {
              fontSize: "14px",
            },
            "input::placeholder": {
              color: "#000000",
            },
          }}
        />
      </PaymentForm>
    </div>
  );
};
