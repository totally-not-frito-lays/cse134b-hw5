// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Import Firebase Authentication
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1k4azsKInd9PC1c5_0BILIdiuzjSWqHc",
  authDomain: "cse134b-hw5-2d1d6.firebaseapp.com",
  projectId: "cse134b-hw5-2d1d6",
  storageBucket: "cse134b-hw5-2d1d6.appspot.com",
  messagingSenderId: "604303154606",
  appId: "1:604303154606:web:75a0676bb04b0163b3bc3f",
  measurementId: "G-23R6EW3TC9"
};


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}