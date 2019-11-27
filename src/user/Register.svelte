<script>
    import { auth } from './../firebase/firebase'
    import GenericForm from '../GenericForm.svelte'
    import { Validators } from '../validators'

    export let errorCode = null

    function register(loginData) {
        if (loginData.password === loginData.passwordRepeat) {
            auth.createUserWithEmailAndPassword(loginData.email, loginData.password)
                .then(restult => restult.user.updateProfile({ displayName: loginData.name }))
                .catch(error => (errorCode = error.code))
        } else {
            errorCode = 'different-passwords'
        }
    }

    const loginForm = [
        { name: 'name', label: 'Name', validators: [Validators.required()] },
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
        {
            name: 'passwordRepeat',
            label: 'Repeat Password',
            type: 'password',
            validators: [Validators.minLength(6)],
        },
    ]
</script>

<GenericForm formFields={loginForm} submitCallback={register} />
