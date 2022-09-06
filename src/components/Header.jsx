import {
	Checkbox,
	AppBar,
	Toolbar
} from "@mui/material";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import DrawerMenu from "./DrawerMenu.jsx"
import { DarkMode, LightMode } from "@mui/icons-material";

function Header({colorMode}){

    return (<AppBar position="sticky" color="primary">
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
</AppBar>);
}

export default Header;