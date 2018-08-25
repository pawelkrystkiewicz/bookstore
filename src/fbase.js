import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCzcRasYhiGIq0m-LiIMjuhjTXWZ0W9MGk",
    authDomain: "clockworkbookstore-4f73d.firebaseapp.com",
    databaseURL: "https://clockworkbookstore-4f73d.firebaseio.com",
    projectId: "clockworkbookstore-4f73d",
    storageBucket: "clockworkbookstore-4f73d.appspot.com",
    messagingSenderId: "713931972674"
});

const fbase=Rebase.createClass(firebaseApp.database());

export {fbase, firebaseApp};