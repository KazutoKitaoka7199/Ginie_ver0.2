// Firebase ver9 compliant (modular)
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

import {firebaseConfig} from "../../env";

const Firebase = initializeApp(firebaseConfig);

// Firebase ver9 compliant (modular)
export const auth = getAuth(Firebase);
export const db = getFirestore(Firebase);
export const storage = getStorage(Firebase);
export default Firebase;
