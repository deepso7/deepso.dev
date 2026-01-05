export default async function WritingPage() {
  return <div>Writing Page</div>;
}

export const getConfig = async () => {
  return {
    render: "static",
    staticPaths: ["hi"],
  } as const;
};
