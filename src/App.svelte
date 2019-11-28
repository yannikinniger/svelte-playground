<script>
    import GenericForm from './GenericForm.svelte'
    import UserComponent from './user/User.svelte'
    import { Validators } from './validators'

    import firebase from 'firebase/app'
    import 'firebase/firestore'
    import 'firebase/auth'
    import 'firebase/performance'
    import 'firebase/analytics'
    import firebaseConfig from './firebase/firebaseConfig'

    import { FirebaseApp, User } from 'sveltefire'

    firebase.initializeApp(firebaseConfig)

    const formFields = [
        { name: 'name', label: 'Name', validators: [Validators.required()] },
        {
            name: 'first_name',
            label: 'First Name',
            validators: [Validators.required(), Validators.minLength(4)]
        },
        { name: 'password', label: 'Password', type: 'password' },
        {
            name: 'email',
            label: 'Email',
            type: 'email',
            validators: [Validators.required(), Validators.email()]
        },
        { name: 'date', label: 'Date', value: Date.now(), type: 'date' },
        { name: 'iban', label: 'IBAN', validators: [Validators.iban()] },
        {
            name: 'location',
            label: 'Ort',
            validators: [Validators.required()],
            options: [
                { label: 'Bern', value: 'bern' },
                { label: 'Basel', value: 'basel' },
                { label: 'Zürich', value: 'zurich' }
            ]
        }
    ]

    function log(formData) {
        console.log(formData)
    }
</script>

<main>
    <FirebaseApp {firebase}>
        <UserComponent />
    </FirebaseApp>
    <!-- <GenericForm {formFields} submitCallback={log} /> -->
</main>
