<script>
    export let name
    export let onBlur
    export let value = ''
    export let type = 'text'
</script>

<input {value} {name} on:blur={onBlur} {type} />
