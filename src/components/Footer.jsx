import { Container, Box, Typography, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import CopyrightIcon from "@mui/icons-material/Copyright";

export default function Footer() {
	const footerNav = {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
		marginRight: "auto",
	};
	return (
		<footer>
			<Container sx={{ minWidth: "95vw" }} maxWidth='lg'>
				<Box
					py={6}
					display='flex'
					flexWrap='wrap'
					justifyContent='space-between'
					alignItems='center'
				>
					<Box component='nav' className={footerNav}>
						<Link
							style={{ textDecoration: "none" }}
							color='textPrimary'
							target='_blank'
							rel='noreferrer'
							href='https://github.com/Bjornsen016'
						>
							<GitHubIcon />
						</Link>
					</Box>
					<Typography
						color='textSecondary'
						component='p'
						variant='caption'
						gutterBottom={false}
					>
						Kim i Molnet
						<CopyrightIcon />
					</Typography>
				</Box>
			</Container>
		</footer>
	);
}
