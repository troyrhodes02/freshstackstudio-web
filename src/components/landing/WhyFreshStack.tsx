'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import {
  AutoAwesome as InnovationIcon,
  Psychology as ExpertiseIcon,
  TrendingUp as GrowthIcon,
} from '@mui/icons-material';

const valueProps = [
  {
    icon: InnovationIcon,
    title: 'Innovation First',
    description:
      'We stay ahead of tech trends to deliver cutting-edge solutions.',
    color: '#22c55e',
  },
  {
    icon: ExpertiseIcon,
    title: 'Technical Excellence',
    description: 'Deep expertise combined with clear communication.',
    color: '#3b82f6',
  },
  {
    icon: GrowthIcon,
    title: 'Results Driven',
    description: 'Focused on delivering measurable business impact.',
    color: '#f59e0b',
  },
];

const WhyFreshStack: React.FC = () => {
  return (
    <Box
      id='about'
      sx={{
        py: { xs: 10, md: 16 },
        bgcolor: 'white',
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
          backgroundImage: `radial-gradient(circle at 80% 20%, #22c55e 0%, transparent 50%),
                          radial-gradient(circle at 20% 80%, #3b82f6 0%, transparent 50%),
                          radial-gradient(circle at 50% 50%, #f59e0b 0%, transparent 50%)`,
          backgroundSize: '800px 800px',
        }}
      />

      <Container
        maxWidth='lg'
        sx={{ position: 'relative', zIndex: 2, px: { xs: 2, sm: 3, md: 4 } }}
      >
        <Grid container spacing={{ xs: 4, sm: 6, md: 8 }} alignItems='center'>
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
                  maxWidth: { xs: '100%', sm: '600px', md: '100%' },
                  mx: { xs: 'auto', md: 0 },
                  whiteSpace: 'normal',
                  hyphens: 'none',
                  wordBreak: 'normal',
                }}
              >
                Why FreshStack Studio?
              </Typography>
              <Typography
                variant='h5'
                sx={{
                  fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.25rem' },
                  fontWeight: 400,
                  color: 'text.secondary',
                  mb: 4,
                  lineHeight: 1.6,
                  maxWidth: { xs: '100%', sm: '600px', md: '100%' },
                  mx: { xs: 'auto', md: 0 },
                }}
              >
                Founded by developers and a communications expert who believe in
                bringing a fresh perspective to full-stack development. We
                combine technical excellence with clear communication to deliver
                technical products that truly serve your business.
              </Typography>
            </Box>
          </Grid>

          {/* Right side - Value Props Cards */}
          <Grid item xs={12} md={7}>
            <Grid container spacing={{ xs: 2, sm: 3 }}>
              {valueProps.map((prop, index) => {
                const IconComponent = prop.icon;
                return (
                  <Grid item xs={12} key={index}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        height: '100%',
                        border: '1px solid',
                        borderColor: 'grey.100',
                        borderRadius: 4,
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 3,
                        '&:hover': {
                          transform: 'translateX(8px)',
                          boxShadow: `0 20px 40px ${prop.color}15`,
                          borderColor: prop.color,
                          '& .value-icon': {
                            transform: 'scale(1.1) rotate(5deg)',
                            color: 'white',
                            bgcolor: prop.color,
                          },
                        },
                      }}
                    >
                      <Box
                        className='value-icon'
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: 2,
                          bgcolor: `${prop.color}15`,
                          color: prop.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.3s ease',
                          flexShrink: 0,
                        }}
                      >
                        <IconComponent sx={{ fontSize: 30 }} />
                      </Box>
                      <Box>
                        <Typography
                          variant='h6'
                          sx={{
                            fontWeight: 700,
                            mb: 1,
                          }}
                        >
                          {prop.title}
                        </Typography>
                        <Typography
                          variant='body1'
                          sx={{
                            color: 'text.secondary',
                            lineHeight: 1.7,
                          }}
                        >
                          {prop.description}
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>

        {/* CTA Button */}
        <Box sx={{ textAlign: 'center', mt: { xs: 6, md: 8 } }}>
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
              boxShadow: theme => `0 8px 20px ${theme.palette.primary.main}20`,
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
            Let's Build Something Great
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default WhyFreshStack;
