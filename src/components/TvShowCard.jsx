import { Card, CardHeader, CardMedia, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

function MovieCard({ tvShow }) {
	const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

	return (
		<Grid2 sx={{ minHeight: "200px" }} key={tvShow.id} xs={1} sm={2} md={2}>
			<Card className='movie-card'>
				<div style={{ position: "relative" }}>
					<CardHeader
						title={`${tvShow.name}`}
						titleTypographyProps={{ variant: "h6" }}
						subheader={`Rating: ${tvShow.vote_average}`}
						sx={{
							position: "absolute",
							color: "white",
							top: 0,
							left: "0",
						}}
					/>
					<CardMedia
						component='img'
						image={`${imageBaseUrl}${tvShow.poster_path}`}
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
						{tvShow.first_air_date}
					</Typography>
				</div>
			</Card>
		</Grid2>
	);
}

export default MovieCard;
