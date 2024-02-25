import { getApp, initializeApp } from 'firebase/app'
import type { FirebaseApp, FirebaseOptions } from 'firebase/app'

const config: FirebaseOptions = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "recipe-book-8e2d0.firebaseapp.com",
  projectId: "recipe-book-8e2d0",
  storageBucket: "recipe-book-8e2d0.appspot.com",
  messagingSenderId: "47687405236",
  appId: import.meta.env.VITE_FIREBASE_APP_ID
}

function createFirebaseApp(config: FirebaseOptions): FirebaseApp {
	try {
		return getApp()
	} catch {
		return initializeApp(config)
	}
}

export const firebaseApp: FirebaseApp = createFirebaseApp(config)
