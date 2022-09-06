import {
	Card,
	CardHeader,
	CardContent,
	CardMedia,
	Container,
	Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useEffect, useState } from "react";
import FetchDataFromApi from "./utils/fetcher.js";

function Trending() {
	const [movies, setMovies] = useState([]);

	const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

	useEffect(() => {
		const fetchData = async () => {
			const data = await FetchDataFromApi("movie", "week");
			console.log(data.results);
			setMovies(data.results);
			console.log(movies);
		};
		fetchData();
	}, []);

	return (
		<Grid2
			container
			spacing={{ xs: 2, md: 3 }}
			columns={{ xs: 1, sm: 8, md: 12 }}
		>
			{movies.length > 0 ? (
				movies.map((movie, index) => (
					<Grid2 xs={1} sm={2} md={2} key={index}>
						<Card className='movie-card'>
							<CardHeader
								title={`${movie.title}`}
								titleTypographyProps={{ variant: "h6" }}
								subheader={`Rating: ${movie.vote_average}`}
							/>
							<div style={{ position: "relative" }}>
								<CardMedia
									component='img'
									image={`${imageBaseUrl}${movie.poster_path}`}
								/>
								<Typography
									sx={{
										position: "absolute",
										color: "white",
										bottom: 3,
										left: "50%",
										transform: "translateX(-50%)",
									}}
									variant='subtitle2'
								>
									{movie.release_date}
								</Typography>
							</div>
						</Card>
					</Grid2>
				))
			) : (
				<div>Loading</div>
			)}
		</Grid2>
	);
}

export default Trending;
