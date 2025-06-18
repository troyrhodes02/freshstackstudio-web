'use client';

import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import {
  Search as ExploreIcon,
  Palette as DesignIcon,
  Code as BuildIcon,
  Refresh as IterateIcon,
  Headphones as SupportIcon,
} from '@mui/icons-material';

const processSteps = [
  {
    icon: ExploreIcon,
    title: 'Explore',
    description:
      'Discovery sessions to learn about your business goals and define a clear path to success together.',
    color: '#22c55e',
  },
  {
    icon: DesignIcon,
    title: 'Design',
    description:
      'User-centric design for experiences that look great and drive results. One-of-a-kind, every time.',
    color: '#16a34a',
  },
  {
    icon: BuildIcon,
    title: 'Build',
    description:
      'We develop robust and scalable solutions using the latest full-stack technologies—always made for your needs.',
    color: '#22c55e',
  },
  {
    icon: IterateIcon,
    title: 'Iterate',
    description:
      'Refine, test, and polish through close collaboration. We keep you in the loop and adapt until it is perfect.',
    color: '#16a34a',
  },
  {
    icon: SupportIcon,
    title: 'Support',
    description:
      "Post-launch support and insights to keep your project fresh and growing. Our partnership doesn't end at launch.",
    color: '#22c55e',
  },
];

const HowWeWork: React.FC = () => {
  return (
    <Box
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
          backgroundImage: `radial-gradient(circle at 80% 20%, #22c55e 0%, transparent 50%),
                          radial-gradient(circle at 20% 80%, #16a34a 0%, transparent 50%)`,
          backgroundSize: '800px 800px',
        }}
      />

      <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
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
              background: 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              mb: 3,
            }}
          >
            How We Work
          </Typography>
          <Typography
            variant='h5'
            sx={{
              fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.25rem' },
              fontWeight: 400,
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            The FreshStack process blends clarity, craft, and
            collaboration—bringing your ideas to life, step by step.
          </Typography>
        </Box>

        {/* Process Steps */}
        <Grid container spacing={{ xs: 4, md: 2 }} alignItems='stretch'>
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Grid item xs={12} md={2.4} key={index}>
                <Box
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: { xs: 'row', md: 'column' },
                    alignItems: { xs: 'flex-start', md: 'center' },
                    textAlign: { xs: 'left', md: 'center' },
                    position: 'relative',
                    p: { xs: 2, md: 3 },
                    gap: { xs: 2, md: 0 },
                  }}
                >
                  {/* Icon Circle */}
                  <Box
                    sx={{
                      width: { xs: 50, md: 80 },
                      height: { xs: 50, md: 80 },
                      borderRadius: '50%',
                      bgcolor: `${step.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: { xs: 0, md: 3 },
                      flexShrink: 0,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.1) rotate(5deg)',
                        bgcolor: `${step.color}25`,
                      },
                    }}
                  >
                    <IconComponent
                      sx={{
                        fontSize: { xs: 24, md: 36 },
                        color: step.color,
                      }}
                    />
                  </Box>

                  {/* Text Content */}
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant='h6'
                      sx={{
                        fontSize: { xs: '1.1rem', md: '1.25rem' },
                        fontWeight: 700,
                        mb: { xs: 1, md: 2 },
                        color: 'text.primary',
                      }}
                    >
                      {step.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: { xs: '0.9rem', md: '1rem' },
                        color: 'text.secondary',
                        lineHeight: { xs: 1.5, md: 1.7 },
                        maxWidth: { xs: 'none', md: '300px' },
                        mx: { xs: 0, md: 'auto' },
                      }}
                    >
                      {step.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default HowWeWork;
