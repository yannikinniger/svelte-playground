<script>
    export let name
    export let value = ''
    export let label = 'NOT SET'
    export let valid
    export let validators = []

    $: valid = !validators.map(callback => callback(value)).includes(false)
</script>

<label>
    <span>{label}</span>
    <input bind:value name={name}>
</label>
{valid}
