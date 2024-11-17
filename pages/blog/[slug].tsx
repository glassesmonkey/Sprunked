import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BlogPostDetail from '../../components/BlogPostDetail';
import RelatedPostsAndCTA from '../../components/RelatedPostsAndCTA';
import { PostDetailPageData } from '../../types/postdetail';
import { getWispClient } from '../../lib/wisp';

const BlogPostPage: NextPage<PostDetailPageData> = ({ post, relatedPosts, cta }) => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const canonicalUrl = `https://sprunked.com${locale === defaultLocale ? '' : `/${locale}`}/blog/${post.slug}`;

  if (router.isFallback) {
    return (
      <div className="min-h-screen bg-background-main flex items-center justify-center">
        <div className="animate-pulse text-primary-light">
          <svg className="w-16 h-16 animate-spin" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-background-main to-background-light text-text-primary'>
      <Head>
        <title>{post.title} - Sprunked</title>
        <meta name='description' content={post.description} />
        <link rel="canonical" href={canonicalUrl} />
        {locales?.map((l) => (
          <link
            key={l}
            rel="alternate"
            hrefLang={l}
            href={`https://sprunked.com${l === defaultLocale ? '' : `/${l}`}/blog/${post.slug}`}
          />
        ))}
        <link rel="alternate" hrefLang="x-default" href={`https://sprunked.com/blog/${post.slug}`} />
      </Head>

      <Header />

      <main className='flex-grow'>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <article className="prose prose-invert prose-purple max-w-none">
            <div className="mb-8">
              {post.tags && post.tags.length > 0 && (
                <div className="mb-4">
                  {post.tags.map(tag => (
                    <span 
                      key={tag.id} 
                      className="inline-flex px-3 py-1 text-sm font-medium 
                                bg-primary-main/10 text-primary-light rounded-full mr-2"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              )}
              <h1 className="text-4xl font-bold text-text-primary mb-4">
                {post.title}
              </h1>
              <div className="flex items-center text-text-secondary text-sm">
                <time dateTime={post.createdAt}>
                  {new Date(post.createdAt).toLocaleDateString()}
                </time>
              </div>
            </div>

            {post.image && (
              <div className="relative aspect-video w-full mb-8 rounded-xl overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full"
                />
              </div>
            )}

            <div 
              className="text-text-secondary"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* Related Posts Section */}
          <div className="mt-16 pt-8 border-t border-primary-light/10">
            <h2 className="text-2xl font-bold text-text-primary mb-8">
              Related Posts
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {relatedPosts.map(relatedPost => (
                <Link 
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="game-card group hover:bg-background-light/50"
                >
                  {relatedPost.image && (
                    <div className="relative aspect-video w-full mb-4 rounded-lg overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-primary-light transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary line-clamp-2">
                    {relatedPost.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<PostDetailPageData> = async ({ params, locale }) => {
  if (!params?.slug || typeof params.slug !== 'string') {
    return { notFound: true };
  }

  const wisp = await getWispClient();

  try {
    const postResult = await wisp.getPost(params.slug);
    const relatedPostsResult = await wisp.getPosts({ limit: 2 });

    return {
      props: {
        ...(await serverSideTranslations(locale || 'en', ['common'])),
        post: postResult.post,
        relatedPosts: relatedPostsResult.posts,
        cta: null,
      },
    };
  } catch (error) {
    console.error('Failed to fetch blog post:', error);
    return { notFound: true };
  }
};

export default BlogPostPage;