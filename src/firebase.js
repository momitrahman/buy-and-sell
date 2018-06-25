import firebase from 'firebase';
import Rebase from 're-base';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyBbmFrBGDQ5QitgXM9jMWhzTzAlxUMjVBQ',
  authDomain: 'buy-sell-d51cc.firebaseapp.com',
  databaseURL: 'https://buy-sell-d51cc.firebaseio.com',
  projectId: 'buy-sell-d51cc',
  storageBucket: 'buy-sell-d51cc.appspot.com',
  messagingSenderId: '542938790796'
});

const base = Rebase.createClass(app.database());

export default base;
