<template>
	<div class="user">
		<button @click="toggleLogin" class="loginButton">{{ user ? 'Logout' : 'Login' }}</button>
		<img v-if="user?.photoURL" :src="user?.photoURL" class="avatar" />
	</div>
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

<style lang="scss">
	.user {
		display: flex;
		align-items: center;
	}

	.avatar {
		width: 48px;
		aspect-ratio: 1 / 1;
		border-radius: 50%;
		margin-left: 0.5rem;
	}
</style>
