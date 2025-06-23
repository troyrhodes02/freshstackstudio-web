'use client';

import ContactHeader from '@/components/contact/ContactHeader';
import GetInTouch from '@/components/contact/GetInTouch';
import { Box } from '@mui/material';

export default function Contact() {
  return (
    <Box sx={{ bgcolor: 'background.paper' }}>
      <ContactHeader />
      <GetInTouch />
    </Box>
  );
}
