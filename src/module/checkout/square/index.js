import React, { useCallback } from 'react';
import { CreditCard, PaymentForm } from 'react-square-web-payments-sdk';

export const SquarePayment = () => {
  const handlePayment = useCallback(async ({ token, buyer }) => {
    try {
      console.info({ token, buyer });
      
      const body = JSON.stringify({
        sourceId: token.token
      });

      const paymentResponse = await fetch('https://bus-serivices.onrender.com/pay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      });

      if (paymentResponse.ok) {
        const paymentData = await paymentResponse.json();
        console.log('Payment successful:', paymentData);
        // Do something with the payment data
      } else {
        console.error('Payment failed:', paymentResponse.statusText);
        // Handle payment failure
      }
    } catch (error) {
      console.error('Error processing payment:', error);
      // Handle other errors
    }
  }, []);

  return (
    <PaymentForm
    applicationId="sandbox-sq0idb-rY0co3stwCrEdBL5ySkvNA"
      createVerificationDetails={() => ({
        amount: '1.00',
        billingContact: {
          addressLines: ['123 Main Street', 'Apartment 1'],
          familyName: 'Doe',
          givenName: 'John',
          countryCode: 'GB',
          city: 'London',
        },
        currencyCode: 'GBP',
        intent: 'CHARGE',
      })}
      locationId="LTSMREPMPNNAS"
      cardView={<CreditCard />}
      onSubmit={handlePayment}
    />
  );
};

