'use client';

import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Send as SendIcon, PlayArrow as PlayIcon } from '@mui/icons-material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const HeroSection: React.FC = () => {
  const router = useRouter();
  const handleSendMessage = () => {
    // Navigate to contact section
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewPortfolio = () => {
    router.push('/portfolio');
  };

  return (
    <Box
      id='home'
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        bgcolor: 'background.paper',
        pt: { xs: 10, sm: 11, md: 12, lg: 13 },
        pb: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Logo Design */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '500px', sm: '600px', md: '750px', lg: '900px' },
          height: { xs: '500px', sm: '600px', md: '750px', lg: '900px' },
          opacity: 0.12,
          zIndex: 1,
        }}
      >
        <Image
          src='/logos/freshstack-logo.png'
          alt='FreshStack Studio Background'
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </Box>

      {/* Additional decorative logos for cool effect */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: { xs: '120px', sm: '140px', md: '160px' },
          height: { xs: '120px', sm: '140px', md: '160px' },
          opacity: 0.06,
          zIndex: 1,
          transform: 'rotate(15deg)',
        }}
      >
        <Image
          src='/logos/freshstack-logo.png'
          alt='FreshStack Studio Decoration'
          fill
          style={{ objectFit: 'contain' }}
        />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          bottom: '15%',
          left: '8%',
          width: { xs: '90px', sm: '110px', md: '130px' },
          height: { xs: '90px', sm: '110px', md: '130px' },
          opacity: 0.05,
          zIndex: 1,
          transform: 'rotate(-20deg)',
        }}
      >
        <Image
          src='/logos/freshstack-logo.png'
          alt='FreshStack Studio Decoration'
          fill
          style={{ objectFit: 'contain' }}
        />
      </Box>

      <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 2 }}>
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
            .{' '}
            <Box
              component='span'
              sx={{
                display: 'block',
              }}
            >
              Scale Fast.
            </Box>
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
            technical products—guiding every client from concept sketch to
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
                3 MVPs launched for paying clients
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
