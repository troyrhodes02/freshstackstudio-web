'use client';

import { Box, Container, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const PortfolioHeader = () => {
  const theme = useTheme();

  return (
    <Box
      component='section'
      sx={{
        position: 'relative',
        bgcolor: 'background.default',
        overflow: 'hidden',
        pt: { xs: 6, md: 8 },
        pb: { xs: 6, md: 8 },
      }}
    >
      {/* Background Design Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          opacity: 0.05,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          style={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: '20rem',
            height: '20rem',
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            borderRadius: '50%',
            filter: 'blur(100px)',
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '5%',
            width: '15rem',
            height: '15rem',
            background: `linear-gradient(225deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
            borderRadius: '50%',
            filter: 'blur(80px)',
          }}
        />
      </Box>

      <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Box
              sx={{
                width: '80px',
                height: '4px',
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                mb: 4,
                borderRadius: '2px',
              }}
            />
          </motion.div>

          {/* Main Title */}
          <Box sx={{ mb: 3 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant='h1'
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                  fontWeight: 700,
                  background: `linear-gradient(135deg, ${theme.palette.text.primary} 0%, ${theme.palette.primary.main} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 1,
                }}
              >
                Our Creative Portfolio
              </Typography>
            </motion.div>
          </Box>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typography
              variant='h5'
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                color: 'text.secondary',
                lineHeight: 1.6,
                px: { xs: 2, md: 0 },
              }}
            >
              Discover how we transform ideas into exceptional digital
              experiences. Each project represents our commitment to innovation
              and excellence.
            </Typography>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default PortfolioHeader;
