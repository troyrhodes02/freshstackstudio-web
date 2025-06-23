'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Project } from '@/types/project';
import projectsData from '@/data/projects.json';
import {
  OpenInNew as OpenInNewIcon,
  Construction as ConstructionIcon,
} from '@mui/icons-material';
import Link from 'next/link';

const projects: Project[] = projectsData.projects;

// Create placeholder projects to fill the row if needed
const totalCards = Math.ceil(projects.length / 3) * 3;
const placeholderCount = totalCards - projects.length;
const allProjects = [
  ...projects,
  ...Array(placeholderCount).fill({
    title: 'Coming Soon',
    description: 'Our next exciting project is in the works. Stay tuned!',
    category: 'Future Project',
    url: '#',
    technologies: ['TBD'],
  }),
];

const PortfolioGrid = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
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

      <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4}>
          {allProjects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ height: '100%' }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    overflow: 'hidden',
                    bgcolor:
                      index >= projects.length
                        ? 'rgba(255, 255, 255, 0.7)'
                        : 'background.paper',
                    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform:
                        index >= projects.length ? 'none' : 'translateY(-8px)',
                      boxShadow:
                        index >= projects.length
                          ? '0 4px 24px rgba(0, 0, 0, 0.06)'
                          : '0 20px 40px rgba(0, 0, 0, 0.12)',
                      '& .project-image': {
                        transform:
                          index >= projects.length ? 'none' : 'scale(1.05)',
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      paddingTop: '60%',
                      overflow: 'hidden',
                    }}
                  >
                    {index >= projects.length ? (
                      // Coming Soon Design
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
                          background:
                            'linear-gradient(135deg, #fef9c3 0%, #fde047 100%)',
                          p: 3,
                        }}
                      >
                        <motion.div
                          animate={{
                            rotate: [-5, 5, -5],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        >
                          <ConstructionIcon
                            sx={{
                              fontSize: 80,
                              color: '#1e293b',
                              opacity: 0.9,
                            }}
                          />
                        </motion.div>
                      </Box>
                    ) : (
                      <CardMedia
                        component='img'
                        image={project.image}
                        alt={project.title}
                        className='project-image'
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.6s ease-in-out',
                        }}
                      />
                    )}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        left: 16,
                        bgcolor: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: 2,
                        px: 2,
                        py: 1,
                        backdropFilter: 'blur(4px)',
                      }}
                    >
                      <Typography
                        variant='caption'
                        sx={{
                          color: 'primary.main',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: 1,
                        }}
                      >
                        {project.category}
                      </Typography>
                    </Box>
                  </Box>

                  <CardContent
                    sx={{
                      p: 4,
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        mb: 2,
                      }}
                    >
                      <Typography
                        variant='h5'
                        component='h3'
                        gutterBottom
                        fontWeight='700'
                        sx={{
                          opacity: index >= projects.length ? 0.7 : 1,
                        }}
                      >
                        {project.title}
                      </Typography>
                      {index < projects.length && (
                        <Link
                          href={project.url}
                          target='_blank'
                          style={{ textDecoration: 'none' }}
                        >
                          <IconButton
                            size='small'
                            sx={{
                              bgcolor: 'primary.main',
                              color: 'white',
                              '&:hover': {
                                bgcolor: 'primary.dark',
                              },
                            }}
                          >
                            <OpenInNewIcon fontSize='small' />
                          </IconButton>
                        </Link>
                      )}
                    </Box>

                    <Typography
                      variant='body1'
                      color='text.secondary'
                      paragraph
                      sx={{
                        flexGrow: 1,
                        opacity: index >= projects.length ? 0.7 : 1,
                      }}
                    >
                      {project.description}
                    </Typography>

                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1,
                        mt: 'auto',
                      }}
                    >
                      {project.technologies.map(
                        (tech: string, techIndex: number) => (
                          <Chip
                            key={techIndex}
                            label={tech}
                            size='small'
                            sx={{
                              bgcolor:
                                index >= projects.length
                                  ? 'rgba(34, 197, 94, 0.08)'
                                  : '#22c55e15',
                              color:
                                index >= projects.length
                                  ? 'rgba(22, 163, 74, 0.7)'
                                  : '#16a34a',
                              fontWeight: 500,
                              '&:hover': {
                                bgcolor:
                                  index >= projects.length
                                    ? 'rgba(34, 197, 94, 0.08)'
                                    : '#22c55e20',
                              },
                            }}
                          />
                        )
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PortfolioGrid;
