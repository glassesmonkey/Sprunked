import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '../types/post';

interface BlogPostListProps {
  posts: Post[];
}

const BlogPostList: React.FC<BlogPostListProps> = ({ posts }) => {
  return (
    <div className="mx-auto grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Link 
          href={`/blog/${post.slug}`} 
          key={post.id} 
          className="game-card group hover:bg-background-light/50"
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg mb-4">
            <Image
              src={post.image || "https://via.placeholder.com/800x400"}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              className="absolute inline-block h-full w-full object-cover 
                       transform transition-transform duration-300 
                       group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col gap-3">
            {post.tags && post.tags.length > 0 && (
              <div className="inline-flex px-3 py-1 text-sm font-medium 
                            bg-primary-main/10 text-primary-light rounded-full">
                <p>{post.tags[0].name}</p>
              </div>
            )}
            <h2 className="text-xl font-bold text-text-primary 
                         group-hover:text-primary-light transition-colors">
              {post.title}
            </h2>
            <div className="flex items-center justify-between text-text-secondary text-sm">
              <time dateTime={post.createdAt}>
                {new Date(post.createdAt).toLocaleDateString()}
              </time>
              <span className="inline-flex items-center">
                <svg 
                  className="w-4 h-4 mr-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
                  />
                </svg>
                Read More
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogPostList;