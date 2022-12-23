import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCj9L2LhlORseLrCJyO6RvyahiYy9BfJM0",
  authDomain: "task-tracker-e629a.firebaseapp.com",
  projectId: "task-tracker-e629a",
  storageBucket: "task-tracker-e629a.appspot.com",
  messagingSenderId: "681561986287",
  appId: "1:681561986287:web:39b9f09ec6b7ec61b4f71a",
};

// initialize firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// collection ref
const colRef = collection(db, "tasks");

// get collection data
getDocs(colRef)
  .then((snapshot) => {
    let tasks = [];
    snapshot.docs.forEach((doc) => {
      tasks.push({ ...doc.data(), id: doc.id });
    });
    console.log(tasks);
  })
  .catch((err) => {
    console.log(err.message);
  });
