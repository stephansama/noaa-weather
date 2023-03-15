export function load({ url, params }) {
	//
	console.log(params);
	console.log(url);
	console.log(url.searchParams.get('lat'));
	console.log(url.searchParams.get('lng'));
}
