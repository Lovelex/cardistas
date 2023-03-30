import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile
} from '@/plugins/firebase'

const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password)
const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password)
const updateNick = (nick, user = auth.currentUser) => updateProfile(user, { displayName: nick })

export { auth, signIn, signUp, onAuthStateChanged, updateNick }
