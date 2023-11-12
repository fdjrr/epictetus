"use client";

import CardPost from "@/components/CardPost";
import Layout from "@/components/Layout";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import mockPosts from "@/utils/posts.json";
import { useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState(mockPosts);

  return (
    <Layout>
      <Container>
        <SectionHeader>UI Design</SectionHeader>
        {posts.length < 1 ? (
          <div className="text-center py-20">
            <h2 className="text-4xl">No result 🥲</h2>
            <p className="text-xl mt-4 text-white/60 mx-auto">
              We couldn&apos;t find any result!
            </p>
          </div>
        ) : (
          <div className="flex -mx-6 flex-wrap mt-6">
            {posts.map((post, index) => (
              <div className="md:w-4/12 w-12/12 px-4 py-6" key={index}>
                <CardPost {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </Layout>
  );
}
