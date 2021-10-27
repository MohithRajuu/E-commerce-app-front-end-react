import { ReactComponent as Logo} from '../../logo/crown.svg';
import { Link } from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cartdropdown.component';
import { withRouter } from 'react-router-dom'

import './header.styles.scss';

import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';

import { auth } from '../../firebase/firebase.utlis'
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const Header = ({ currentUser, hidden, history, toggleCartHidden }) => (
    <div className="header">
        <Link className="link-container" to='/'>
            <Logo className='logo'></Logo>
        </Link> 
        <div className="options">
            <Link className="option" to='/shop'>SHOP</Link>
            <Link className="option" to='/contact'>CONTACT</Link>
            {
                currentUser ?
                <div className="option" onClick={() => {
                    history.push('/');
                    auth.signOut();
                }}>SIGN OUT</div>
                :
                <Link className="option" to='/signin'>SIGN IN</Link>
            }
            <CartIcon/>
        </div>
        <div>
            {
                hidden ? null : <CartDropdown/>
            }
        </div>
    </div>
)
const mapStateToProps = state => ({
    currentUser : selectCurrentUser(state),
    hidden : selectCartHidden(state)
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
  });

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));