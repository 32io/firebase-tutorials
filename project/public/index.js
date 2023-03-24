import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";

// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js";

// Add Firebase products that you want to use
import {
  getAuth,
  GoogleAuthProvider,
  EmailAuthProvider,
  PhoneAuthProvider,
 // AuthUI,
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import * as firebaseui from "https://www.gstatic.com/firebasejs/ui/4.0.0/firebase-ui-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDghBgsaqS1pypR6_XRqg6D-ZvJPo8fWEU",
  authDomain: "database-parameters.firebaseapp.com",
  databaseURL:
    "https://database-parameters-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "database-parameters",
  storageBucket: "database-parameters.appspot.com",
  messagingSenderId: "854407421967",
  appId: "1:854407421967:web:29de57590628437184037a",
  measurementId: "G-D32FGND5W4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// FirebaseUI config.
var uiConfig = {
  signInSuccessUrl: "http://localhost:5000/",
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    GoogleAuthProvider.PROVIDER_ID,

    EmailAuthProvider.PROVIDER_ID,
    PhoneAuthProvider.PROVIDER_ID,
  ],
  // tosUrl and privacyPolicyUrl accept either url string or a callback
  // function.
  // Terms of service url/callback.
  tosUrl: "http://localhost:5000/",
  // Privacy policy url/callback.
  privacyPolicyUrl: function () {
    window.location.assign("http://localhost:5000/");
  },
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(auth);
console.log(ui);
// The start method will wait until the DOM is loaded.
ui.start("#firebaseui-auth-container", uiConfig);
