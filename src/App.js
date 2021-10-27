import './App.css';
import { Component} from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import Header from './component/header/header.component.';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import Contact from './pages/Contact/contact.component';
import CheckOut from './pages/checkout/checkout.component'
import CollectionPage from './pages/collection/collection-page.component';

import { auth, createUserProfileDocument, firestore, convertCollectionSnapshotToMap} from './firebase/firebase.utlis'
import { Switch, Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import{ setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selector';
import { setCollections } from './redux/shop/shop.actions'


class App extends Component{

    state = {
      loading : true
  }

  unSubscribeFromSnapshot = null;
  unSubscribeFromAuth = null

  componentDidMount(){
     const { setCurrentUser } = this.props;
     this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
          const userRef = await createUserProfileDocument(userAuth);
        
          userRef.onSnapshot(snapShot => {
            setCurrentUser({
                userId : snapShot.id,
                ...snapShot.data()
            });
          });
        }
      setCurrentUser(userAuth);
    
    });
    const { setCollections } = this.props;
    const collectionRef = firestore.collection('collection')
        
    collectionRef.get().then(snapShot => {
        const collectionMap = convertCollectionSnapshotToMap(snapShot);
        setCollections(collectionMap);
        this.setState({ loading : false })
    })
   
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
    this.unSubscribeFromSnapshot();
  }


  
  render() {
    const { match } = this.props
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInSignUp />) } />
          <Route exact path='/contact' component={Contact} />
          <Route exact path ='/checkout' component={CheckOut} />
          <Route exact path ={`${match.path}shop/:collectionId`} component={CollectionPage} />
        </Switch>
      </div>
    );
  };

  
}

const mapStateToProps = state => ({
  currentUser : selectCurrentUser(state),
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user)),
  setCollections : collection => dispatch(setCollections(collection))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

