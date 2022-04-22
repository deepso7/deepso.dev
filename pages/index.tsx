import { ScrollArea } from '@mantine/core';
import Welcome from 'components/Welcome/Welcome';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <br />
      {/* TODO: Make this responsive */}
      <ScrollArea className="lg:h-[500px] min-h-[200px]" type="scroll">
        {/* ... content */}
      </ScrollArea>
    </>
  );
}
