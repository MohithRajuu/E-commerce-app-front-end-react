import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyANQY6mGUo5c7k3OHF8970U5B4GWShB5LU",
  authDomain: "clothing-website-26015.firebaseapp.com",
  projectId: "clothing-website-26015",
  storageBucket: "clothing-website-26015.appspot.com",
  messagingSenderId: "675333386857",
  appId: "1:675333386857:web:8c357d878200bb1aefa8f8",
  measurementId: "G-WG9478W2NC"
};

firebase.initializeApp(config);


export const createUserProfileDocument = (user, additionalData) => {
  if(!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapShot =  userRef.get();

  if(!snapShot.exists){
    const { displayName, email } = user;
    const currentAt = new Date();
  
    try{
      userRef.set({
        displayName,
        email,
        currentAt,
        ...additionalData,
      })
    } catch(error){
      console.log(error.message, "error creating userRef")
    }
  }
  return userRef;
}


export const addCollectionToFirebase = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const objRef = collectionRef.doc()
    batch.set(objRef, obj)
  });

  return await batch.commit()
}

export const convertCollectionSnapshotToMap = ( collection ) => {
  const transformedCollection = collection.docs.map(doc => {
    const { title, items } = doc.data()

    return{
      routeName : encodeURI(title.toLowerCase()),
      id : doc.id,
      title,
      items
    }
  });

  return transformedCollection.reduce((accumulator, obj) => {
    accumulator[obj.title.toLowerCase()] = obj;
    return(accumulator)
  }, {})
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;