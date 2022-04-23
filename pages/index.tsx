import { Container, Text, Title } from '@mantine/core';
import Welcome from 'components/Welcome/Welcome';
import BlogPostCards from '../components/BlogPostCards';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <br />
      <Container>
        <Title align="center" mb={20}>
          <Text
            className="font-bold text-2xl md:text-4xl tracking-tight"
            component="span"
            variant="gradient"
            gradient={{ from: '#dd83ad', to: '#c3e1fc', deg: 45 }}
          >
            Favourite Blogs
          </Text>
        </Title>
        <BlogPostCards />
      </Container>
    </>
  );
}
