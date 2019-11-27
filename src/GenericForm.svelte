<script>
    import GenericInput from './inputs/GenericInput.svelte'

    export let formFields
    export let submitCallback = formParameters => {}

    function handleSubmit(event) {
        const formData = new FormData(event.target)
        const formParameters = {}
        formData.forEach((value, key) => {
            formParameters[key] = value
        })
        submitCallback(formParameters)
    }
</script>

<form id="form" on:submit|preventDefault={handleSubmit}>
    {#each formFields as formField}
        <GenericInput {...formField} />
    {/each}
    <button type="submit">Submit</button>
</form>
