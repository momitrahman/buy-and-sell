import firebase from 'firebase';
// import 'firebase/firestore';
import Rebase from 're-base';

// const app = firebase.initializeApp({
//   apiKey: 'AIzaSyCyAyHCFma1Jq5HCbzz9BeA23XjEKeFW0A',
//   authDomain: 'buy-and-sell-67f4a.firebaseapp.com',
//   databaseURL: 'https://buy-and-sell-67f4a.firebaseio.com',
//   projectId: 'buy-and-sell-67f4a',
//   storageBucket: 'buy-and-sell-67f4a.appspot.com',
//   messagingSenderId: '304456071312'
// });

// const base = Rebase.createClass(app.firestore());
// const firestore = firebase.firestore();
// const settings = { timestampsInSnapshots: true };
// firestore.settings(settings);

const app = firebase.initializeApp({
  apiKey: 'AIzaSyCyAyHCFma1Jq5HCbzz9BeA23XjEKeFW0A',
  authDomain: 'buy-and-sell-67f4a.firebaseapp.com',
  databaseURL: 'https://buy-and-sell-67f4a.firebaseio.com',
  projectId: 'buy-and-sell-67f4a',
  storageBucket: 'buy-and-sell-67f4a.appspot.com',
  messagingSenderId: '304456071312'
});

const base = Rebase.createClass(app.database());

export default base;
