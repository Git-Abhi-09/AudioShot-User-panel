'use client'
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container, Grid } from "@mui/material";
import { navItems } from "../../utils/constanr";
import logo from '../../Assets/audioshotsLogo.png';
import Image from "next/image";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

const drawerWidth = 240;

const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolling, setScrolling] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  React.useEffect(() => {
    const handleScroll = () => {
      
      // Check if window is defined before accessing properties
      if (typeof window !== 'undefined') {
        if (window.scrollY > 0) {          
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      }
    };
    // Explicitly assert the type of window as Window
    const currentWindow = window as Window;

    // Check if window is defined before adding the event listener
    if (typeof currentWindow !== 'undefined') {
      currentWindow.addEventListener('scroll', handleScroll);
    }

    // Cleanup the event listener on component unmount
    return () => {
      // Check if window is defined before removing the event listener
      if (typeof currentWindow !== 'undefined') {
        currentWindow.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);


  const drawer = (
    <Box onClick={handleDrawerToggle} className="text-center">
      <Typography variant="h6" sx={{ my: 2 }}>
        <Image src={logo} alt="Audioshot"/>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton className="text-center primary-font">
              <ListItemText primary={item} className='primary-font' />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = typeof window !== 'undefined' ? () => window.document.body : undefined;
  return (
    <section>
      <Box className='flex'>
        <CssBaseline />
        <AppBar
        sx={{backgroundColor:scrolling ? '#F5F7F8' : 'transparent', boxShadow:'none'}}
          component="nav"
          className='flex'
        >
          <Toolbar className="justify-between w-full">
            <Container className="flex">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className="mr-2"
                sx={{ display: { sm: "none" },color:'#000' }}
              >
                <MenuIcon />
              </IconButton>
              <Grid container>
                <Grid item xs={4}>
                  <Typography
                    variant="h6"
                    component="div"
                    className="text-black"
                    sx={{ display: { xs: "none", sm: "block" } }}
                  >
                            <Image src={logo} height="35" width="35" alt="Audioshot" style={{borderRadius:'5px'}}/>

                  </Typography>
                </Grid>
                <Grid item xs={4} className="flex justify-center">
                  <Box sx={{ display: { xs: "none", sm: "flex" } }}>
                    {navItems.map((item) => (
                      <Button key={item} className="text-black justify-between">
                        <Typography className='primary-font capitalize'>
                        {item}
                        </Typography>
                        
                      </Button>
                    ))}
                  </Box>
                </Grid>
                <Grid item xs={4} sx={{position:'relative',left:{xs:'6px'}}} className="flex justify-end">
                <Button variant="outlined" style={{fontFamily:'Cantarell'}} className="border-0 border-b border-black text-black capitalize">Download<SaveAltIcon className="pl-1 ml-1"/></Button>
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </section>
  );
};

export default Header;
