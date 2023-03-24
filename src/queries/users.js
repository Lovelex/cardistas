import { getDoc, doc, db, collection, setDoc } from '@/plugins/firebase'

const COLLECTION = 'users'

const collectionRef = collection(db, COLLECTION)
const docRef = (userId) => doc(collectionRef, userId)

const getUserRef = (userId) => getDoc(docRef(userId))
const addUserWithIdRef = (userId, data) => setDoc(docRef(userId), data)

export { getUserRef, addUserWithIdRef }
