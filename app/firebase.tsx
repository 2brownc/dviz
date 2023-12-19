import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";


const firebaseConfig = {
  apiKey: process.env.FB_APIKEY,
  authDomain: process.env.FB_AUTHDOMAIN,
  projectId: process.env.FB_PROJECTID,
  storageBucket: process.env.FB_STORAGEBUCKET,
  messagingSenderId: process.env.FB_MESSAGINGSENDERID,
  appId: process.env.FB_APPID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export async function loginUser(email: string, password: string) {
  return new Promise((resolve, reject) => {
    // sign in the user
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        resolve(user);
      })
      .catch((error: Error) => {
        reject(`can't login user with ${email}: ${error.message}`);
      });

  });
}

/*
// observe the login state
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log("user logged in:", uid);
  } else {
    console.log("user logged out.");
  }
});
*/

export async function getUser() {
  return auth.currentUser;
}

export async function signOutUser() {
  return new Promise((resolve, reject) => {
    signOut(auth).then(() => {
      resolve(true);
    }).catch((error) => {
      reject(false);
    });
  });
}

export async function getUserEmail(): Promise<string> {
  const currentUser = getAuth().currentUser;
  if (currentUser) {
    const email = currentUser.email;

    if (typeof email === "string") {
      return email;
    }
  }

  return "";
}