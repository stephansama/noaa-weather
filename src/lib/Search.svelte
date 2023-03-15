<script lang="ts">
	import { PUBLIC_GOOGLE_PLACES_API } from '$env/static/public';
	// import { goto } from '$app/navigation';

	export let placeholder = 'Search NOAA for...';

	const handleSubmit = (e: SubmitEvent) => {
		e.preventDefault();
		console.log(e);
	};
</script>

<svelte:head>
	<script>
		let autocomplete;
		function initAutocomplete() {
			const autocompleteField = document.getElementById('autocomplete');

			autocomplete = new google.maps.places.Autocomplete(autocompleteField, {
				// bounds: defaultBounds,
				types: ['postal_code', 'locality'],
				fields: ['address_component', 'place_id', 'geometry', 'name'],
				componentRestrictions: { country: ['US'] }
			});

			autocomplete.addListener('place_changed', () => {
				let place = autocomplete.getPlace();
				if (!place.geometry) {
					console.log('place not selected');
				} else {
					console.log({ place });
					const lat = place.geometry.location.lat();
					const lng = place.geometry.location.lng();

					fetch(`https://api.weather.gov/points/${lat},${lng}`)
						.then((data) => data.json())
						.then((data) => {
							console.log(data);
							// goto(`/weather?lat=${lat}&=lng=${lng}`);
							// console.log(handleSubmit);
						});
				}
			});
		}
	</script>
	<script
		async
		src="https://maps.googleapis.com/maps/api/js?key={PUBLIC_GOOGLE_PLACES_API}&libraries=places&callback=initAutocomplete"
	></script>
</svelte:head>

<form on:submit={handleSubmit} class="input-group">
	<input type="text" {placeholder} id="autocomplete" class="form-control" />
	<button type="submit" class="btn btn-secondary input-group-text">
		<i class="bi bi-search" />
	</button>
</form>
