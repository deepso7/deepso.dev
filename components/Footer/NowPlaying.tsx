import React from 'react';
import useSWR from 'swr';
import Image from 'next/image';

import fetcher from 'lib/fetcher';
import { NowPlayingSong } from 'lib/types';
import { Container, Text } from '@mantine/core';

const NowPlaying = () => {
  const { data } = useSWR<NowPlayingSong>('/api/spotify/now-playing', fetcher);
  return (
    <Container>
      <Image src="/logos/spotify.png" height={30} width={30} alt="Spotify" />
      <Text size="md">Now Playing</Text>
    </Container>
  );
};

export default NowPlaying;
