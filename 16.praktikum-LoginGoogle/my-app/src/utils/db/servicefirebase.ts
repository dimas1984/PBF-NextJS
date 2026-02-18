import {
  getFirestore,collection,
  getDocs,Firestore,getDoc,doc,
  query,addDoc,where,
} from "firebase/firestore";
import app from "./firebase";
import bcrypt from "bcrypt";

const db = getFirestore(app);

export async function retrieveProducts(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

export async function retrieveDataByID(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(db, collectionName, id));
  const data = snapshot.data();
  return data;
}
export async function signIn(
  email: string) {
  const q = query(collection(db, "users"), where("email", "==", email));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  // console.log("Query result:", data);
  if (data) {
    // console.log("User found:", data[0]);
    return data[0];
  }else {
    return null;
  }
}
export async function signUp(
  userData: {
    email: string;
    fullname: string;
    password: string;
    role?: string;
  },
  callback: Function,
) {
  const q = query(
    collection(db, "users"),
    where("email", "==", userData.email),
  );
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  // console.log("Query result:", data);

  if (data.length > 0) {
    // user belum ada → boleh daftar
    // await addDoc(collection(db, "users"), userData);
    // console.log("User registered:", data);
    callback({
      status: "error",
      message: "Email already exists",
    });
  } else {
    userData.password = await bcrypt.hash(userData.password, 10);
    userData.role = "user";
    await addDoc(collection(db, "users"), userData)
      .then(() => {
        callback({
          status: "success",
          message: "Email registered successfully",
        });
      })
      .catch((error) => {
        callback({
          status: "error",
          message: error.message,
        });
      });
  }
}
