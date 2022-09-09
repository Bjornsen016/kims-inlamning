import { Typography, Pagination } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import Button from "@mui/material/Button";
import MovieCard from "./MovieCard.jsx";
import { FetchSearchDataFromApi } from "./utils/fetcher";

function Home() {
	const [searchWords, setsearchWords] = useState("");
	const [movies, setMovies] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

	const searchInput = (e) => {
		setsearchWords(e.target.value);
	};

	const handleSearch = (e) => {
		e.preventDefault();
		fetchData(1);
	};

	const fetchData = async (pageNumber, signal) => {
		const data = await FetchSearchDataFromApi(
			"movie",
			searchWords,
			pageNumber,
			signal
		);
		console.log(data);
		setMovies(data.results);
		setTotalPages(data.total_pages);
	};

	const fetchNextPage = (event, value) => {
		fetchData(value);
		setPage(value);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div>
			<Typography variant='h1'>Welcome HOME</Typography>
			<div>
				<form onSubmit={handleSearch}>
					<TextField
						size='small'
						id='searchField'
						label='Search'
						variant='outlined'
						value={searchWords}
						onChange={searchInput}
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									<SearchIcon />
								</InputAdornment>
							),
						}}
					/>
					<Button type='submit' variant='outlined' color='primary'>
						Search
					</Button>
				</form>
			</div>
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
			{movies?.length === 0 ? (
				""
			) : (
				<Pagination
					sx={{ paddingTop: "10px", paddingBottom: "10px" }}
					siblingCount={2}
					count={totalPages}
					variant='outlined'
					page={page}
					onChange={fetchNextPage}
				/>
			)}
		</div>
	);
}

export default Home;
