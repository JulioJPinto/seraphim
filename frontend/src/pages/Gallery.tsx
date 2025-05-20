import { gql, useQuery } from '@apollo/client';

const GET_POSTS = gql`
  query {
    posts {
      title
      coverImage {
        url
      }
    }
  }
`;

export default function Gallery() {
  const { data, loading, error } = useQuery(GET_POSTS);

  if (loading) return <p>Loading gallery...</p>;
  if (error) return <p>Error loading images: {error.message}</p>;

  return (
    <div>
      <h1>Gallery</h1>
      <ul>
        {data.posts.map((post: any) => (
          <li key={post.title}>
            <h2>{post.title}</h2>
            <img src={post.coverImage?.url} alt={post.title} width={300} />
          </li>
        ))}
      </ul>
    </div>
  );
}
