import Grid2 from "@mui/material/Unstable_Grid2";
import { Pagination, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import FetchTrendingDataFromApi from "./utils/fetcher.js";
import MovieCard from "./MovieCard.jsx";

function TrendingMovies() {
	//TODO: Add a on hover tooltip or a onclick to get to a movies page
	const [movies, setMovies] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

	const fetchData = async (pageNumber, signal) => {
		const data = await FetchTrendingDataFromApi(
			"movie",
			"week",
			pageNumber,
			signal
		);
		console.log(data);
		setMovies(data.results);
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
			<Typography variant='h3'>Trending movies this week</Typography>
			<Grid2
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 2, sm: 8, md: 10 }}
				sx={{ paddingTop: "15px" }}
			>
				{movies?.map((movie) => (
					<MovieCard key={movie.id} movie={movie} />
				))}
			</Grid2>
			<Pagination
				sx={{ paddingTop: "15px", paddingBottom: "10px" }}
				siblingCount={2}
				count={totalPages}
				page={page}
				onChange={fetchNextPage}
				variant='outlined'
			/>
		</>
	);
}

export default TrendingMovies;
