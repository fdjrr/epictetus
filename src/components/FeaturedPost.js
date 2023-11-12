import Image from "next/image";
import InfoPost from "@/components/InfoPost";
import Link from "next/link";

export default function FeaturedPost() {
  return (
    <article>
      <div className="flex -mx-6 lg:items-center items-start flex-wrap">
        <div className="px-4 lg:w-8/12 md:w-7/12  w-full">
          <Link href="/posts/detail">
            <Image
              src="/christopher-gower-m_HRfLhgABo-unsplash.jpg"
              className="rounded-xl w-full"
              width={1000}
              height={1000}
              alt="Featured Post"
              priority
            />
          </Link>
        </div>
        <div className="lg:w-4/12 md:w-5/12 px-4">
          <InfoPost
            category="UI Design"
            date="July 2, 2023"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, sequi!"
            shortDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, culpa quasi, praesentium quo ipsam labore facilis, mollitia necessitatibus sed debitis sint exercitationem veniam ut distinctio."
            authorAvatar="/user.png"
            authorName="Christopher Gower"
            authorJob="UI Designer"
          />
        </div>
      </div>
      <hr className="border-white/5 mt-10 lg:hidden" />
    </article>
  );
}
