import {useState} from 'react'
import {Drawer, IconButton, Typography, ButtonGroup, Button} from '@mui/material'
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '@emotion/react';

function DrawerMenu() {
	const [isDrawerOpen, setisDrawerOpen] = useState(false);
	const handleMenuClick = () => {
		setisDrawerOpen(!isDrawerOpen);
	};

    const links = [
        {to: "/", text: "Home"},
        {to: "/top100", text: "Top 100"},
        {to: "/trending", text: "Trending"},
    ]

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
                sx={{width: "200px", [`& .MuiDrawer-paper`]: { width: "200px", boxSizing: 'border-box' }}}
			>
			
				<ButtonGroup orientation="vertical" variant="text" color="primary" aria-label="">
                {links.map((link, i) => (
                    <NavLink key={"link-" + i} style={{textDecoration: "none"}} to={link.to}><Button><Typography variant="h5" color="text.secondary">{link.text}</Typography></Button></NavLink>
                ))}
                  
                </ButtonGroup>
			</Drawer>
		</IconButton>
	);
}

export default DrawerMenu;