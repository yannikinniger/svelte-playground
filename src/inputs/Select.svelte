<script>
  export let value;
  export let options = [];
  export let label = "NOT SET";
</script>

<select bind:value>
  {#each options as option}
    <option selected>Please select</option>
    <option value={option.value}>{option.label}</option>
  {/each}
</select>
