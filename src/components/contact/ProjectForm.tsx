'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  useTheme,
  Paper,
} from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';

const ProjectForm: React.FC = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectIdea: '',
  });

  useEffect(() => {
    // Check for stored project description
    const storedDescription = localStorage.getItem('projectDescription');
    if (storedDescription) {
      setFormData(prev => ({ ...prev, projectIdea: storedDescription }));
      // Clear the stored description after using it
      localStorage.removeItem('projectDescription');
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <Paper
      elevation={0}
      sx={{
        position: 'relative',
        p: { xs: 3, sm: 4 },
        borderRadius: 4,
        bgcolor: 'background.paper',
        border: `1px solid ${theme.palette.grey[100]}`,
        height: '100%',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 6,
          background: theme =>
            `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 6,
          right: 0,
          width: '30%',
          height: '30%',
          background: theme =>
            `radial-gradient(circle, ${theme.palette.primary.main}10 0%, transparent 70%)`,
          zIndex: 0,
        },
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant='h5'
          sx={{
            fontWeight: 700,
            color: 'text.primary',
            mb: 1,
          }}
        >
          Tell Us About Your Project
        </Typography>

        <Typography
          variant='body2'
          sx={{
            color: 'text.secondary',
            mb: 4,
            maxWidth: '90%',
          }}
        >
          Share your vision with us and let's create something amazing together.
          We're excited to hear about your ideas!
        </Typography>

        <Box
          component='form'
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2.5,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              flexDirection: { xs: 'column', sm: 'row' },
            }}
          >
            <TextField
              required
              fullWidth
              label='Name'
              placeholder='Your full name'
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              sx={{
                '& .MuiOutlinedInput-root': {
                  bgcolor: 'background.default',
                  borderRadius: 2,
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'primary.main',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderWidth: 2,
                  },
                },
              }}
            />
            <TextField
              required
              fullWidth
              label='Email'
              type='email'
              placeholder='your@email.com'
              value={formData.email}
              onChange={e =>
                setFormData({ ...formData, email: e.target.value })
              }
              sx={{
                '& .MuiOutlinedInput-root': {
                  bgcolor: 'background.default',
                  borderRadius: 2,
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'primary.main',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderWidth: 2,
                  },
                },
              }}
            />
          </Box>

          <TextField
            fullWidth
            label='Company'
            placeholder='Your company name'
            value={formData.company}
            onChange={e =>
              setFormData({ ...formData, company: e.target.value })
            }
            sx={{
              '& .MuiOutlinedInput-root': {
                bgcolor: 'background.default',
                borderRadius: 2,
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'primary.main',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderWidth: 2,
                },
              },
            }}
          />

          <TextField
            required
            fullWidth
            multiline
            rows={4}
            label='Project Idea'
            placeholder='Tell us about your project goals, timeline, and any specific requirements...'
            value={formData.projectIdea}
            onChange={e =>
              setFormData({ ...formData, projectIdea: e.target.value })
            }
            sx={{
              '& .MuiOutlinedInput-root': {
                bgcolor: 'background.default',
                borderRadius: 2,
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'primary.main',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderWidth: 2,
                },
              },
            }}
          />

          <Button
            type='submit'
            variant='contained'
            size='large'
            endIcon={<SendIcon />}
            sx={{
              mt: 1,
              py: 1.5,
              px: 4,
              borderRadius: 100,
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
            Send Message
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default ProjectForm;
