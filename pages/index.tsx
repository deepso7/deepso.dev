import { Container } from '@mantine/core';
import Welcome from 'components/Welcome/Welcome';
import BlogPostCards from '../components/BlogPostCards';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <br />
      <Container>
        {/* <Title align="center" mb={20}>
          <Text
            className="font-bold text-xl md:text-2xl tracking-tight"
            component="span"
            variant="gradient"
            gradient={{ from: '#dd83ad', to: '#c3e1fc', deg: 45 }}
          >
            Posts
          </Text>
        </Title> */}
        <BlogPostCards />
      </Container>
    </>
  );
}
