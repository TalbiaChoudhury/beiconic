'use client';

import React from 'react';
import { useEffect } from 'react';
import VisionComponent from '@/components/Vision/VisionComponent/VisionComponent';

const Vision = () => {
  useEffect(() => {
      document.title = "Icon | Vision";
    }, []);

  return (
    <div>
      <VisionComponent />
    </div>
  );
};

export default Vision;