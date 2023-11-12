import Image from "next/image";

export default function PostAuthor({ authorAvatar, authorName, authorJob }) {
  return (
    <div className="flex items-center mt-6">
      <Image
        className="w-12 h-12 rounded-full object-cover"
        src={authorAvatar}
        width={1000}
        height={1000}
        alt="avatar"
      />
      <div className="ml-4">
        <h3>{authorName}</h3>
        <div className="text-white/60 text-sm mt-1">{authorJob}</div>
      </div>
    </div>
  );
}
