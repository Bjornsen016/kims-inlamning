import { Card, CardHeader, CardMedia, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

function MovieCard(movie) {
	const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

	return (
		<Grid2 xs={1} sm={2} md={2}>
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
	);
}

export default MovieCard;
