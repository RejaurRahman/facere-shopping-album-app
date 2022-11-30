import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCIl-WYPPRdUYbRY-iTj8io1SSTZ3Ca750',
  authDomain: 'facere-shopping-album.firebaseapp.com',
  databaseURL: 'https://facere-shopping-album-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'facere-shopping-album',
  storageBucket: 'facere-shopping-album.appspot.com',
  messagingSenderId: '64508986565',
  appId: '1:64508986565:web:74ce57a420a444697f5cac'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
