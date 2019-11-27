<script>
    import GenericForm from './GenericForm.svelte'
    import User from './user/User.svelte'
    import { Validators } from './validators'

    const formFields = [
        { name: 'name', label: 'Name', validators: [Validators.required()] },
        {
            name: 'first_name',
            label: 'First Name',
            validators: [Validators.required(), Validators.minLength(4)],
        },
        { name: 'password', label: 'Password', type: 'password' },
        {
            name: 'email',
            label: 'Email',
            type: 'email',
            validators: [Validators.required(), Validators.email()],
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
                { label: 'Zürich', value: 'zurich' },
            ],
        },
    ]

    function log(formData) {
        console.log(formData)
    }
</script>

<main>
    <GenericForm {formFields} submitCallback={log} />
    <User />
</main>
