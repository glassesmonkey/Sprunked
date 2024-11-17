import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogPostList from '../components/BlogPostList';
import { Post } from '../types/post';
import { getWispClient } from '../lib/wisp';

interface BlogListPageProps {
  posts: Post[];
}

const BlogListPage: NextPage<BlogListPageProps> = ({ posts }) => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const canonicalUrl = `https://sprunked.com${locale === defaultLocale ? '' : `/${locale}`}/blog-post-list`;

  return (
    <div className='min-h-screen bg-gradient-to-b from-background-main to-background-light text-text-primary'>
      <Head>
        <title>Blog - Sprunked</title>
        <meta name='description' content="Latest news and updates about Sprunked music creation game." />
        <link rel="canonical" href={canonicalUrl} />
        {locales?.map((l) => (
          <link
            key={l}
            rel="alternate"
            hrefLang={l}
            href={`https://sprunked.com${l === defaultLocale ? '' : `/${l}`}/blog-post-list`}
          />
        ))}
        <link rel="alternate" hrefLang="x-default" href="https://sprunked.com/blog-post-list" />
      </Head>

      <Header />

      <main className='flex-grow'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-text-primary mb-4">
              Sprunked Blog
            </h1>
            <p className="text-xl text-text-secondary">
              Latest news, updates, and guides about Sprunked
            </p>
          </div>
          <BlogPostList posts={posts} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<BlogListPageProps> = async ({ locale }) => {
  const wisp = await getWispClient();

  try {
    const postsResult = await wisp.getPosts({ limit: 20 });
    return {
      props: {
        ...(await serverSideTranslations(locale || 'en', ['common'])),
        posts: postsResult.posts,
      },
    };
  } catch (error) {
    console.error('Failed to fetch blog posts:', error);
    return { notFound: true };
  }
};

export default BlogListPage;