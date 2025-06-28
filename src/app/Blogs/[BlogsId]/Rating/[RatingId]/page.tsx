// app/[BlogsId]/[RatingId]/page.tsx

export default function Page({ params }: { params: { BlogsId: string; RatingId: string } }) {
  const { BlogsId, RatingId } = params;

  return (
    <div>
      The blog id is {BlogsId} and rating is {RatingId}
    </div>
  );
}
