'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import {
  CheckCircleOutline as CheckIcon,
  Chat as ChatIcon,
  Code as CodeIcon,
  Palette as DesignIcon,
  Speed as SpeedIcon,
  Search as SeoIcon,
  Support as SupportIcon,
} from '@mui/icons-material';

const includedFeatures = [
  {
    icon: ChatIcon,
    text: 'Discovery workshop to understand your needs',
    color: '#22c55e',
  },
  {
    icon: DesignIcon,
    text: 'Custom design tailored to your brand',
    color: '#3b82f6',
  },
  {
    icon: CodeIcon,
    text: 'Responsive web development',
    color: '#f59e0b',
  },
  {
    icon: SpeedIcon,
    text: 'Content management system',
    color: '#22c55e',
  },
  {
    icon: SeoIcon,
    text: 'Basic SEO optimization',
    color: '#3b82f6',
  },
  {
    icon: SupportIcon,
    text: 'Post-launch support and training',
    color: '#f59e0b',
  },
];

const pricingFeatures = [
  'No fixed packages',
  'Transparent pricing',
  'Flexible payment terms available',
  'Startup-friendly rates',
  'No hidden fees or surprises',
  'Free initial consultation',
];

const Pricing: React.FC = () => {
  return (
    <Box
      id='pricing'
      sx={{
        py: { xs: 10, md: 16 },
        bgcolor: '#ecfdf5',
        position: 'relative',
        overflow: 'hidden',
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
            radial-gradient(circle at 20% 20%, #22c55e 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, #16a34a 0%, transparent 40%)
          `,
          backgroundSize: '100% 100%',
        }}
      />

      <Container
        maxWidth='lg'
        sx={{ position: 'relative', zIndex: 2, px: { xs: 2, sm: 3, md: 4 } }}
      >
        <Grid
          container
          spacing={{ xs: 4, sm: 6, md: 8 }}
          alignItems='flex-start'
        >
          {/* Left side - Text Content */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                pr: { md: 4 },
                textAlign: { xs: 'center', md: 'left' },
                mb: { xs: 4, md: 0 },
              }}
            >
              <Typography
                variant='h2'
                sx={{
                  fontSize: {
                    xs: '2.2rem',
                    sm: '2.5rem',
                    md: '2.8rem',
                    lg: '4rem',
                  },
                  fontWeight: 800,
                  background:
                    'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  mb: 4,
                  lineHeight: 1.2,
                }}
              >
                Affordable Pricing for Startups
              </Typography>
              <Typography
                variant='h5'
                sx={{
                  fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.25rem' },
                  fontWeight: 400,
                  color: 'text.secondary',
                  mb: 4,
                  lineHeight: 1.6,
                }}
              >
                We believe every startup deserves a professional digital
                presence. Our pricing is flexible and negotiable based on your
                specific needs and budget.
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: 'text.secondary',
                  fontStyle: 'italic',
                  mt: 2,
                }}
              >
                Typical projects range from $500 - $5k • Payment plans available
                • 100% satisfaction guarantee
              </Typography>
            </Box>
          </Grid>

          {/* Right side - Pricing Content */}
          <Grid item xs={12} md={7}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 2.5, md: 4 },
                borderRadius: 4,
                bgcolor: 'white',
                border: '1px solid',
                borderColor: 'grey.100',
                boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              <Typography
                variant='h4'
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  textAlign: 'center',
                  color: '#1e293b',
                  fontSize: { xs: '1.75rem', md: '2rem' },
                }}
              >
                Custom Solutions for Your Business
              </Typography>

              <Grid container spacing={3}>
                {/* What's Included Section */}
                <Grid item xs={12}>
                  <Typography
                    variant='h6'
                    sx={{ fontWeight: 600, mb: 2, color: '#1e293b' }}
                  >
                    What's Included:
                  </Typography>
                  <Grid container spacing={2}>
                    {includedFeatures.map((feature, index) => {
                      const IconComponent = feature.icon;
                      return (
                        <Grid item xs={12} sm={6} key={index}>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1.5,
                              p: 1.5,
                              borderRadius: 2,
                              bgcolor: `${feature.color}08`,
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                transform: 'translateX(8px)',
                                bgcolor: `${feature.color}15`,
                              },
                            }}
                          >
                            <IconComponent
                              sx={{ color: feature.color, fontSize: 20 }}
                            />
                            <Typography variant='body2'>
                              {feature.text}
                            </Typography>
                          </Box>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Grid>

                {/* How We Price Section */}
                <Grid item xs={12}>
                  <Typography
                    variant='h6'
                    sx={{ fontWeight: 600, mb: 1, color: '#1e293b' }}
                  >
                    How We Price:
                  </Typography>
                  <Grid container spacing={1}>
                    {pricingFeatures.map((feature, index) => (
                      <Grid item xs={12} sm={6} key={index}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                          }}
                        >
                          <CheckIcon sx={{ color: '#22c55e', fontSize: 20 }} />
                          <Typography variant='body2'>{feature}</Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>

              <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Button
                  variant='contained'
                  size='large'
                  onClick={() => (window.location.href = '/contact')}
                  sx={{
                    py: 2,
                    px: 4,
                    borderRadius: 100,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    background: theme =>
                      `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                    boxShadow: theme =>
                      `0 8px 20px ${theme.palette.primary.main}20`,
                    '&:hover': {
                      background: theme =>
                        `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.dark} 100%)`,
                      transform: 'translateY(-2px)',
                      boxShadow: theme =>
                        `0 10px 24px ${theme.palette.primary.main}30`,
                    },
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  Get Your Custom Quote
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;
