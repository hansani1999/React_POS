import React, {Component, Fragment} from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
/****/
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import {Link} from "react-router-dom";
import Grid from "@mui/material/Grid";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Paper from "@mui/material/Paper";
import Dashboard from "../Dashboard";
import CartManage from "../CartManage";
import ProductManage from "../ProductManage";
import UserRegistration from "../UserRegistration";


const style = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 400,
    backgroundColor: 'background.paper',
    borderRadius: '5px',
    boxShadow: 24,
    p: 4,
};

/*const styleSheet = () => ({
    form__container:{
        display: 'flex',
        flexDirection: 'column',
        height: '50%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor:'red',
    }
})*/


class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            anchorElNav: null,
            anchorElUser: null,
            pages: [{navItem: 'Products', itemIndex: 1}, {navItem: 'Cart', itemIndex: 2}, {
                navItem: 'User',
                itemIndex: 3
            }],
            settings: ['Profile', 'Account', 'Logout'],
            modalOpen: false,
            openSettings: 'block'
        }
    }

    handleOpen() {
        console.log('handleOpen')
        this.setState({modalOpen: true})
    }

    handleClose() {
        this.setState({modalOpen: false})
    }

    handleOpenNavMenu = (event) => {
        this.setState({anchorElNav: event.currentTarget})
    }

    handleOpenUserMenu = (event) => {
        this.setState({anchorElUser: event.currentTarget})
    }

    handleCloseNavMenu = () => {
        this.setState({anchorElNav: null})
    }

    handleCloseUserMenu = () => {
        this.setState({anchorElUser: null})
    }

    openSelectedPage = (page) => {
        if (page === 'Login / Register') {
            this.handleOpen()
        }
    }

    render() {
        const {classes} = this.props
        return (
            <Fragment>
                {/*Nav bar start*/}
                <AppBar position="static">
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <ShoppingCartIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    mr: 5,
                                    display: {xs: 'none', md: 'flex'},
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.2rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                POS
                            </Typography>

                            <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={this.handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon/>
                                </IconButton>
                                {/*shrinked menu*/}
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={this.state.anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(this.state.anchorElNav)}
                                    onClose={this.handleCloseNavMenu}
                                    sx={{
                                        display: {xs: 'block', md: 'none'},
                                    }}
                                >
                                    {this.state.pages.map((page) => (
                                        <MenuItem key={page.navItem} onClick={this.handleCloseNavMenu}>
                                            <Typography textAlign="center">{page.navItem}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                            <ShoppingCartIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                href=""
                                sx={{
                                    mr: 2,
                                    display: {xs: 'flex', md: 'none'},
                                    flexGrow: 1,
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                POS
                            </Typography>
                            <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                                {this.state.pages.map((page) => (
                                    <Button
                                        key={page.navItem}
                                        onClick={(e) => {
                                            this.openSelectedPage(page.navItem)
                                        }}
                                        sx={{my: 2, color: 'white', display: 'block'}}
                                    >
                                        {page.navItem}
                                    </Button>
                                ))}
                            </Box>

                            <Box sx={{flexGrow: 0, display: this.state.openSettings}}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={this.handleOpenUserMenu} sx={{p: 0}}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{mt: '45px'}}
                                    id="menu-appbar"
                                    anchorEl={this.state.anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(this.state.anchorElUser)}
                                    onClose={this.handleCloseUserMenu}
                                >
                                    {this.state.settings.map((setting) => (
                                        <MenuItem key={setting} onClick={this.handleCloseUserMenu}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
                {/*Nav bar end*/}

                {/*Main Starts*/}
                <Grid style={{backgroundColor: '#E7EBF0'}}>
                    {/*About Starts*/}
                    <Grid container>
                        <Box
                            sx={{
                                display: 'flex',
                                '& > :not(style)': {
                                    m: 1,
                                    width: '90vw',
                                    height: '30vh',
                                },
                            }}
                        >
                        </Box>
                    </Grid>
                    {/*About Ends*/}

                    {/*Dashboard Starts*/}
                    <Grid>
                        <Grid item lg={12} xs={12} sm={12} md={12}>
                            {/*<Typography variant="h3" style={{display: 'flex', justifyContent: 'center'}} mt={5}>Dashboard</Typography>*/}
                            <Dashboard/>
                        </Grid>
                        <Grid item lg={12} xs={12} sm={12} md={12}>
                            {/*<Typography variant="h3" style={{display: 'flex', justifyContent: 'center'}} mt={5}>Dashboard</Typography>*/}
                            <CartManage/>
                        </Grid>
                        <Grid item lg={12} xs={12} sm={12} md={12}>
                            {/*<Typography variant="h3" style={{display: 'flex', justifyContent: 'center'}} mt={5}>Dashboard</Typography>*/}
                            <ProductManage/>
                        </Grid>
                        <Grid item lg={12} xs={12} sm={12} md={12}>
                            {/*<Typography variant="h3" style={{display: 'flex', justifyContent: 'center'}} mt={5}>Dashboard</Typography>*/}
                            <UserRegistration/>
                        </Grid>
                    </Grid>
                    {/*Dashboard Ends*/}

                    {/*Main Ends*/}

                    {/*Footer starts*/}
                    <div>
                        Hello I'm Footer
                    </div>
                    {/*Footer Ends*/}
                </Grid>
            </Fragment>
        )
    }
}

export default Home
