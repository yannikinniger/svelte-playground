<script>
    import TextInput from './TextInput.svelte'
    import SelectInput from './Select.svelte'

    export let name
    export let value = ''
    export let label = 'NOT SET'
    export let invalid
    export let validators = []
    export let options = null
    export let type = null
    $: invalid = validators.map(callback => callback(value)).includes(false)

    const onChanged = event => (value = event.target.value)
</script>

<style>
    .invalid {
        color: red;
    }
</style>

<label class:invalid>
    <span>{label}</span>
    {#if options === null}
        <TextInput {name} {onChanged} {type} />
    {:else if options.length > 1}
        <SelectInput {name} {onChanged} {options} />
    {:else}
        <p>Unkonwn input</p>
    {/if}
</label>
