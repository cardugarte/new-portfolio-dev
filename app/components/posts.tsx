import Link from 'next/link';
import { formatDate, getBlogPosts } from 'app/blog/utils';
import Image from 'next/image';

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
<div className="flex flex-row md:flex-row md:flex-wrap justify-center gap-8 mx-auto max-w-screen-lg">
  {allBlogs
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1;
      }
      return 1;
    })
    .map((post) => (
      <Link
        key={post.slug}
        className="flex flex-col items-center w-72 p-4 bg-[#222F43] bg-opacity-800 backdrop-blur rounded-lg shadow-lg"
        href={`/blog/${post.slug}`}
      >
        <Image src={'/images/zuricata.jpg'} alt='' width={100} height={100} />
        <p className="text-neutral-900 dark:text-neutral-100 tracking-tight font-bold">
          {post.metadata.title}
        </p>
        <p className="text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt, false)}
        </p>
      </Link>
    ))}
</div>

  );
}
