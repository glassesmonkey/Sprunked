import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface GameVersion {
  id: string;
  title: string;
  description: string;
  image?: string;
  gradient?: string;
  url: string;
  isExternal: boolean;
}

const OtherVersionGames = () => {
  const { t } = useTranslation('otherversiongame');
  const versions = t('versions', { returnObjects: true }) as GameVersion[];
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollInterval: NodeJS.Timeout;
    
    const scroll = () => {
      if (scrollRef.current && !isHovered && autoScrollEnabled && !isScrolling) {
        const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
        
        // 检查是否接近底部（距离底部20px以内）
        if (scrollTop + clientHeight >= scrollHeight - 20) {
          setIsScrolling(true); // 标记��在执行回到顶部的动作
          
          // 平滑回到顶部
          scrollRef.current.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          
          // 等待滚动回顶部完成后恢复自动滚动
          setTimeout(() => {
            setIsScrolling(false);
          }, 1000);
        } else {
          // 增加滚动速度到每次2像素
          scrollRef.current.scrollTop += 2;
        }
      }
    };

    // 减少滚动间隔到20ms，使滚动更流畅
    scrollInterval = setInterval(scroll, 20);

    // 立即启用自动滚动，不需要延迟
    setAutoScrollEnabled(true);

    return () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };
  }, [isHovered, autoScrollEnabled, isScrolling]);

  // 处理手动滚动
  const handleScroll = () => {
    if (isScrolling) return; // 如果正在执行自动回到顶部，则忽略手动滚动
    
    // 当用户手动滚动时，暂时禁用自动滚动
    setAutoScrollEnabled(false);
    // 5秒后重新启用自动滚动
    setTimeout(() => setAutoScrollEnabled(true), 5000);
  };

  return (
    <section className="w-full max-w-[280px] h-[573px] py-4">
      <div className="sticky top-4 h-full flex flex-col">
        <h2 className="text-xl font-bold text-text-primary mb-4">
          {t('title')}
        </h2>
        <p className="text-sm text-text-secondary mb-6">
          {t('description')}
        </p>
        
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onScroll={handleScroll}
          style={{ scrollBehavior: 'smooth' }}
        >
          {/* 在顶部添加一些空间 */}
          <div className="h-4" />
          
          {versions.map((version) => (
            <div
              key={version.id}
              className="game-card group hover:bg-background-light/50 
                       transform transition-all duration-300 hover:-translate-y-1"
            >
              {version.isExternal ? (
                <a
                  href={version.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <VersionCard version={version} />
                </a>
              ) : (
                <Link href={version.url}>
                  <VersionCard version={version} />
                </Link>
              )}
            </div>
          ))}
          
          {/* 在底部添加一些空间 */}
          <div className="h-4" />
        </div>
      </div>
    </section>
  );
};

const VersionCard = ({ version }: { version: GameVersion }) => {
  const phaseNumber = version.title.split(' ').pop();

  return (
    <div className="flex items-center space-x-3">
      <div className="relative h-16 w-16 flex-shrink-0">
        {version.image ? (
          <Image
            src={version.image}
            alt={version.title}
            fill
            className="object-cover rounded-lg"
          />
        ) : (
          <div 
            className={`w-full h-full rounded-lg bg-gradient-to-r ${version.gradient || 'from-primary-main/20 to-primary-light/20'} 
                       flex items-center justify-center relative group overflow-hidden`}
          >
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <span className="text-xl font-bold text-text-primary">
              {phaseNumber}
            </span>
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-base font-semibold text-text-primary truncate">
          {version.title}
        </h3>
        <p className="text-sm text-text-secondary line-clamp-2">
          {version.description}
        </p>
      </div>
    </div>
  );
};

export default OtherVersionGames; 