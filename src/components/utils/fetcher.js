const apiKey = "cee148dbc81c4cc841361565787b9a8e";
const baseUrl = "https://api.themoviedb.org";

async function FetchTrendingDataFromApi(type, timeFrame, page, signal) {
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
		signal,
	})
		.then((res) => res.json())
		.catch((error) => {
			if (error.name === "AbortError") {
				console.log("User Aborted");
			}
		});

	console.log(data);

	return data;
}

async function FetchSearchDataFromApi(type, query, page, signal) {
	const headers = new Headers({
		"Content-Type": "application/json;charset=utf-8",
	});
	const url = new URL(baseUrl);
	url.pathname = `/3/search/${type}`;
	url.searchParams.set("api_key", apiKey);
	url.searchParams.set("query", query);
	url.searchParams.set("page", page);

	const data = await fetch(url, {
		metod: "GET",
		headers: headers,
		signal,
	})
		.then((res) => res.json())
		.catch((error) => {
			if (error.name === "AbortError") {
				console.log("User Aborted");
			}
		});

	console.log(data);

	return data;
}

export { FetchSearchDataFromApi };
export default FetchTrendingDataFromApi;
