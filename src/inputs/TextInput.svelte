<script>
    export let name
    export let onChanged
    export let value = ''
    export let type = 'text'
</script>

<input {value} {name} on:keyup={onChanged} {type} />
