import Layout from "@/components/Layout";
import Container from "@/components/Container";
import PostMetaTitle from "@/components/PostMetaTitle";
import PostAuthor from "@/components/PostAuthor";
import Image from "next/image";

export default function Detail() {
  return (
    <Layout>
      <Container>
        <div className="md:w-6/12 w-full mx-auto flex items-center flex-col">
          <PostMetaTitle
            category="UI Design"
            date="May 28, 2022"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ut."
            center
          />
          <PostAuthor
            authorName="John Doe"
            authorJob="UI Designer"
            authorAvatar="/user.png"
          />
        </div>
        <div className="md:w-10/12 w-full mx-auto my-10">
          <Image
            src="/christopher-gower-m_HRfLhgABo-unsplash.jpg"
            width={1000}
            height={1000}
            className="rounded-lg"
            alt="Detail Post"
            priority
          />
        </div>
        <div className="md:w-8/12 w-full mx-auto leading-relaxed">
          <p className="text-lg mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eius
            inventore sed harum perferendis, nisi quas beatae illum nostrum iste
            molestias explicabo odit debitis magnam assumenda eligendi suscipit
            corrupti natus. Animi pariatur veniam ratione suscipit inventore eum
            minus praesentium debitis accusamus odio. Tenetur fuga expedita
            praesentium voluptate doloribus, possimus perferendis.
          </p>
          <p className="text-lg mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eius
            inventore sed harum perferendis, nisi quas beatae illum nostrum iste
            molestias explicabo odit debitis magnam assumenda eligendi suscipit
            corrupti natus. Animi pariatur veniam ratione suscipit inventore eum
            minus praesentium debitis accusamus odio. Tenetur fuga expedita
            praesentium voluptate doloribus, possimus perferendis.
          </p>
          <p className="text-lg mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eius
            inventore sed harum perferendis, nisi quas beatae illum nostrum iste
            molestias explicabo odit debitis magnam assumenda eligendi suscipit
            corrupti natus. Animi pariatur veniam ratione suscipit inventore eum
            minus praesentium debitis accusamus odio. Tenetur fuga expedita
            praesentium voluptate doloribus, possimus perferendis.
          </p>
        </div>
      </Container>
    </Layout>
  );
}
