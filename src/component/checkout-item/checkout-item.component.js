import './checkout-item.styles.scss';

import { connect } from 'react-redux';
import { clearItemFromCheckout, removeItemFromCheckout, addItemToCart } from '../../redux/cart/cart.actions';

const CheckoutItem = ({item, clearItemFromCheckout, removeItem, addItem}) => {
    const {name, price, quantity, imageUrl} = item
    return(
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="" />
        </div>
        <div className="name">{name}</div>
        <div className="quantity">
            <span className="arrow" onClick={() => removeItem(item)}>&#10094;</span>
            <div className="value">{quantity}</div>
            <span className="arrow" onClick={() => addItem(item)}>&#10095;</span>
        </div>
        <div className="price">${price}</div>
        <div className="remove-button" onClick={() => clearItemFromCheckout(item)}>&#10005;</div>
    </div>
)};

const mapDispatchToProps = dispatch => ({
    clearItemFromCheckout : item => dispatch(clearItemFromCheckout(item)),
    removeItem: item => dispatch(removeItemFromCheckout(item)),
    addItem : item => dispatch(addItemToCart(item))
    
})

export default connect(null, mapDispatchToProps)(CheckoutItem);