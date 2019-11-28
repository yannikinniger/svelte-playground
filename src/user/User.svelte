<script>
    // import UserInfo from './UserInfo.svelte'
    // import Auth from './Auth.svelte'
    // import { auth } from './../firebase/firebase'
    // import { authState } from 'rxfire/auth'
    import { Doc } from 'sveltefire'

    // let user = authState(auth)
</script>

<!-- {#if $user}
    <UserInfo user={$user} />
{:else}
    <Auth />
{/if} -->
<p>Test</p>
<Doc path={'user/hjlv16q19atOBWkGpWOJ'} let:data let:error>

    <!-- Default Slot -->
    Data loaded, yay 🍦! {data.name}
    <!-- Only shown when loading -->
    <div slot="loading">Loading</div>

    <!-- Shown on error or if nothing loads after maxWait time-->
    <div slot="fallback">😔 This doc cannot be read {error}</div>
</Doc>
