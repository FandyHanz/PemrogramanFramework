import { getFirestore, collection, getDocs, getDoc, doc } from "firebase/firestore";
import app from "./firebase"; 
const db = getFirestore(app);

export async function retrieveProducts(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

export async function retrieveProductByID(collectionName: string, id: string) {
    const docRef = doc(db, collectionName, id);
    const snapshot = await getDoc(docRef);
    const data = snapshot.data();

    if (data) {
        return { id: snapshot.id, ...data };
    }
    return null;
}