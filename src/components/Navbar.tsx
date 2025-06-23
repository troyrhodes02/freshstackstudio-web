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
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  RocketLaunch as RocketIcon,
} from '@mui/icons-material';

const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/#about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Contact', href: '/contact' },
];

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const isShortScreen = useMediaQuery('(max-height:700px)');
  const isVerySmall = useMediaQuery('(max-width:480px)');
  const isCompactMode = isMobile || isShortScreen;

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (href: string) => {
    if (href === '/') {
      window.location.href = '/';
    } else if (href === '/contact' || href === '/portfolio') {
      window.location.href = href;
    } else if (href.startsWith('/#')) {
      // If we're not on the landing page, go there first
      if (!window.location.pathname.endsWith('/')) {
        window.location.href = href;
      } else {
        const element = document.querySelector(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
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
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <Image
              src='/logos/freshstack-logo.png'
              alt='FreshStack Studio'
              fill
              style={{ objectFit: 'contain' }}
            />
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
          onClick={() => handleNavClick('/contact')}
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
          bgcolor: 'background.default',
          backdropFilter: 'blur(10px)',
          borderBottom: `1px solid ${theme.palette.grey[100]}`,
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
            <Link href='/' style={{ textDecoration: 'none' }}>
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
              >
                <Box
                  sx={{
                    width: isShortScreen
                      ? { xs: 32, sm: 36, md: 40 }
                      : { xs: 36, sm: 42, md: 45, lg: 50 },
                    height: isShortScreen
                      ? { xs: 32, sm: 36, md: 40 }
                      : { xs: 36, sm: 42, md: 45, lg: 50 },
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    src='/logos/freshstack-logo.png'
                    alt='FreshStack Studio'
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </Box>
                <Typography
                  variant='h4'
                  sx={{
                    fontWeight: 700,
                    color: 'text.primary',
                    fontSize: isShortScreen
                      ? { xs: '0.9rem', sm: '1rem', md: '1.1rem' }
                      : {
                          xs: '1rem',
                          sm: '1.1rem',
                          md: '1.3rem',
                          lg: '1.5rem',
                        },
                    display: {
                      xs: isVerySmall ? 'none' : 'block',
                      sm: 'block',
                    },
                    whiteSpace: 'nowrap',
                  }}
                >
                  FreshStack Studio
                </Typography>
              </Box>
            </Link>

            {/* Desktop Navigation - Only show on large screens that aren't too short */}
            {!isCompactMode && (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: { xs: 2, sm: 3, md: 4 },
                }}
              >
                {navigationItems.map(item => (
                  <Box
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    sx={{
                      position: 'relative',
                      cursor: 'pointer',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: '100%',
                        height: '2px',
                        bottom: '-4px',
                        left: 0,
                        backgroundColor: 'primary.main',
                        transform: 'scaleX(0)',
                        transformOrigin: 'right',
                        transition:
                          'transform 0.3s ease-in-out, opacity 0.2s ease-in-out',
                        opacity: 0,
                      },
                      '&:hover::after': {
                        transform: 'scaleX(1)',
                        transformOrigin: 'left',
                        opacity: 1,
                      },
                      '&:hover': {
                        color: 'primary.main',
                        transform: 'translateY(-2px)',
                      },
                      transition:
                        'transform 0.2s ease-in-out, color 0.2s ease-in-out',
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 500,
                        color: 'text.primary',
                        fontSize: { xs: '0.9rem', sm: '1rem' },
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}

            {/* Desktop CTA Button - Only show on large screens that aren't too short */}
            {!isCompactMode && (
              <Link href='/contact' style={{ textDecoration: 'none' }}>
                <Button
                  variant='contained'
                  startIcon={<RocketIcon />}
                  sx={{
                    px: { lg: 2.5, xl: 3 },
                    py: 1.5,
                    fontSize: { lg: '0.85rem', xl: '0.95rem' },
                    borderRadius: 2,
                    fontWeight: 600,
                    flexShrink: 0,
                    whiteSpace: 'nowrap',
                    boxShadow: theme =>
                      `0 4px 12px ${theme.palette.primary.main}30`,
                    '&:hover': {
                      transform: 'translateY(-1px)',
                      boxShadow: theme =>
                        `0 6px 16px ${theme.palette.primary.main}40`,
                    },
                    transition: 'all 0.2s ease-in-out',
                  }}
                >
                  Start Your Project
                </Button>
              </Link>
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
            background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
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
