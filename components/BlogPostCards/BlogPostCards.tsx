import { Grid } from '@mantine/core';
import Card from './BlogPostCard';

const BlogPostCards = () => (
  <Grid gutter="md">
    <Grid.Col md={6} lg={4}>
      <Card gradient="from-[#ff0f7b] to-[#f89b29]" />
    </Grid.Col>
    <Grid.Col md={6} lg={4}>
      <Card gradient="from-[#ff1b6b] to-[#45caff]" />
    </Grid.Col>
    <Grid.Col md={6} lg={4}>
      <Card gradient="from-[#6ff7e8] to-[#1f7ea1]" />
    </Grid.Col>
  </Grid>
);

export default BlogPostCards;
