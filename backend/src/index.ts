import { ApolloServer, gql } from 'apollo-server';
import fs from 'fs';
import path from 'path';

type Image = {
  url: string;
};

type Post = {
  title: string;
  description: string;
  cover: number;
  images: Image[];
};

// Load JSON and transform image URLs into Image objects if needed
const rawPosts: any[] = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../data/posts.json'), 'utf8')
);

const rawCurriculum: any[] = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../data/curriculum.json'), 'utf8')
);

const posts: Post[] = rawPosts.map(post => ({
  ...post,
  images: post.images.map((url: string | { url: string }) =>
    typeof url === 'string' ? { url } : url
  )
}));

// GraphQL Schema
const typeDefs = gql`
  type Image {
    url: String
  }

  type Post {
    title: String
    description: String
    cover: Int
    images: [Image]
    coverImage: Image  
  }

  type Query {
    posts: [Post]
    post(title: String!): Post
    images: [Image]
    curriculum: JSON
  }
`;

// Resolvers
const resolvers = {
  Query: {
    posts: () => posts,
    post: (_: any, args: { title: string }) =>
      posts.find((p) => p.title === args.title),
    images: () => posts.flatMap((post) => post.images),
    
  },
  Post: {
    coverImage: (post: Post) => post.images[0] || null,  
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
