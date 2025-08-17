import { useState, useEffect } from 'react';
import { Page } from '../components/Page';
import { loadMarkdownContent, type PageContent } from '../utils/markdownLoader';
import { Loading } from '../components/Loading';

export const Contact = () => {
  const [content, setContent] = useState<PageContent | null>(null);

  useEffect(() => {
    loadMarkdownContent('contact').then(setContent);
  }, []);

  if (!content) {
    return <Loading message="Loading contact page..." />;
  }

  return (
    <Page 
      title={content.title} 
      subtitle={content.subtitle}
      markdownContent={content.content}
      pageName="contact"
    />
  );
};