import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Iv3i0SIjm7RGu6bEWOsCAzGPpsHOUWy6LRR5quPiBLapBgluRBJeH2bHJOjGhHbidLL50CsxYkdTT3PAB1XjJ9j00All37Fgy';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return(
       <StripeCheckout 
        label="Proceed to Payment"
        name="Clothing E-commerce"
        shippingAddress
        billingAddress
        description={`Youir price amount is $${price}`}
        amount={priceForStripe}
        panelLabel='Proceed to Payment'
        token={onToken}
        stripeKey={publishableKey}
       />
    )

};

export default StripeCheckoutButton;