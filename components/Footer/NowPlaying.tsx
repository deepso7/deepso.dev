import React from 'react';
import useSWR from 'swr';
import Image from 'next/image';
import { Anchor, Container, Text } from '@mantine/core';

import fetcher from 'lib/fetcher';
import { NowPlayingSong } from 'lib/types';

const NowPlaying = () => {
  const { data } = useSWR<NowPlayingSong>('/api/spotify/now-playing', fetcher);
  return (
    <Container className="flex flex-row-reverse items-center sm:flex-row sm:space-x-2 w-full">
      {data?.albumImageUrl ? (
        <Image
          src={data.albumImageUrl}
          height={45}
          width={45}
          alt={data.album}
          className="rounded"
        />
      ) : (
        <Image src="/logos/spotify.png" height={45} width={45} alt="Spotify" />
      )}
      <Container className="inline-flex flex-col sm:flex-row w-full max-w-full truncate">
        {data?.songUrl ? (
          <Anchor
            href={data.songUrl}
            target="_blank"
            variant="text"
            transform="capitalize"
            className="hover:underline font-semibold max-w-max truncate"
          >
            {data.title}
          </Anchor>
        ) : (
          <Text size="md">Not Playing</Text>
        )}
        <Text size="md" className="mx-2 hidden sm:block">
          -
        </Text>
        <Text size="md" transform="capitalize" className="max-w-max truncate">
          {data?.artist ?? 'Spotify'}
        </Text>
      </Container>
    </Container>
  );
};

export default NowPlaying;
