import { useState, useEffect } from 'react';
import { Page } from '../components/Page';
import { loadMarkdownContent, type PageContent } from '../utils/markdownLoader';
import { Loading } from '../components/Loading';

export const Packages = () => {
  const [content, setContent] = useState<PageContent | null>(null);

  useEffect(() => {
    loadMarkdownContent('packages').then(setContent);
  }, []);

  if (!content) {
    return <Loading message="Loading packages..." />;
  }

  return (
    <Page 
      title={content.title} 
      subtitle={content.subtitle}
      markdownContent={content.content}
      pageName="packages"
    />
  );
};