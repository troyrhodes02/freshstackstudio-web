'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  IconButton,
} from '@mui/material';
import { Launch as LaunchIcon, Code as CodeIcon } from '@mui/icons-material';
import Image from 'next/image';
import projectsData from '@/data/projects.json';
import { Project } from '@/types/project';

const projects: Project[] = projectsData.projects;

const RecentProjects: React.FC = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
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
            Recent Projects
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
            See how we've helped others build, launch, and grow with FreshStack.
          </Typography>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={{ xs: 3, md: 4 }} alignItems='stretch'>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 2,
                  transition: 'all 0.3s ease-in-out',
                  border: '1px solid',
                  borderColor: 'grey.100',
                  bgcolor: 'white',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    '& .launch-icon': {
                      transform: 'rotate(45deg)',
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    height: 200,
                    bgcolor: 'grey.100',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: 0,
                  }}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes='(max-width: 768px) 100vw, 50vw'
                      priority={index === 0}
                    />
                  ) : (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: `${index === 0 ? '#8b5cf615' : '#3b82f615'}`,
                      }}
                    >
                      <CodeIcon
                        sx={{
                          fontSize: 60,
                          color: index === 0 ? '#8b5cf6' : '#3b82f6',
                        }}
                      />
                    </Box>
                  )}
                </Box>

                <CardContent sx={{ p: 3, flexGrow: 1 }}>
                  <Box sx={{ mb: 2 }}>
                    <Chip
                      label={project.category}
                      size='small'
                      sx={{
                        bgcolor: index === 0 ? '#8b5cf610' : '#3b82f610',
                        color: index === 0 ? '#8b5cf6' : '#3b82f6',
                        fontWeight: 600,
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      mb: 2,
                    }}
                  >
                    <Typography variant='h5' sx={{ fontWeight: 700, mb: 2 }}>
                      {project.title}
                    </Typography>
                    <IconButton
                      component='a'
                      href={project.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='launch-icon'
                      sx={{
                        color: index === 0 ? '#8b5cf6' : '#3b82f6',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <LaunchIcon />
                    </IconButton>
                  </Box>

                  <Typography
                    variant='body1'
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.7,
                    }}
                  >
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* View Full Portfolio Button */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: { xs: 6, md: 8 },
          }}
        >
          <Box
            component='a'
            href='/portfolio'
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 4,
              py: 2,
              borderRadius: 2,
              bgcolor: '#8b5cf6',
              color: 'white',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: '#7c3aed',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 20px rgba(139, 92, 246, 0.3)',
                '& .arrow-icon': {
                  transform: 'translateX(4px)',
                },
              },
            }}
          >
            View Full Portfolio
            <LaunchIcon
              className='arrow-icon'
              sx={{
                fontSize: 20,
                transition: 'transform 0.3s ease',
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default RecentProjects;
