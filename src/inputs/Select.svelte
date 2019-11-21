<script>
    export let name
    export let value = ''
    export let options = []
</script>

<select bind:value {name}>
    <option selected>Please select</option>
    {#each options as option}
        <option value={option.value}>{option.label}</option>
    {/each}
</select>
