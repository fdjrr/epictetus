import Link from "next/link";

export default function PostMetaTitle({ category, date, title, center }) {
  return (
    <>
      <div className="flex items-center text-white/60 space-x-4">
        <div className="uppercase">{category}</div>
        <span>&bull;</span>
        <div className="">{date}</div>
      </div>
      <h2 className={`text-2xl mt-3 ${center ? "text-center" : ""}`}>
        <Link href="/posts/detail">{title}</Link>
      </h2>
    </>
  );
}
