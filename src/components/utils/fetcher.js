const apiKey = "cee148dbc81c4cc841361565787b9a8e";
const baseUrl = "https://api.themoviedb.org";

async function FetchDataFromApi(type, timeFrame, page) {
	const headers = new Headers({
		"Content-Type": "application/json;charset=utf-8",
	});
	const url = new URL(baseUrl);

	url.pathname = `/3/trending/${type}/${timeFrame}`;
	url.searchParams.set("api_key", apiKey);
	url.searchParams.set("page", page);

	const data = await fetch(url, {
		metod: "GET",
		headers: headers,
	}).then((res) => res.json());

	console.log(data);

	return data;
}

export default FetchDataFromApi;
