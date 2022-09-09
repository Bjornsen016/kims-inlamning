import Grid2 from "@mui/material/Unstable_Grid2";
import { Pagination, Typography } from "@mui/material";
import FetchTrendingDataFromApi from "./utils/fetcher.js";
import { useEffect, useState } from "react";
import TvShowCard from "./TvShowCard";

function TrendingTvShows() {
	//TODO: Add a on hover tooltip or a onclick to get to a movies page
	const [shows, setShows] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

	const fetchData = async (pageNumber, signal) => {
		const data = await FetchTrendingDataFromApi(
			"tv",
			"week",
			pageNumber,
			signal
		);
		console.log(data);
		setShows(data.results);
		setTotalPages(data.total_pages);
	};

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;

		fetchData(page, signal);

		return () => {
			controller.abort();
		};
	}, []);

	const fetchNextPage = (event, value) => {
		fetchData(value);
		setPage(value);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<>
			<Typography variant='h5'>Trending Tv shows this week</Typography>
			<Grid2
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 1, sm: 8, md: 10 }}
				sx={{ paddingTop: "15px" }}
			>
				{shows?.map((tvShow) => (
					<TvShowCard key={tvShow.id} tvShow={tvShow} />
				))}
			</Grid2>
			<Pagination
				sx={{ paddingTop: "10px", paddingBottom: "10px" }}
				boundaryCount={2}
				siblingCount={2}
				count={totalPages}
				page={page}
				onChange={fetchNextPage}
				variant='outlined'
			/>
		</>
	);
}

export default TrendingTvShows;
