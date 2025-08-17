import { useState, useEffect } from 'react';
import { Page } from '../components/Page';
import { loadMarkdownContent, type PageContent } from '../utils/markdownLoader';
import { Loading } from '../components/Loading';

export const Services = () => {
  const [content, setContent] = useState<PageContent | null>(null);

  useEffect(() => {
    loadMarkdownContent('services').then(setContent);
  }, []);

  if (!content) {
    return <Loading message="Loading services..." />;
  }

  return (
    <Page 
      title={content.title} 
      subtitle={content.subtitle}
      markdownContent={content.content}
      pageName="services"
    />
  );
};