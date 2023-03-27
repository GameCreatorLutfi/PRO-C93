import firebase from "firebase";
require("@firebase/firestore");


  const firebaseConfig = {
    apiKey: "AIzaSyDD5ZrfCQ9bPNJ27eip9HST0cYKwedL3-Y",
    authDomain: "e-library-bd137.firebaseapp.com",
    projectId: "e-library-bd137",
    storageBucket: "e-library-bd137.appspot.com",
    messagingSenderId: "233243884527",
    appId: "1:233243884527:web:a745df06e65e24a2ef941a"
  };


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
