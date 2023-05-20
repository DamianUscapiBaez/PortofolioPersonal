import { AppBar, Box, Drawer, IconButton, Link, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import navIcon1 from '../assets/img/nav-icon-facebook.svg';
import navIcon2 from '../assets/img/nav-icon-github.svg';
import navIcon3 from '../assets/img/nav-icon-linkedin.svg';

const drawerWidth = 240;
const navItems = [{ label: "Inicio", link: "#inicio" }, { label: "Skills", link: "#skills" }, { label: "Proyectos", link: "#projects" }];

export const Navbar = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const container = window !== undefined ? () => window().document.body : undefined;
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', justifyContent: "center", background: "#212529", minHeight: "100vh", color: "#fff" }}>
            <List>
                {navItems.map((item, index) => (
                    <Link key={index} href={item.link} sx={{ textDecoration: "none", color: "#fff" }}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText primary={item.label} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
            <List>
                <div className='social-icon'>
                    <a href='#'><img src={navIcon1} /></a>
                    <a href='#'><img src={navIcon2} /></a>
                    <a href='#'><img src={navIcon3} /></a>
                </div>
            </List>
            <List>
                <button className='vvd'><span>Contactame</span></button>
            </List>
        </Box>
    );
    return (
        <Box>
            <AppBar component="nav" sx={{ background: "#212529" }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                        {navItems.map((item, index) => (
                            <Link href={item.link} key={index} sx={{ color: '#fff', textDecoration: 'none', p: 1.4 }}>
                                {item.label}
                            </Link>
                        ))}
                        <span className='navbar-text'>
                            <div className='social-icon'>
                                {/* <a href='#'><img src={navIcon1} /></a> */}
                                <a href='https://github.com/DamianUscapiBaez'><img src={navIcon2} /></a>
                                <a href='https://www.linkedin.com/in/damian-uscapi-baez-576a911b2/'><img src={navIcon3} /></a>
                            </div>
                            {/* <button className='vvd'><span>Contactame</span></button> */}
                        </span>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>);
}