// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getFirestore, collection, getDocs, addDoc, setDoc} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDhi1SmkdyxjEO-_3EbpQ28S3DcbHo_ebY",
    authDomain: "fir-10-28d41.firebaseapp.com",
    projectId: "fir-10-28d41",
    storageBucket: "fir-10-28d41.appspot.com",
    messagingSenderId: "510346225189",
    appId: "1:510346225189:web:861a771edc1dbe89b741cc",
    measurementId: "G-TBHHCQ6S9T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);


async function getCities(db) {
    const booksCol = collection(db, 'books');
    const bookSnapshot = await getDocs(booksCol);
    const bookList = bookSnapshot.docs.map(doc => doc.data());
    return bookList;
}

const books = getCities(db);

// add book
const addBookForm = document.querySelector('.add')
addBookForm.addEventListener('click', (event) => {
    event.preventDefault();
    if (addBookForm.title.value !== '' || addBookForm.author.value !== '') {
        setDoc(collection(db, "books"), {
            title: addBookForm.title.value,
            author: addBookForm.author.value
        }).then(() => {
                addBookForm.reset();
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }
})


// delete book

const deleteBook = document.querySelector('.delete')
deleteBook.addEventListener('click', (event) => {
    event.preventDefault();
});