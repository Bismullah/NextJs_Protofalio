export default function Page({ params }: { params: { BlogsId: string } }) {
  return <div>Blog Details page for ID: {params.BlogsId}</div>;
}
