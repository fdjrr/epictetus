"use client";

import FeaturedPost from "@/components/FeaturedPost";
import CardPost from "@/components/CardPost";
import { useState } from "react";
import Container from "@/components/Container";
import Layout from "@/components/Layout";
import mockPosts from "@/utils/posts.json";

export default function Home() {
  const [posts, setPosts] = useState(mockPosts);
  return (
    <Layout>
      <Container>
        <FeaturedPost />
        <div className="flex -mx-6 flex-wrap">
          {posts.map((post, index) => (
            <div className="md:w-4/12 w-12/12 px-4 py-6" key={index}>
              <CardPost {...post} />
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
}
