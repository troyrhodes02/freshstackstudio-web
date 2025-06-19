'use client';

import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import HeroSection from '../components/landing/HeroSection';
import ServicesSection from '../components/landing/ServicesSection';
import WhyFreshStack from '../components/landing/WhyFreshStack';
import MeetTheTeam from '../components/landing/MeetTheTeam';
import RecentProjects from '../components/landing/RecentProjects';
import HowWeWork from '../components/landing/HowWeWork';
import ClientSuccess from '../components/landing/ClientSuccess';

export default function Home() {
  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyFreshStack />
      <MeetTheTeam />
      <RecentProjects />
      <HowWeWork />
      <ClientSuccess />
    </Box>
  );
}
