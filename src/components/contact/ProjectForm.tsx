'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  useTheme,
  Paper,
  Alert,
  Snackbar,
} from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';
import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

const ProjectForm: React.FC = () => {
  const theme = useTheme();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState<{
    open: boolean;
    message: string;
    severity: 'success' | 'error';
  }>({
    open: false,
    message: '',
    severity: 'success',
  });

  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    company: 'Independent',
    project_idea: '',
    honeypot: '',
    source_url: '',
    submitted_at: '',
  });

  useEffect(() => {
    // Check for stored project description
    const storedDescription = localStorage.getItem('projectDescription');
    if (storedDescription) {
      setFormData(prev => ({ ...prev, project_idea: storedDescription }));
      // Clear the stored description after using it
      localStorage.removeItem('projectDescription');
    }
  }, []);

  const validateForm = () => {
    if (!formData.from_name.trim()) {
      setAlert({
        open: true,
        message: 'Please enter your name',
        severity: 'error',
      });
      return false;
    }

    if (!formData.reply_to.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.reply_to)) {
      setAlert({
        open: true,
        message: 'Please enter a valid email address',
        severity: 'error',
      });
      return false;
    }

    if (formData.project_idea.length < 20) {
      setAlert({
        open: true,
        message: 'Please provide more details about your project (at least 20 characters)',
        severity: 'error',
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current || isSubmitting) return;

    // Check for honeypot
    if (formData.honeypot) {
      // Silently succeed without sending
      setAlert({
        open: true,
        message: 'Message sent successfully!',
        severity: 'success',
      });
      setFormData({
        from_name: '',
        reply_to: '',
        company: 'Independent',
        project_idea: '',
        honeypot: '',
        source_url: '',
        submitted_at: '',
      });
      return;
    }

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Set hidden fields
    const submissionData = {
      ...formData,
      source_url: window.location.href,
      submitted_at: new Date().toLocaleString(),
    };

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setAlert({
        open: true,
        message: 'Message sent successfully!',
        severity: 'success',
      });

      // Reset form
      setFormData({
        from_name: '',
        reply_to: '',
        company: 'Independent',
        project_idea: '',
        honeypot: '',
        source_url: window.location.href,
        submitted_at: new Date().toLocaleString(),
      });
    } catch (error) {
      setAlert({
        open: true,
        message: 'Failed to send message. Please try again.',
        severity: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
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
          ref={formRef}
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
              name="from_name"
              label='Name'
              placeholder='Your full name'
              value={formData.from_name}
              onChange={e => setFormData({ ...formData, from_name: e.target.value })}
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
              name="reply_to"
              label='Email'
              type='email'
              placeholder='your@email.com'
              value={formData.reply_to}
              onChange={e =>
                setFormData({ ...formData, reply_to: e.target.value })
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
            name="company"
            label='Company'
            placeholder='Your company name'
            value={formData.company}
            onChange={e => setFormData({ ...formData, company: e.target.value || 'Independent' })}
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
            name="project_idea"
            label='Project Idea'
            placeholder='Tell us about your project goals, timeline, and any specific requirements...'
            value={formData.project_idea}
            onChange={e =>
              setFormData({ ...formData, project_idea: e.target.value })
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

          {/* Hidden Fields */}
          <input
            type="hidden"
            name="source_url"
            value={window.location.href}
          />
          <input
            type="hidden"
            name="submitted_at"
            value={new Date().toLocaleString()}
          />
          
          {/* Honeypot field */}
          <TextField
            sx={{ display: 'none' }}
            name="honeypot"
            value={formData.honeypot}
            onChange={e => setFormData({ ...formData, honeypot: e.target.value })}
          />

          <Button
            type='submit'
            variant='contained'
            size='large'
            disabled={isSubmitting}
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
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </Box>

        <Snackbar
          open={alert.open}
          autoHideDuration={6000}
          onClose={() => setAlert({ ...alert, open: false })}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setAlert({ ...alert, open: false })}
            severity={alert.severity}
            variant="filled"
            sx={{ width: '100%' }}
          >
            {alert.message}
          </Alert>
        </Snackbar>
      </Box>
    </Paper>
  );
};

export default ProjectForm;
