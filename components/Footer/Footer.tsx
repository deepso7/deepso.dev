import React from 'react';
import { Divider } from '@mantine/core';

import NowPlaying from './NowPlaying';

const Footer = () => (
  <>
    <Divider my="sm" />
    <NowPlaying />
  </>
);

export default Footer;
