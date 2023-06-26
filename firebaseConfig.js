import { initializeApp } from '@firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCa7F8bEKGyfSxU2bVG4rgLijTabyUThEk",
    authDomain: "projeto-auth-5a861.firebaseapp.com",
    projectId: "projeto-auth-5a861",
    storageBucket: "projeto-auth-5a861.appspot.com",
    messagingSenderId: "728135834344",
    appId: "1:728135834344:web:10d0aa2b4c8bbf2f10875d",
    measurementId: "G-55ZCHH7CTV"
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
export default app;