import "./App.css";
import { useState, useMemo, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
	CssBaseline,
	ThemeProvider,
	createTheme,
	Container,
} from "@mui/material";

import {
	Home,
	Error,
	Header,
	TrendingTvShows,
	TrendingMovies,
	Footer,
} from "./components";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
	//Color modes
	const [mode, setMode] = useState("light");
	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
			},
		}),
		[]
	);

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode,
				},
			}),
		[mode]
	);

	//Component render
	return (
		<BrowserRouter>
			<ColorModeContext.Provider value={colorMode}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Header colorMode={colorMode} />

					{/* Main content that is currently showing */}
					<Container
						style={{
							display: "flex",
							height: "95vh",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/trending/tvshows' element={<TrendingTvShows />} />
							<Route path='/trending/movies' element={<TrendingMovies />} />
							{/* Have to be last to catch unknown paths */}
							<Route path='*' element={<Error />} />
						</Routes>
						<Footer />
					</Container>
				</ThemeProvider>
			</ColorModeContext.Provider>
		</BrowserRouter>
	);
}

export default App;
