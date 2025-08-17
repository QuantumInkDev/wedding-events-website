import { useState, useEffect } from 'react';
import { Page } from '../components/Page';
import { loadMarkdownContent, type PageContent } from '../utils/markdownLoader';
import { Loading } from '../components/Loading';

export const WeddingCoordination = () => {
  const [content, setContent] = useState<PageContent | null>(null);

  useEffect(() => {
    loadMarkdownContent('services/wedding-coordination').then(setContent);
  }, []);

  if (!content) {
    return <Loading message="Loading wedding coordination details..." />;
  }

  return (
    <Page 
      title={content.title} 
      subtitle={content.subtitle}
      markdownContent={content.content}
      pageName="services/wedding-coordination"
    />
  );
};