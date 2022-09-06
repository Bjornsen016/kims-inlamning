import "./App.css";
import { useState, useMemo, createContext } from "react";
import { BrowserRouter, Route, NavLink, Routes } from "react-router-dom";
import {
	CssBaseline,
	ThemeProvider,
	createTheme,
	Checkbox,
	AppBar,
	Toolbar,
	IconButton,
	Container,
	Drawer,
	List,
	ListItem,
} from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { Home, Error } from "./components";
import { Box } from "@mui/system";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function DrawerMenu() {
	const [isDrawerOpen, setisDrawerOpen] = useState(false);
	const handleMenuClick = (event) => {
		setisDrawerOpen(!isDrawerOpen);
	};
	return (
		<IconButton
			onClick={handleMenuClick}
			edge="start"
			color="inherit"
			aria-label="menu"
		>
			<MenuIcon />
			<Drawer
				variant="temporary"
				anchor="left"
				open={isDrawerOpen}
				onClose={handleMenuClick}
			>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>View 2</ListItem>
					<ListItem>View 3</ListItem>
				</List>
			</Drawer>
		</IconButton>
	);
}

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
					<AppBar position="sticky" color="primary">
						<Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
							<Box sx={{ display: "flex", alignItems: "center" }}>
								<DrawerMenu />
								<Typography variant="h6">Kims React App</Typography>
							</Box>
							<Checkbox
								onChange={colorMode.toggleColorMode}
								icon={<LightMode sx={{ color: "yellow" }} />}
								defaultChecked
								checkedIcon={<DarkMode sx={{ color: "white" }} />}
							/>
						</Toolbar>
					</AppBar>

					{/* Main content that is currently showing */}
					<Container maxWidth="lg">
						<Routes>
							<Route path="/" element={<Home />} />
							{/* Have to be last to catch unknown paths */}
							<Route path="*" element={<Error />} />
						</Routes>
					</Container>
				</ThemeProvider>
			</ColorModeContext.Provider>
		</BrowserRouter>
	);
}

export default App;
