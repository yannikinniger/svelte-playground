<script>
	import GenericForm from "./GenericForm.svelte";
	import { Validators } from "./validators";

	export let name;

	const formFields = [
		{ name: 'name', label: 'Name', validators: [Validators.required()] },
		{ name: 'first_name', label: 'First Name', validators: [Validators.required(), Validators.minLength(4)] },
		{ name: 'test', label: 'Test' },
		{ name: 'iban', label: 'IBAN', validators: [Validators.iban()] },
		{
			name: 'location', label: 'Ort', validators: [Validators.required()],
			options: [
				{ label: 'Bern', value: 'bern' },
				{ label: 'Basel', value: 'basel' },
				{ label: 'Zürich', value: 'zurich' },
			]
		},
	]
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>
<GenericForm formFields={formFields} />

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>