'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Avatar } from '@mui/material';
import {
  Code as CodeIcon,
  Terminal as TerminalIcon,
  Forum as ForumIcon,
} from '@mui/icons-material';

const teamData = [
  {
    name: 'William Rhodes',
    role: 'Lead Software Engineer',
    icon: TerminalIcon,
    color: '#8b5cf6',
    lightColor: '#ede9fe',
    accent: '#7c3aed',
    delay: '0ms',
  },
  {
    name: 'Xzavier Washington',
    role: 'Full-Stack Software Engineer',
    icon: CodeIcon,
    color: '#3b82f6',
    lightColor: '#dbeafe',
    accent: '#2563eb',
    delay: '150ms',
  },
  {
    name: 'Jessica Benton',
    role: 'Communications Lead',
    icon: ForumIcon,
    color: '#f59e0b',
    lightColor: '#fef3c7',
    accent: '#d97706',
    delay: '300ms',
  },
];

const MeetTheTeam: React.FC = () => {
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
                          radial-gradient(circle at 20% 80%, #3b82f6 0%, transparent 50%),
                          radial-gradient(circle at 50% 50%, #f59e0b 0%, transparent 50%)`,
          backgroundSize: '800px 800px',
        }}
      />

      <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={8}>
          {/* Text Content - Full width on mobile, right side on desktop */}
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              order: { xs: 1, md: 2 },
              mb: { xs: 4, md: 0 },
            }}
          >
            <Box sx={{ pl: { md: 4 } }}>
              <Typography
                variant='h2'
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                  fontWeight: 800,
                  background:
                    'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  mb: 4,
                  lineHeight: 1.1,
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                Meet the Team
              </Typography>
              <Typography
                variant='h5'
                sx={{
                  fontSize: { xs: '1.2rem', sm: '1.4rem' },
                  fontWeight: 400,
                  color: 'text.secondary',
                  lineHeight: 1.6,
                  textAlign: { xs: 'center', md: 'left' },
                  maxWidth: { xs: '600px', md: 'none' },
                  mx: { xs: 'auto', md: 0 },
                }}
              >
                Our team of passionate experts is committed to bringing your
                technical vision to life. With deep technical expertise and
                clear communication, we're here to transform your ideas into
                reality.
              </Typography>
            </Box>
          </Grid>

          {/* Team Members - Full width on mobile, left side on desktop */}
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              order: { xs: 2, md: 1 },
            }}
          >
            <Grid container spacing={4}>
              {teamData.map((member, index) => {
                const IconComponent = member.icon;
                return (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Box
                      sx={{
                        height: '100%',
                        textAlign: 'center',
                        position: 'relative',
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          '& .member-avatar': {
                            transform: 'scale(1.05)',
                            boxShadow: `0 20px 40px ${member.color}30`,
                          },
                          '& .member-icon': {
                            bgcolor: member.color,
                            color: 'white',
                            transform: 'scale(1.1) rotate(10deg)',
                          },
                        },
                      }}
                    >
                      {/* Avatar */}
                      <Box
                        sx={{
                          position: 'relative',
                          display: 'inline-block',
                          mb: 2,
                        }}
                      >
                        <Avatar
                          className='member-avatar'
                          sx={{
                            width: { xs: 140, sm: 160, md: 180 },
                            height: { xs: 140, sm: 160, md: 180 },
                            bgcolor: member.lightColor,
                            transition: 'all 0.3s ease-in-out',
                            boxShadow: `0 12px 30px ${member.color}20`,
                            fontSize: '3rem',
                            fontWeight: 600,
                          }}
                        >
                          {member.name.charAt(0)}
                        </Avatar>
                        {/* Icon Badge */}
                        <Box
                          className='member-icon'
                          sx={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            bgcolor: member.lightColor,
                            borderRadius: '50%',
                            width: 45,
                            height: 45,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease-in-out',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                          }}
                        >
                          <IconComponent
                            sx={{ fontSize: 22, color: member.color }}
                          />
                        </Box>
                      </Box>

                      {/* Name */}
                      <Typography
                        variant='h6'
                        sx={{
                          fontWeight: 700,
                          color: 'text.primary',
                          mb: 1,
                          fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                        }}
                      >
                        {member.name}
                      </Typography>

                      {/* Role */}
                      <Typography
                        variant='subtitle1'
                        sx={{
                          fontWeight: 600,
                          color: member.color,
                          fontSize: {
                            xs: '0.875rem',
                            sm: '0.9rem',
                            md: '1rem',
                          },
                        }}
                      >
                        {member.role}
                      </Typography>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MeetTheTeam;
