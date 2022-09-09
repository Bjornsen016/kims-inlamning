import {
	Card,
	CardHeader,
	CardMedia,
	Typography,
	Tooltip,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

function MovieCard({ movie }) {
	const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
	const imageNotFoundPath =
		"https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg";

	return (
		<Grid2 sx={{ minHeight: "200px" }} key={movie.id} xs={1} sm={2} md={2}>
			<Tooltip title={movie.overview}>
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
							image={
								movie.poster_path == null
									? `${imageNotFoundPath}`
									: `${imageBaseUrl}${movie.poster_path}`
							}
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
			</Tooltip>
		</Grid2>
	);
}

export default MovieCard;
