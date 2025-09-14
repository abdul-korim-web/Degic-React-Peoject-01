import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;
const navItems = [
  { item: 'Home', to: '/' },
  { item: 'About', to: '/about' },
  { item: 'Service', to: '/service' },
  { item: 'Project', to: '/project' },
  { item: 'Contacts', to: '/contacts' }
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <a href="/" className='cursor-pointer'><img src="/image/Logo.png" alt="Logo" /></a>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <motion.div
            key={item.item}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <ListItem disablePadding>
              <ListItemButton
                component={NavLink}
                to={item.to}
                sx={{
                  textAlign: 'center',
                  '&.active': { color: '#29005A', fontWeight: 'bold' },
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': { transform: 'scale(1.05)', color: '#29005A' }
                }}
              >
                <ListItemText primary={item.item} />
              </ListItemButton>
            </ListItem>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: navItems.length * 0.1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Button
            component={NavLink}
            to="/signup"
            variant="contained"
            sx={{
              bgcolor: '#29005A',
              color: 'white',
              mt: 2,
              borderRadius: '10px',
              transition: 'all 0.3s ease-in-out',
              '&:hover': { bgcolor: '#3f007f', transform: 'translateY(-3px)' }
            }}
          >
            Sign Up
          </Button>
        </motion.div>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <AppBar
          elevation={0}
          component="nav"
          sx={{ bgcolor: 'white', color: 'black', border: 'none', padding: '5px' }}
        >
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
              <a href="/" className='cursor-pointer'><img src="/image/Logo.png" alt="Logo" /></a>
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.item}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: false, amount: 0.2 }}
                  style={{ display: 'inline-block' }}
                >
                  <Button
                    component={NavLink}
                    to={item.to}
                    sx={{
                      color: 'black',
                      mx: 1,
                      '&.active': { color: '#29005A', fontWeight: 'bold' },
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': { transform: 'scale(1.1)', color: '#29005A' }
                    }}
                  >
                    {item.item}
                  </Button>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: navItems.length * 0.15 }}
                viewport={{ once: false, amount: 0.2 }}
                style={{ display: 'inline-block' }}
              >
                <Button
                  component={NavLink}
                  to="/singup"
                  variant="contained"
                  sx={{
                    bgcolor: '#29005A',
                    color: 'white',
                    borderRadius: '10px',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': { bgcolor: '#3f007f', transform: 'translateY(-3px)' }
                  }}
                >
                  Sign Up
                </Button>
              </motion.div>
            </Box>
          </Toolbar>
        </AppBar>
      </motion.div>

      <nav className="bg-white text-black">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func
};

export default DrawerAppBar;
