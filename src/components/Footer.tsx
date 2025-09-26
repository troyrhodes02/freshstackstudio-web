'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link as MuiLink,
  IconButton,
} from '@mui/material';
import Image from 'next/image';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/#about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Contact', href: '/contact' },
];

const Footer: React.FC = () => {
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
  };

  return (
    <Box
      component='footer'
      sx={{
        bgcolor: '#1e1e1e',
        color: 'white',
        py: { xs: 6, md: 8 },
        position: 'relative',
        flexShrink: 0,
        width: '100%',
        marginTop: 'auto',
      }}
    >
      <Container maxWidth='lg'>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
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
                variant='h6'
                sx={{
                  fontWeight: 600,
                  color: 'white',
                }}
              >
                FreshStack Studio
              </Typography>
            </Box>
            <Typography
              variant='body1'
              sx={{
                color: 'grey.400',
                mb: 3,
                maxWidth: '300px',
              }}
            >
              Turning bold business ideas into clear, robust digital products.
              We guide every client from concept sketch to finished solution
              with craftsmanship and care.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant='h6'
              sx={{
                color: 'white',
                fontWeight: 600,
                mb: 3,
              }}
            >
              Quick Links
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1.5,
              }}
            >
              {navigationItems.map(item => (
                <Box
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  sx={{
                    color: 'grey.400',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    width: 'fit-content',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  <Typography>{item.label}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant='h6'
              sx={{
                color: 'white',
                fontWeight: 600,
                mb: 3,
              }}
            >
              Contact
            </Typography>
            <Box sx={{ mb: 3 }}>
              <Typography
                component='a'
                href='mailto:freshstackstudio.projects@gmail.com'
                sx={{
                  color: 'grey.400',
                  textDecoration: 'none',
                  '&:hover': {
                    color: 'primary.main',
                  },
                  display: 'block',
                  mb: 1,
                }}
              >
                freshstackstudio.projects@gmail.com
              </Typography>
              <Typography
                sx={{
                  color: 'grey.400',
                }}
              >
                Response within 48 hours
              </Typography>
              <Typography
                sx={{
                  color: 'grey.400',
                  mt: 1,
                }}
              >
                Available for new projects
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton
                component='a'
                href='#'
                target='_blank'
                rel='noopener noreferrer'
                sx={{
                  color: 'grey.400',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                component='a'
                href='#'
                target='_blank'
                rel='noopener noreferrer'
                sx={{
                  color: 'grey.400',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                component='a'
                href='#'
                target='_blank'
                rel='noopener noreferrer'
                sx={{
                  color: 'grey.400',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: '1px solid',
            borderColor: 'grey.800',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 2, sm: 0 },
          }}
        >
          <Typography
            variant='body2'
            sx={{
              color: 'grey.400',
            }}
          >
            © 2025 FreshStack Studio LLC. All rights reserved.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 3,
            }}
          >
            <MuiLink
              href='#'
              sx={{
                color: 'grey.400',
                textDecoration: 'none',
                '&:hover': {
                  color: 'primary.main',
                },
                fontSize: '0.875rem',
              }}
            >
              Privacy Policy
            </MuiLink>
            <MuiLink
              href='#'
              sx={{
                color: 'grey.400',
                textDecoration: 'none',
                '&:hover': {
                  color: 'primary.main',
                },
                fontSize: '0.875rem',
              }}
            >
              Terms of Service
            </MuiLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
