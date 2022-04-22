import React from 'react';
import useSWR from 'swr';
import Image from 'next/image';
import { Anchor, Container, Text } from '@mantine/core';

import fetcher from 'lib/fetcher';
import { NowPlayingSong } from 'lib/types';

const NowPlaying = () => {
  const { data } = useSWR<NowPlayingSong>('/api/spotify/now-playing', fetcher);
  return (
    <Container className="flex space-x-4 items-center">
      {data?.albumImageUrl ? (
        <Image
          src={data.albumImageUrl}
          height={30}
          width={30}
          alt={data.album}
          className="rounded"
        />
      ) : (
        <Image src="/logos/spotify.png" height={30} width={30} alt="Spotify" />
      )}
      {data?.songUrl ? (
        <Anchor
          href={data.songUrl}
          target="_blank"
          variant="text"
          transform="capitalize"
          className="hover:underline font-semibold"
        >
          {data.title}
        </Anchor>
      ) : (
        <Text size="md">Not Playing</Text>
      )}
      <Text size="md">-</Text>
      <Text size="md" transform="capitalize">
        {data?.artist ?? 'Spotify'}
      </Text>
    </Container>
  );
};

export default NowPlaying;
