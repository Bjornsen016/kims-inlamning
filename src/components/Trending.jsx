import Grid2 from "@mui/material/Unstable_Grid2";
import { Button, Card, CardHeader, CardMedia, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard.jsx";
import FetchDataFromApi from "./utils/fetcher.js";

function Trending() {
	const [movies, setMovies] = useState([]);
	const [page, setPage] = useState(1);

	const fetchData = async (pageNumber) => {
		const data = await FetchDataFromApi("movie", "week", pageNumber);
		setMovies(data.results);
	};

	useEffect(() => {
		fetchData(page);
	}, []);

	const fetchNextPage = () => {
		fetchData(page + 1);
		setPage(page + 1);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

	/* <MovieCard key={item.id} movie={item} /> 
	GET THIS TO WORK!
	*/

	return (
		<>
			<Typography variant='h2'>Trending movies this week</Typography>
			<Grid2
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 1, sm: 8, md: 10 }}
				sx={{ paddingTop: "15px" }}
			>
				{movies.map((movie) => (
					<Grid2
						sx={{ minHeight: "200px" }}
						key={movie.id}
						xs={1}
						sm={2}
						md={2}
					>
						<Card className='movie-card'>
							<div style={{ position: "relative" }}>
								<CardHeader
									title={`${movie.title}`}
									titleTypographyProps={{ variant: "h6" }}
									subheader={`Rating: ${movie.vote_average}`}
									sx={{
										position: "absolute",
										color: "white",
										top: 0,
										left: "0",
									}}
								/>
								<CardMedia
									component='img'
									image={`${imageBaseUrl}${movie.poster_path}`}
								/>
								<Typography
									sx={{
										position: "absolute",
										color: "white",
										bottom: 0,
										left: "50%",
										transform: "translateX(-50%)",
										fontSize: "0.7rem",
									}}
									variant='subtitle2'
								>
									{movie.release_date}
								</Typography>
							</div>
						</Card>
					</Grid2>
				))}
			</Grid2>
			<Typography>{`Page: ${page}`}</Typography>
			<Button onClick={fetchNextPage}>NEXT PAGE</Button>
		</>
	);
}

export default Trending;
