'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import {
  Search as SearchIcon,
  Code as CodeIcon,
  TrendingUp as TrendingUpIcon,
} from '@mui/icons-material';

const servicesData = [
  {
    icon: SearchIcon,
    title: 'Strategy Sprint',
    hook: '"Map the what, why, and how."',
    description:
      'Workshops + research to nail your target user, core features, and tech stack. Includes a delivery schedule and investment breakdown you can show stakeholders.',
    color: '#22c55e',
    lightColor: '#dcfce7',
    accent: '#16a34a',
    delay: '0ms',
  },
  {
    icon: CodeIcon,
    title: 'Launch Pad',
    hook: '"Design, develop, and deploy—seamlessly."',
    description:
      'UI/UX design, full-stack development, QA, and cloud deployment wrapped into one transparent sprint cycle. Weekly check-ins ensure zero surprises.',
    color: '#3b82f6',
    lightColor: '#dbeafe',
    accent: '#2563eb',
    delay: '150ms',
  },
  {
    icon: TrendingUpIcon,
    title: 'Momentum Partner',
    hook: '"Iterate, optimize, and grow."',
    description:
      'After launch, we stay on to add features, monitor performance, and tune conversions—keeping your product fresh and competitive. Flexible monthly retainer.',
    color: '#f59e0b',
    lightColor: '#fef3c7',
    accent: '#d97706',
    delay: '300ms',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <Box
      id='services'
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
          backgroundImage: `radial-gradient(circle at 20% 20%, #22c55e 0%, transparent 50%),
                            radial-gradient(circle at 80% 80%, #3b82f6 0%, transparent 50%),
                            radial-gradient(circle at 60% 20%, #f59e0b 0%, transparent 50%)`,
          backgroundSize: '800px 800px',
        }}
      />

      {/* Floating Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: 120,
          height: 120,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #22c55e20, #3b82f620)',
          filter: 'blur(40px)',
          animation: 'float 6s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-20px)' },
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '15%',
          left: '8%',
          width: 80,
          height: 80,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #f59e0b20, #22c55e20)',
          filter: 'blur(30px)',
          animation: 'float 8s ease-in-out infinite reverse',
        }}
      />

      <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 8, md: 12 },
          }}
        >
          <Typography
            variant='h2'
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
              fontWeight: 800,
              background: 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              mb: 4,
              lineHeight: 1.1,
            }}
          >
            Our Services
          </Typography>
          <Typography
            variant='h5'
            sx={{
              fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.5rem' },
              fontWeight: 400,
              color: 'text.secondary',
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Strategy, launch, momentum: the trio that moves you ahead of the
            pack.
          </Typography>
        </Box>

        {/* Services Grid */}
        <Grid
          container
          spacing={{ xs: 3, md: 4 }}
          sx={{ alignItems: 'stretch' }}
        >
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            const isMiddleCard = index === 1;

            return (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    height: '100%',
                    background: 'white',
                    borderRadius: 4,
                    overflow: 'hidden',
                    position: 'relative',
                    border: '1px solid',
                    borderColor: 'grey.100',
                    transform: isMiddleCard
                      ? { md: 'translateY(-20px)' }
                      : 'none',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    animationDelay: service.delay,
                    '&:hover': {
                      transform: isMiddleCard
                        ? { md: 'translateY(-30px) scale(1.02)' }
                        : 'translateY(-8px) scale(1.02)',
                      boxShadow: `0 25px 50px ${service.color}25`,
                      borderColor: service.color,
                      '& .service-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                        bgcolor: service.color,
                      },
                      '& .service-hook': {
                        color: service.accent,
                      },
                    },
                  }}
                >
                  {/* Gradient Top Bar */}
                  <Box
                    sx={{
                      height: 6,
                      background: `linear-gradient(90deg, ${service.color}, ${service.accent})`,
                    }}
                  />

                  {/* Card Content */}
                  <Box sx={{ p: { xs: 4, md: 5 } }}>
                    {/* Icon with Background */}
                    <Box
                      sx={{
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        mb: 4,
                      }}
                    >
                      <Box
                        className='service-icon'
                        sx={{
                          width: 80,
                          height: 80,
                          bgcolor: service.lightColor,
                          borderRadius: 3,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.3s ease-in-out',
                          boxShadow: `0 8px 25px ${service.color}15`,
                        }}
                      >
                        <IconComponent
                          sx={{
                            fontSize: 36,
                            color: service.color,
                          }}
                        />
                      </Box>

                      {/* Floating Number Badge */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: -8,
                          right: '25%',
                          width: 32,
                          height: 32,
                          bgcolor: service.color,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontWeight: 700,
                          fontSize: '0.9rem',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                        }}
                      >
                        {index + 1}
                      </Box>
                    </Box>

                    {/* Title */}
                    <Typography
                      variant='h4'
                      sx={{
                        fontSize: { xs: '1.6rem', md: '1.8rem' },
                        fontWeight: 700,
                        color: 'text.primary',
                        textAlign: 'center',
                        mb: 3,
                        lineHeight: 1.2,
                      }}
                    >
                      {service.title}
                    </Typography>

                    {/* Hook */}
                    <Typography
                      className='service-hook'
                      variant='body1'
                      sx={{
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        color: service.color,
                        textAlign: 'center',
                        mb: 3,
                        fontStyle: 'italic',
                        transition: 'color 0.3s ease-in-out',
                      }}
                    >
                      {service.hook}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant='body1'
                      sx={{
                        fontSize: '1rem',
                        lineHeight: 1.7,
                        color: 'text.secondary',
                        textAlign: 'center',
                      }}
                    >
                      {service.description}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection;
