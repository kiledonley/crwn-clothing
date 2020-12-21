import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey =
        "pk_test_51I0rpZG2SKuXdGVlBBOob1wt3U6uw8IwRbgTU649z3etU6t2O4D6bvta0iMxEfnt0pzqu5Js7eQQXi3f2qO2GNnQ00BlobAZrl";
    const onToken = (token) => {
        console.log(token);
        alert("Payment Succesful");
    };
    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
