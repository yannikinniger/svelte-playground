<script>
    import { auth } from './../firebase/firebase'

    export let user

    function logOut() {
        auth.signOut()
    }
</script>

{#if user}
    <p>Hello {user.displayName}</p>
    <button on:click={logOut}>Log out</button>
{/if}
