<script>
  import { firestore, auth } from '$lib/firebase';
  import { Doc, Collection, userStore } from 'sveltefire';
  import { doc, setDoc, collection, addDoc } from 'firebase/firestore';

  let user = userStore(auth);
  let userDoc = doc(firestore, `users/${$user?.uid}`)
  let todoCollection = collection(firestore, `users/${$user?.uid}/todos`);

  let todo = "";
  function submit() {
    addDoc(todoCollection, {
      text: todo,
    });
    todo = "";
  }

  setDoc(userDoc, { name: $user?.displayName });
</script>

<h1>Introduction to Firebase</h1>

<section>
  <h2>Todo List</h2>

  <form on:submit={submit}>
    <input bind:value={todo} type="text" placeholder="Remember to..." required />
    <input type="submit" />
  </form>

  <Doc ref={`users/${$user?.uid}`} let:ref={userRef} let:data={userInfo}>
    <h2>Hi, {userInfo.name}</h2>

    <Collection ref={`${userRef?.path}/todos`} let:data={todos}>
      {#each todos as todo}
        <p>{todo.text}</p>
      {/each}
    </Collection>
  </Doc>
</section>

<style>
</style>
