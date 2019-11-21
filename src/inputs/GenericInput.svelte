<script>
  import TextInput from "./TextInput.svelte";
  import SelectInput from "./Select.svelte";

  export let name
  export let value = ""
  export let label = "NOT SET"
  export let invalid
  export let validators = []
  export let options = null
  $: invalid = validators.map(callback => callback(value)).includes(false);

  const inputs = {
    text: TextInput,
    select: SelectInput,
  }

  let input = options === null ? inputs.text : inputs.select
</script>

<label class:invalid>
  <span>{label}</span>
  <svelte:component this={input} name={name} bind:value options={options} />
</label>

<style>
  .invalid {
    color: red;
  }
</style>