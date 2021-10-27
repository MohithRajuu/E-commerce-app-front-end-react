import  CartItem from '../cart-item/cart-item.component';

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import { selectCartItems } from '../../redux/cart/cart.selector';

import './cartdropdown.styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, hidden }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
                : (<span className="empty-message">Your cart is empty.</span>)
            }
        </div>
        <button className='custom-button' onClick={() => {
            
                history.push('/checkout');
                hidden();
                
            }}>GO TO CHECKOUT</button>
    </div>
);

const mapStateToProps = state => ({
    cartItems : selectCartItems(state)
});

const mapDispatchToProps = dispatch => ({
    hidden : () => dispatch(toggleCartHidden())
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
