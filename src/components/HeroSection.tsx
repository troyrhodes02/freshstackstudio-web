'use client';

import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Send as SendIcon, PlayArrow as PlayIcon } from '@mui/icons-material';

const HeroSection: React.FC = () => {
  const handleSendMessage = () => {
    // Navigate to contact section
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewPortfolio = () => {
    // Navigate to portfolio section
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id='home'
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#fafafa',
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth='lg'>
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: '900px',
            mx: 'auto',
          }}
        >
          {/* Main Headline */}
          <Typography
            variant='h1'
            sx={{
              fontSize: { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem' },
              fontWeight: 900,
              lineHeight: 1.1,
              mb: 4,
              color: 'text.primary',
            }}
          >
            Build{' '}
            <Box
              component='span'
              sx={{
                color: 'primary.main',
                display: 'inline',
              }}
            >
              Fresh
            </Box>
            . Scale Fast.
          </Typography>

          {/* Description */}
          <Typography
            variant='h5'
            sx={{
              fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.4rem' },
              fontWeight: 400,
              lineHeight: 1.6,
              color: 'text.secondary',
              mb: 6,
              maxWidth: '700px',
              mx: 'auto',
            }}
          >
            FreshStack Studio turns bold business ideas into clear, robust
            digital products—guiding every client from concept sketch to
            finished solution with craftsmanship and care.
          </Typography>

          {/* Action Buttons */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 3,
              justifyContent: 'center',
              alignItems: 'center',
              mb: 8,
            }}
          >
            <Button
              variant='contained'
              size='large'
              endIcon={<SendIcon />}
              onClick={handleSendMessage}
              sx={{
                px: 4,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: 2,
                minWidth: { xs: '280px', sm: '200px' },
                boxShadow: '0 8px 24px rgba(34, 197, 94, 0.3)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 12px 32px rgba(34, 197, 94, 0.4)',
                },
                transition: 'all 0.3s ease-in-out',
              }}
            >
              Send Message to Team
            </Button>

            <Button
              variant='outlined'
              size='large'
              startIcon={<PlayIcon />}
              onClick={handleViewPortfolio}
              sx={{
                px: 4,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: 2,
                minWidth: { xs: '280px', sm: '200px' },
                borderColor: 'primary.main',
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'primary.50',
                  borderColor: 'primary.main',
                  transform: 'translateY(-1px)',
                },
                transition: 'all 0.3s ease-in-out',
              }}
            >
              View Portfolio
            </Button>
          </Box>

          {/* Statistics */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'center',
              alignItems: 'center',
              gap: { xs: 3, sm: 6, md: 8 },
              pt: 2,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  bgcolor: 'primary.main',
                  borderRadius: '50%',
                }}
              />
              <Typography
                variant='body1'
                sx={{
                  color: 'text.secondary',
                  fontWeight: 500,
                  fontSize: { xs: '0.95rem', sm: '1rem' },
                }}
              >
                2 MVPs launched for paying clients
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  bgcolor: 'primary.main',
                  borderRadius: '50%',
                }}
              />
              <Typography
                variant='body1'
                sx={{
                  color: 'text.secondary',
                  fontWeight: 500,
                  fontSize: { xs: '0.95rem', sm: '1rem' },
                }}
              >
                Founder-led discovery calls
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  bgcolor: 'primary.main',
                  borderRadius: '50%',
                }}
              />
              <Typography
                variant='body1'
                sx={{
                  color: 'text.secondary',
                  fontWeight: 500,
                  fontSize: { xs: '0.95rem', sm: '1rem' },
                }}
              >
                100% Client Satisfaction
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
