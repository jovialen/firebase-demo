<script>
  import { firestore, auth } from '$lib/firebase';
  import { FirebaseApp, User } from 'sveltefire';
  import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

	function signIn() {
		signInWithPopup(auth, new GoogleAuthProvider());
	}
</script>

<FirebaseApp {firestore} {auth}>
	<User let:user>
		<p>Hi, {user.uid}</p>
		<slot />
		
		<div slot="signedOut">
			<button on:click={signIn}>Sign in with Google</button>
		</div>
	</User>
</FirebaseApp>

