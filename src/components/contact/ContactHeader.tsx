'use client';

import React from 'react';
import { Box, Container, Typography, Grid, useTheme } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const ContactHeader: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        pt: { xs: 4, sm: 5, md: 6 },
        pb: { xs: 4, sm: 5, md: 6 },
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'background.paper',
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          backgroundImage: `
            radial-gradient(circle at 20% 20%, ${theme.palette.primary.main} 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, ${theme.palette.secondary.main} 0%, transparent 40%)
          `,
          backgroundSize: '100% 100%',
        }}
      />

      <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={3} alignItems='center'>
          <Grid item xs={12} md={7}>
            <Box>
              {/* Back to Home Link */}
              <Link href='/' style={{ textDecoration: 'none' }}>
                <Typography
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    color: 'primary.main',
                    mb: 2,
                    fontWeight: 500,
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  ← Back to Home
                </Typography>
              </Link>

              {/* Main Title */}
              <Typography
                variant='h1'
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                  fontWeight: 800,
                  background: `linear-gradient(135deg, ${theme.palette.grey[800]} 0%, ${theme.palette.grey[600]} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  mb: 2,
                  lineHeight: 1.1,
                }}
              >
                Let's Start Your{' '}
                <Box
                  component='span'
                  sx={{
                    color: 'primary.main',
                    WebkitTextFillColor: theme.palette.primary.main,
                  }}
                >
                  Project
                </Box>
              </Typography>

              {/* Description */}
              <Typography
                variant='h5'
                sx={{
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                  color: 'text.secondary',
                  maxWidth: '600px',
                  lineHeight: 1.5,
                  mb: 3,
                }}
              >
                Ready to turn your idea into reality? Send us a message and
                let's discuss how we can help your business grow through
                thoughtful digital solutions.
              </Typography>

              {/* Stats or Trust Indicators */}
              <Grid container spacing={2}>
                {[
                  { number: '24h', text: 'Average Response Time' },
                  { number: '100%', text: 'Client Satisfaction' },
                  { number: '2+', text: 'Years Experience' },
                ].map((stat, index) => (
                  <Grid item xs={12} sm={4} key={index}>
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: 2,
                        bgcolor: 'background.default',
                        boxShadow: `0 4px 12px ${theme.palette.grey[100]}`,
                        transition: 'transform 0.2s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                        },
                      }}
                    >
                      <Typography
                        variant='h3'
                        sx={{
                          fontSize: { xs: '1.5rem', sm: '1.8rem' },
                          fontWeight: 700,
                          color: 'primary.main',
                          mb: 0.5,
                        }}
                      >
                        {stat.number}
                      </Typography>
                      <Typography
                        sx={{
                          color: 'text.secondary',
                          fontSize: '0.85rem',
                        }}
                      >
                        {stat.text}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          {/* Right side decorative element */}
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: { xs: 'none', md: 'block' },
            }}
          >
            <Box
              sx={{
                position: 'relative',
                height: '300px',
                width: '100%',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '200px',
                  height: '200px',
                }}
              >
                <Image
                  src='/logos/freshstack-logo.png'
                  alt='FreshStack Studio'
                  fill
                  style={{
                    objectFit: 'contain',
                    opacity: 0.1,
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactHeader;
