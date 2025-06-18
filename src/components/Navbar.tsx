'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  RocketLaunch as RocketIcon,
} from '@mui/icons-material';

const navigationItems = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Home', href: '#home' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  // Enhanced breakpoints for better device handling
  const isMobile = useMediaQuery('(max-width:1023px)');
  const isShortScreen = useMediaQuery('(max-height:700px)'); // Handle Nest Hub and similar
  const isVerySmall = useMediaQuery('(max-width:480px)');
  const isCompactMode = isMobile || isShortScreen; // Use mobile layout for short screens too

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (href: string) => {
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ width: 280, height: '100%', bgcolor: 'background.paper' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2,
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              bgcolor: 'primary.main',
              borderRadius: 1.5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant='h6'
              sx={{
                color: 'white',
                fontWeight: 700,
                fontSize: '1.4rem',
              }}
            >
              F
            </Typography>
          </Box>
          <Typography
            variant='h6'
            sx={{ fontWeight: 600, color: 'text.primary' }}
          >
            FreshStack Studio
          </Typography>
        </Box>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ color: 'text.secondary' }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <List sx={{ px: 1, py: 2 }}>
        {navigationItems.map(item => (
          <ListItem
            key={item.label}
            sx={{
              borderRadius: 1,
              mb: 0.5,
              '&:hover': {
                bgcolor: 'primary.main',
                '& .MuiListItemText-primary': {
                  color: 'white',
                },
              },
              cursor: 'pointer',
            }}
            onClick={() => handleNavClick(item.href)}
          >
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                fontWeight: 500,
                color: 'text.primary',
                fontSize: '1rem',
              }}
            />
          </ListItem>
        ))}
      </List>

      <Box sx={{ p: 2 }}>
        <Button
          variant='contained'
          fullWidth
          startIcon={<RocketIcon />}
          onClick={() => handleNavClick('#contact')}
          sx={{
            py: 1.5,
            borderRadius: 2,
            fontWeight: 600,
            fontSize: '1rem',
          }}
        >
          Start Your Project
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position='fixed'
        elevation={0}
        sx={{
          bgcolor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
        }}
      >
        <Container maxWidth='xl'>
          <Toolbar
            sx={{
              justifyContent: 'space-between',
              py: isShortScreen
                ? { xs: 0.5, sm: 1 }
                : { xs: 1, sm: 1.5, lg: 2 },
              minHeight: isShortScreen
                ? { xs: 56, sm: 60 }
                : { xs: 64, sm: 72, lg: 80 },
              px: { xs: 1, sm: 2 },
            }}
          >
            {/* Logo */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: isShortScreen
                  ? { xs: 0.5, sm: 1 }
                  : { xs: 1, sm: 1.5, lg: 2 },
                cursor: 'pointer',
                flexShrink: 0,
              }}
              onClick={() => handleNavClick('#home')}
            >
              <Box
                sx={{
                  width: isShortScreen
                    ? { xs: 32, sm: 36, md: 40 }
                    : { xs: 36, sm: 42, md: 45, lg: 50 },
                  height: isShortScreen
                    ? { xs: 32, sm: 36, md: 40 }
                    : { xs: 36, sm: 42, md: 45, lg: 50 },
                  bgcolor: 'primary.main',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(34, 197, 94, 0.3)',
                }}
              >
                <Typography
                  variant='h4'
                  sx={{
                    color: 'white',
                    fontWeight: 700,
                    fontSize: isShortScreen
                      ? { xs: '1rem', sm: '1.2rem', md: '1.4rem' }
                      : {
                          xs: '1.2rem',
                          sm: '1.4rem',
                          md: '1.6rem',
                          lg: '1.8rem',
                        },
                  }}
                >
                  F
                </Typography>
              </Box>
              <Typography
                variant='h4'
                sx={{
                  fontWeight: 700,
                  color: 'text.primary',
                  fontSize: isShortScreen
                    ? { xs: '0.9rem', sm: '1rem', md: '1.1rem' }
                    : { xs: '1rem', sm: '1.1rem', md: '1.3rem', lg: '1.5rem' },
                  display: { xs: isVerySmall ? 'none' : 'block', sm: 'block' },
                  whiteSpace: 'nowrap',
                }}
              >
                FreshStack Studio
              </Typography>
            </Box>

            {/* Desktop Navigation - Only show on large screens that aren't too short */}
            {!isCompactMode && (
              <>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: { lg: 1, xl: 2 },
                    overflow: 'hidden',
                  }}
                >
                  {navigationItems.map(item => (
                    <Button
                      key={item.label}
                      onClick={() => handleNavClick(item.href)}
                      sx={{
                        color: 'text.primary',
                        fontWeight: 500,
                        px: { lg: 1.5, xl: 2 },
                        py: 1.5,
                        fontSize: { lg: '0.85rem', xl: '0.95rem' },
                        borderRadius: 2,
                        minWidth: 'auto',
                        whiteSpace: 'nowrap',
                        '&:hover': {
                          bgcolor: 'primary.50',
                          color: 'primary.main',
                        },
                        transition: 'all 0.2s ease-in-out',
                      }}
                    >
                      {item.label}
                    </Button>
                  ))}
                </Box>

                {/* Desktop CTA Button */}
                <Button
                  variant='contained'
                  startIcon={<RocketIcon />}
                  onClick={() => handleNavClick('#contact')}
                  sx={{
                    px: { lg: 2.5, xl: 3 },
                    py: 1.5,
                    fontSize: { lg: '0.85rem', xl: '0.95rem' },
                    borderRadius: 2,
                    fontWeight: 600,
                    flexShrink: 0,
                    whiteSpace: 'nowrap',
                    boxShadow: '0 4px 12px rgba(34, 197, 94, 0.3)',
                    '&:hover': {
                      transform: 'translateY(-1px)',
                      boxShadow: '0 6px 16px rgba(34, 197, 94, 0.4)',
                    },
                    transition: 'all 0.2s ease-in-out',
                  }}
                >
                  Start Your Project
                </Button>
              </>
            )}

            {/* Mobile Menu Button - Show on mobile OR short screens */}
            {isCompactMode && (
              <IconButton
                color='inherit'
                edge='start'
                onClick={handleDrawerToggle}
                sx={{
                  color: 'text.primary',
                  bgcolor: 'primary.50',
                  '&:hover': {
                    bgcolor: 'primary.100',
                  },
                  flexShrink: 0,
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant='temporary'
        anchor='right'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
          },
        }}
      >
        {drawer}
      </Drawer>

      <Toolbar
        sx={{
          minHeight: isShortScreen
            ? { xs: 56, sm: 60 }
            : { xs: 64, sm: 72, lg: 80 },
        }}
      />
    </>
  );
};

export default Navbar;
