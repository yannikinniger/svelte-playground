<script>
    import CustomInput from "./Input.svelte";
    import { Validators } from "./validators";

    const formFields = [
        {name: 'name', label: 'Name', validators: [Validators.required()]},
        {name: 'first_name', label: 'First Name', validators: [Validators.required(), Validators.minLength(4)]},
        {name: 'test', label: 'Test'},
        {name: 'iban', label: 'IBAN', validators: [Validators.iban()]},
        {
            name: 'location', label: 'Ort', validators: [Validators.required()],
            options: [
                {label: 'Bern', value: 'bern'},
                {label: 'Basel', value: 'basel'},
                {label: 'Zürich', value: 'zurich'},
            ]
        },
    ]

    function handleSubmit(event) {
        const formData = new FormData(event.target)
        const object = {};
        formData.forEach((value, key) => {
            object[key] = value
        });
    }
</script>

<form id="form" on:submit|preventDefault={handleSubmit}>
    {#each formFields as formField}
        <CustomInput {...formField}/>
    {/each}
    <button type="submit">Submit</button>
</form>
