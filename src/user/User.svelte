<script>
    import UserInfo from './UserInfo.svelte'
    import Auth from './Auth.svelte'
    import { auth } from './../firebase/firebase'
    import { authState } from 'rxfire/auth'

    let user = authState(auth)
</script>

{#if $user}
    <UserInfo user={$user} />
{:else}
    <Auth />
{/if}
