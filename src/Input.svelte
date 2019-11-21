<script>
    export let name
    export let value = ''
    export let label = 'NOT SET'
    export let valid
    export let validators = []
    export let options = null
    $: valid = !validators.map(callback => callback(value)).includes(false)
</script>

<label class="{valid ? '' : 'invalid'}">
    <span>{label}</span>
    {#if options === null}
        <input bind:value name={name}>
    {:else}
        <select bind:value>
            {#each options as option}
                <option selected>Please select</option>
                <option value={option.value}>
                    {option.label}
                </option>
            {/each}
        </select>
    {/if}
</label>

<style>
    .invalid {
        color: red;
    }
</style>
