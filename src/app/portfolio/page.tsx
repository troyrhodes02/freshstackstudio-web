'use client';

import PortfolioHeader from '@/components/portfolio/PortfolioHeader';
import PortfolioGrid from '@/components/portfolio/PortfolioGrid';
import { Box } from '@mui/material';

export default function Portfolio() {
  return (
    <Box>
      <PortfolioHeader />
      <PortfolioGrid />
    </Box>
  );
}
