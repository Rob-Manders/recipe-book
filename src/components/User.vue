<template>
	<img v-if="user?.photoURL" :src="user?.photoURL" />
	<button @click="toggleLogin">{{ user ? 'Logout' : 'Login' }}</button>
</template>

<script lang="ts">
	import { GoogleAuthProvider } from 'firebase/auth'

	const authProvider = new GoogleAuthProvider()
</script>

<script setup lang="ts">
	import { ref } from 'vue'
	import { signInWithPopup, signOut } from 'firebase/auth'
	import { useCurrentUser, useFirebaseAuth } from 'vuefire'

	const auth = useFirebaseAuth()!
	const user = useCurrentUser()

	const error = ref(null)

	function toggleLogin() {
		if (user.value) {
			signOut(auth).catch(reason => {
				console.error('Sign-out failed', reason)
				error.value = reason
			})
		} else {
			signInWithPopup(auth, authProvider).catch(reason => {
				console.error('Sign-in failed', reason)
				error.value = reason
			})
		}
	}
</script>
