// firebase.js
const firebaseConfig = {
  apiKey: "AIzaSyCD8gjSCW134OO6yPKFUFUVYOlTTrXmzS8",
  authDomain: "realtime-database-a6fb3.firebaseapp.com",
  databaseURL:
    "https://realtime-database-a6fb3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "realtime-database-a6fb3",
  storageBucket: "realtime-database-a6fb3.firebasestorage.app",
  messagingSenderId: "6040512462",
  appId: "1:6040512462:web:362e154617af56f5092d9f",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.database();
