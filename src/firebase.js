import firebase from 'firebase';
import Rebase from 're-base';

const key = {};

const app = firebase.initializeApp(key);

const base = Rebase.createClass(app.database());

export default base;
