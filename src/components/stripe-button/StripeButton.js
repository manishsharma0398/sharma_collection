import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 75;
  const publishableKey =
    "pk_test_51HrfecIlqSkimG9JZzYcBG6hFvjjKmpM6w7RrcYZqD3Fi3Zg6lIn0YLxOpY6illWxGSbscEPELOrcJCYsCDz4sg700lILgaboQ";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Sharma Collections"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${priceForStripe}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
