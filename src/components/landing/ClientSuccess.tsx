'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  IconButton,
  Chip,
} from '@mui/material';
import {
  Star as StarIcon,
  NavigateBefore as PrevIcon,
  NavigateNext as NextIcon,
  FormatQuote as QuoteIcon,
} from '@mui/icons-material';

interface ClientStory {
  id: number;
  name: string;
  role: string;
  company: string;
  testimonial: string;
  rating: number;
  projectType: string;
}

const clientStories: ClientStory[] = [
  {
    id: 1,
    name: 'Alyssa Rodriguez',
    role: 'Founder & CEO',
    company: 'YOUNGSTARWORLD',
    testimonial:
      'FreshStack Studio brought our vision to life with incredible attention to detail. Their team created an engaging e-commerce platform that resonates with our fashion-forward audience while maintaining the professional edge we needed. The seamless shopping experience and interactive features have significantly boosted our sales and user engagement.',
    rating: 5,
    projectType: 'E-commerce Platform',
  },
  {
    id: 2,
    name: 'Michael Littlejohn',
    role: 'Founder & CEO',
    company: 'MWL Business Consulting',
    testimonial:
      'Working with FreshStack was a game-changer for our consulting firm. They developed a sophisticated digital presence that elevated our brand and helped us better serve our clients. Their technical expertise combined with business acumen made the entire process smooth and effective.',
    rating: 5,
    projectType: 'Business Consulting Website',
  },
];

const ClientSuccess: React.FC = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentStory(prev => (prev + 1) % clientStories.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);

    return () => clearInterval(interval);
  }, [currentStory, handleNext]);

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentStory(prev => (prev === 0 ? clientStories.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const currentClient = clientStories[currentStory];

  return (
    <Box
      sx={{
        py: { xs: 10, md: 16 },
        bgcolor: '#f8fafc',
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
          opacity: 0.04,
          backgroundImage: `
            radial-gradient(circle at 20% 20%, #22c55e 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, #3b82f6 0%, transparent 40%)
          `,
          backgroundSize: '100% 100%',
        }}
      />

      <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
          <Typography
            variant='h2'
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
              fontWeight: 800,
              background: 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              mb: 3,
            }}
          >
            Client Success Stories
          </Typography>
          <Typography
            variant='h5'
            sx={{
              fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.25rem' },
              fontWeight: 400,
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            See how we've helped our clients transform their ideas into
            impactful solutions.
          </Typography>
        </Box>

        {/* Testimonial Card */}
        <Box
          sx={{
            maxWidth: '800px',
            mx: 'auto',
            position: 'relative',
          }}
        >
          <Paper
            elevation={0}
            sx={{
              position: 'relative',
              p: { xs: 3, md: 5 },
              borderRadius: 4,
              bgcolor: 'white',
              boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
              border: '1px solid',
              borderColor: 'grey.100',
              transition: 'all 0.5s ease',
              opacity: isAnimating ? 0.5 : 1,
              transform: isAnimating ? 'scale(0.98)' : 'scale(1)',
            }}
          >
            {/* Quote Icons */}
            <QuoteIcon
              sx={{
                position: 'absolute',
                top: { xs: 16, md: 24 },
                left: { xs: 16, md: 24 },
                fontSize: { xs: 32, md: 40 },
                color: '#22c55e15',
                transform: 'rotate(180deg)',
              }}
            />
            <QuoteIcon
              sx={{
                position: 'absolute',
                bottom: { xs: 16, md: 24 },
                right: { xs: 16, md: 24 },
                fontSize: { xs: 32, md: 40 },
                color: '#22c55e15',
              }}
            />

            {/* Project Type */}
            <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
              <Chip
                label={currentClient.projectType}
                sx={{
                  bgcolor: '#22c55e15',
                  color: '#22c55e',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  py: 1.5,
                  px: 2,
                  height: 'auto',
                  borderRadius: '100px',
                }}
              />
            </Box>

            {/* Rating */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 0.5,
                mb: 3,
              }}
            >
              {[...Array(currentClient.rating)].map((_, index) => (
                <StarIcon
                  key={index}
                  sx={{
                    color: '#fbbf24',
                    fontSize: { xs: 24, md: 28 },
                  }}
                />
              ))}
            </Box>

            {/* Testimonial */}
            <Typography
              variant='body1'
              sx={{
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.7,
                color: 'text.primary',
                textAlign: 'center',
                mb: 4,
                px: { xs: 2, md: 6 },
                position: 'relative',
                zIndex: 1,
                minHeight: { xs: '160px', md: '140px' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              "{currentClient.testimonial}"
            </Typography>

            {/* Client Info */}
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant='h6'
                sx={{
                  fontSize: { xs: '1.1rem', md: '1.2rem' },
                  fontWeight: 700,
                  color: 'text.primary',
                  mb: 0.5,
                }}
              >
                {currentClient.name}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  color: 'text.secondary',
                  fontWeight: 500,
                }}
              >
                {currentClient.role} at {currentClient.company}
              </Typography>
            </Box>
          </Paper>

          {/* Navigation Controls */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: { xs: 0, md: -24 },
              right: { xs: 0, md: -24 },
              display: 'flex',
              justifyContent: 'space-between',
              transform: 'translateY(-50%)',
              px: { xs: 2, md: 0 },
              zIndex: 2,
            }}
          >
            <IconButton
              onClick={handlePrevious}
              sx={{
                bgcolor: 'white',
                width: { xs: 36, md: 48 },
                height: { xs: 36, md: 48 },
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                '&:hover': {
                  bgcolor: 'grey.50',
                  transform: 'scale(1.1)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <PrevIcon sx={{ fontSize: { xs: 20, md: 24 } }} />
            </IconButton>
            <IconButton
              onClick={handleNext}
              sx={{
                bgcolor: 'white',
                width: { xs: 36, md: 48 },
                height: { xs: 36, md: 48 },
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                '&:hover': {
                  bgcolor: 'grey.50',
                  transform: 'scale(1.1)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <NextIcon sx={{ fontSize: { xs: 20, md: 24 } }} />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ClientSuccess;
