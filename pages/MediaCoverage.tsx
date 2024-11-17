import { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MediaCoverage: NextPage = () => {
  const coverageLinks = [
 { title: "v2ex", url: "https://www.v2ex.com/t/1090258" },
 { title: "hacker news", url: "https://news.ycombinator.com/item?id=42162345" },
 { title: "cnblogs", url: "https://www.cnbian.com/topic/19801-%E4%B8%80%E4%B8%AA%E6%B5%B7%E5%A4%96%E5%BE%88%E7%81%AB%E7%9A%84%E9%9F%B3%E4%B9%90%E6%B8%B8%E6%88%8F/" },
 { title: "osu", url: "https://u.osu.edu/meutilab/2024/01/29/new-paper-2/#comment-136" },
 { title: "garmin", url: "https://forums.garmin.com/apps-software/mobile-apps-web/f/garmin-connect-web/391568/export-from-fitbit-using-google-take-out-and-import-to-garmin/1859521#1859521" },
 { title: "usc", url: "https://scalar.usc.edu/works/eng-283e-our-premodern-epics/a-game" },
 { title: "osu", url: "https://blogs.oregonstate.edu/motorpool/2012/03/08/the-other-osu-fleet/#comment-149754" },
];

  

  

  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Media Coverage - sprunked </title>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      <Header />

      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Media Coverage About sprunked </h1>
        
        <p className="text-xl mb-12 max-w-2xl">
          Discover what the media is saying about sprunked and our innovative technology.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-4xl">
          {coverageLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
            >
              <h2 className="text-xl font-semibold mb-2">{link.title}</h2>
              <p className="text-blue-500 hover:underline">Read Article</p>
            </a>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MediaCoverage;