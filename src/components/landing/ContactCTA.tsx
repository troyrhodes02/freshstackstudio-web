'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  TextField,
  Grid,
} from '@mui/material';
import Image from 'next/image';
import {
  Send as SendIcon,
  Email as EmailIcon,
  AccessTime as TimeIcon,
} from '@mui/icons-material';

const ContactCTA: React.FC = () => {
  return (
    <Box
      id='contact'
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
          backgroundImage: `
            radial-gradient(circle at 20% 20%, #22c55e 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, #3b82f6 0%, transparent 40%)
          `,
          backgroundSize: '100% 100%',
        }}
      />

      <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 2 }}>
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography
            variant='h2'
            sx={{
              fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
              fontWeight: 800,
              background: 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              mb: 2,
            }}
          >
            Ready to Get Started?
          </Typography>
          <Typography
            variant='h5'
            sx={{
              fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.25rem' },
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Let's discuss your project and see how we can help turn your ideas
            into reality.
          </Typography>
        </Box>

        {/* Contact Card */}
        <Grid container spacing={4} justifyContent='center'>
          <Grid item xs={12} md={8} lg={7}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 4, md: 5 },
                borderRadius: 4,
                bgcolor: 'white',
                border: '1px solid',
                borderColor: 'grey.100',
                boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
              }}
            >
              {/* Message Form */}
              <Box sx={{ mb: 4 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    mb: 3,
                  }}
                >
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: '50%',
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
                  <Box>
                    <Typography
                      variant='h6'
                      sx={{ fontWeight: 700, color: '#1e293b' }}
                    >
                      Send Us a Message
                    </Typography>
                    <Typography
                      variant='body2'
                      sx={{ color: 'text.secondary', mt: 0.5 }}
                    >
                      Tell us about your project idea and we'll get back to you
                      within 24 hours with next steps.
                    </Typography>
                  </Box>
                </Box>

                <TextField
                  multiline
                  rows={4}
                  fullWidth
                  placeholder='Describe your project idea, timeline, and budget...'
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      bgcolor: '#f8fafc',
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#22c55e',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#22c55e',
                      },
                    },
                  }}
                />

                <Box sx={{ textAlign: 'center', mt: 2 }}>
                  <Button
                    variant='contained'
                    size='large'
                    startIcon={<SendIcon />}
                    sx={{
                      bgcolor: '#22c55e',
                      color: 'white',
                      borderRadius: 100,
                      px: 4,
                      py: 1.5,
                      '&:hover': {
                        bgcolor: '#16a34a',
                      },
                    }}
                  >
                    Start Your Project
                  </Button>
                </Box>
              </Box>

              {/* Contact Info */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 3,
                  pt: 3,
                  borderTop: '1px solid',
                  borderColor: 'grey.100',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <EmailIcon sx={{ color: '#3b82f6' }} />
                  <Box>
                    <Typography
                      variant='body2'
                      sx={{ color: 'text.secondary' }}
                    >
                      Email
                    </Typography>
                    <Typography sx={{ color: '#3b82f6', fontWeight: 500 }}>
                      hello@freshstackstudio.dev
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <TimeIcon sx={{ color: '#22c55e' }} />
                  <Box>
                    <Typography
                      variant='body2'
                      sx={{ color: 'text.secondary' }}
                    >
                      Response Time
                    </Typography>
                    <Typography sx={{ color: '#1e293b', fontWeight: 500 }}>
                      Within 24 hours
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactCTA;
