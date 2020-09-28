import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBpGzJdq5YRNf_sB18Q3yo_dz882KcaMBU',
  authDomain: 'clone-e63f1.firebaseapp.com',
  databaseURL: 'https://clone-e63f1.firebaseio.com',
  projectId: 'clone-e63f1',
  storageBucket: 'clone-e63f1.appspot.com',
  messagingSenderId: '96304255053',
  appId: '1:96304255053:web:1711201249e9990b940c04',
});

const auth = firebase.auth();

export { auth };
