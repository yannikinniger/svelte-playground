<script>
    import GenericForm from './GenericForm.svelte'
    import { Validators } from './validators'

    const formFields = [
        { name: 'name', label: 'Name', validators: [Validators.required()] },
        {
            name: 'first_name',
            label: 'First Name',
            validators: [Validators.required(), Validators.minLength(4)],
        },
        { name: 'test', label: 'Test' },
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
</main>
