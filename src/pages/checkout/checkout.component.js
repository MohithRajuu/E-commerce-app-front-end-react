import CheckoutItem from '../../component/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../component/stripe-button/stripe-button.component';
import { connect } from 'react-redux';

import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/cart.selector';


import './checkout.styles.scss';

const CheckOut = ({cartItems, total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
                cartItems.map(cartItem => (
                    <CheckoutItem key={cartItem.id} item={cartItem} />
                ))
        }
        <div className="total">TOTAL : ${total}</div>
        <div className="card-details">*use the following Card details for payment. Card No. :  4242 4242 4242 4242, CVV : Any 3 Digits, Date : Any future date </div>
        <StripeCheckoutButton price={total}/>
    </div>
);

const mapStateToProps = state => ({
    cartItems : selectCartItems(state),
    total : selectCartItemsTotal(state)
})

export default connect(mapStateToProps)(CheckOut);