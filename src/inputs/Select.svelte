<script>
    export let name
    export let value = ''
    export let options = []
    export let onChanged
</script>

<select on:change={onChanged} {name} {value}>
    {#if value === ''}
        <option selcted>Please select...</option>
    {/if}
    {#each options as option}
        {#if option.value === value}
            <option selcted value={option.value}>{option.label}</option>
        {:else}
            <option value={option.value}>{option.label}</option>
        {/if}
    {/each}
</select>
