<script>
    import getErrorCodeMessage from './ErrorStrings'
    import Login from './Login.svelte'
    import Register from './Register.svelte'

    let signIn = false
    const switchAuth = () => (signIn = !signIn)

    let errorCode
    let errorMessage
    $: errorMessage = getErrorCodeMessage(errorCode)
</script>

{#if signIn}
    <Login bind:errorCode />
{:else}
    <Register bind:errorCode />
{/if}

{#if errorMessage}
    <p>{errorMessage}</p>
{/if}

<button on:click={switchAuth}>{signIn ? 'Register' : 'Sign in'}</button>
