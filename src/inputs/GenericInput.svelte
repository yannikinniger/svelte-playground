<script>
    import TextInput from './TextInput.svelte'
    import SelectInput from './Select.svelte'

    export let name
    export let value = ''
    export let label = 'NOT SET'
    export let validators = []
    export let options = null
    export let type = null
    let invalid

    const onBlur = event => {
        value = event.target.value
        invalid = validators.map(callback => callback(value)).includes(false)
    }
</script>

<style>
    .invalid {
        color: red;
    }
</style>

<label class:invalid>
    <span>{label}</span>
    {#if options === null}
        <TextInput {name} {onBlur} {type} />
    {:else if options.length > 1}
        <SelectInput {name} {onBlur} {options} />
    {:else}
        <p>Unkonwn input</p>
    {/if}
</label>
