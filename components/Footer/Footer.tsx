import React from 'react';
import { Container, Divider } from '@mantine/core';

import NowPlaying from './NowPlaying';

const Footer = () => (
  <Container mb={5}>
    <Divider my="sm" />
    <NowPlaying />
  </Container>
);

export default Footer;
