'use client';

import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import HeroSection from '../components/landing/HeroSection';
import ServicesSection from '../components/landing/ServicesSection';
import WhyFreshStack from '../components/landing/WhyFreshStack';
import MeetTheTeam from '../components/landing/MeetTheTeam';

export default function Home() {
  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyFreshStack />
      <MeetTheTeam />
    </Box>
  );
}
