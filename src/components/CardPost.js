import Image from "next/image";
import InfoPost from "@/components/InfoPost";
import Link from "next/link";

export default function CardPost({ thumbnail, ...infoPost }) {
  return (
    <article>
      <Link href="/posts/detail">
        <Image
          src={thumbnail}
          width={1000}
          height={1000}
          className="w-full rounded mb-4"
          alt="Card Post"
        />
      </Link>
      <InfoPost {...infoPost} />
    </article>
  );
}
