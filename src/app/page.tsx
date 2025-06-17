'use client';

import { Box, Container, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />

      {/* Placeholder sections for navigation testing */}
      <Box id='services' sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container>
          <Typography
            variant='h2'
            align='center'
            sx={{ color: 'text.primary' }}
          >
            Services
          </Typography>
          <Typography
            variant='body1'
            align='center'
            sx={{ mt: 2, color: 'text.secondary' }}
          >
            Our comprehensive digital solutions to help your business grow.
          </Typography>
        </Container>
      </Box>

      <Box id='about' sx={{ py: 8 }}>
        <Container>
          <Typography
            variant='h2'
            align='center'
            sx={{ color: 'text.primary' }}
          >
            About
          </Typography>
          <Typography
            variant='body1'
            align='center'
            sx={{ mt: 2, color: 'text.secondary' }}
          >
            Learn more about FreshStack Studio and our mission.
          </Typography>
        </Container>
      </Box>

      <Box id='portfolio' sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container>
          <Typography
            variant='h2'
            align='center'
            sx={{ color: 'text.primary' }}
          >
            Portfolio
          </Typography>
          <Typography
            variant='body1'
            align='center'
            sx={{ mt: 2, color: 'text.secondary' }}
          >
            Discover our latest projects and success stories.
          </Typography>
        </Container>
      </Box>

      <Box id='pricing' sx={{ py: 8 }}>
        <Container>
          <Typography
            variant='h2'
            align='center'
            sx={{ color: 'text.primary' }}
          >
            Pricing
          </Typography>
          <Typography
            variant='body1'
            align='center'
            sx={{ mt: 2, color: 'text.secondary' }}
          >
            Transparent pricing for our digital solutions.
          </Typography>
        </Container>
      </Box>

      <Box id='contact' sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container>
          <Typography
            variant='h2'
            align='center'
            sx={{ color: 'text.primary' }}
          >
            Contact
          </Typography>
          <Typography
            variant='body1'
            align='center'
            sx={{ mt: 2, color: 'text.secondary' }}
          >
            Ready to start your project? Get in touch with our team.
          </Typography>
        </Container>
      </Box>
    </>
  );
}
