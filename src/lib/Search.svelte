<script lang="ts">
	export let placeholder = 'Search NOAA for...';

	const handleSubmit = (e: SubmitEvent) => {
		e.preventDefault();
		console.log(e);
	};
</script>

<form action="" on:submit={handleSubmit} class="input-group">
	<input type="text" {placeholder} class="form-control" />
	<button type="submit" class="btn btn-secondary input-group-text">
		<i class="bi bi-search" />
	</button>
</form>
