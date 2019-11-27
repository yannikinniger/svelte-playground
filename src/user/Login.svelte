<script>
    import { auth } from './../firebase/firebase'
    import GenericForm from '../GenericForm.svelte'
    import { Validators } from '../validators'

    export let errorCode = null

    function login(loginData) {
        auth.signInWithEmailAndPassword(loginData.email, loginData.password).catch(
            error => (errorCode = error.code),
        )
    }

    const loginForm = [
        {
            name: 'email',
            label: 'Email',
            type: 'email',
            validators: [Validators.required(), Validators.email()],
        },
        {
            name: 'password',
            label: 'Password',
            type: 'password',
            validators: [Validators.minLength(6)],
        },
    ]
</script>

<GenericForm formFields={loginForm} submitCallback={login} />
