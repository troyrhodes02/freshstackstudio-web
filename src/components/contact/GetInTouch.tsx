'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
  Paper,
} from '@mui/material';
import {
  Email as EmailIcon,
  AccessTime as TimeIcon,
  CheckCircle as StatusIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
} from '@mui/icons-material';
import ProjectForm from './ProjectForm';

const GetInTouch: React.FC = () => {
  const theme = useTheme();

  const contactInfo = [
    {
      icon: EmailIcon,
      title: 'Email',
      content: 'freshstackstudio.projects@gmail.com',
      link: 'mailto:freshstackstudio.projects@gmail.com',
    },
    {
      icon: TimeIcon,
      title: 'Response Time',
      content: 'Within 48 hours',
    },
    {
      icon: StatusIcon,
      title: 'Status',
      content: 'Available for new projects',
    },
  ];

  const socialLinks = [
    { icon: LinkedInIcon, href: '#', label: 'LinkedIn' },
    { icon: InstagramIcon, href: '#', label: 'Instagram' },
    { icon: TwitterIcon, href: '#', label: 'Twitter' },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        bgcolor: '#ecfdf5',
      }}
    >
      <Container maxWidth='lg'>
        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <ProjectForm />
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={5}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 4 },
                borderRadius: 4,
                bgcolor: 'background.default',
                border: `1px solid ${theme.palette.grey[100]}`,
                height: '100%',
              }}
            >
              <Typography
                variant='h5'
                sx={{
                  fontWeight: 700,
                  color: 'text.primary',
                  mb: 4,
                }}
              >
                Get in Touch
              </Typography>

              <Box sx={{ mb: 4 }}>
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 2,
                        mb: index < contactInfo.length - 1 ? 3 : 0,
                      }}
                    >
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: `${theme.palette.primary.main}10`,
                          color: 'primary.main',
                          flexShrink: 0,
                        }}
                      >
                        <IconComponent />
                      </Box>
                      <Box>
                        <Typography
                          variant='subtitle2'
                          sx={{
                            color: 'text.secondary',
                            mb: 0.5,
                          }}
                        >
                          {info.title}
                        </Typography>
                        {info.link ? (
                          <Typography
                            component='a'
                            href={info.link}
                            sx={{
                              color: 'primary.main',
                              textDecoration: 'none',
                              fontWeight: 500,
                              wordBreak: 'break-word',
                              display: 'block',
                              '&:hover': {
                                textDecoration: 'underline',
                              },
                            }}
                          >
                            {info.content}
                          </Typography>
                        ) : (
                          <Typography
                            sx={{
                              color: 'text.primary',
                              fontWeight: 500,
                            }}
                          >
                            {info.content}
                          </Typography>
                        )}
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              {/* Social Links */}
              <Box>
                <Typography
                  variant='subtitle2'
                  sx={{
                    color: 'text.secondary',
                    mb: 2,
                  }}
                >
                  Follow Us
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    gap: 1.5,
                  }}
                >
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <Box
                        key={index}
                        component='a'
                        href={social.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: 'background.paper',
                          color: 'text.secondary',
                          border: `1px solid ${theme.palette.grey[100]}`,
                          transition: 'all 0.2s ease-in-out',
                          '&:hover': {
                            bgcolor: 'primary.main',
                            color: 'white',
                            transform: 'translateY(-2px)',
                          },
                        }}
                      >
                        <IconComponent />
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default GetInTouch;
