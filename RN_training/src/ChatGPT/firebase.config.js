// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getDatabase} from 'firebase/database';
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB5zocTTEWDWNx7lakqFC-FT5V68FayyO4',
  authDomain: 'awesomeproject-43a06.firebaseapp.com',
  projectId: 'awesomeproject-43a06',
  storageBucket: 'awesomeproject-43a06.appspot.com',
  messagingSenderId: '73922821849',
  appId: '1:73922821849:web:892212e5df128cc1ff08c8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);
