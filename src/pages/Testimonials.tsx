import { useState, useEffect } from 'react';
import { Page } from '../components/Page';
import { loadMarkdownContent, type PageContent } from '../utils/markdownLoader';
import { Loading } from '../components/Loading';

export const Testimonials = () => {
  const [content, setContent] = useState<PageContent | null>(null);

  useEffect(() => {
    loadMarkdownContent('testimonials').then(setContent);
  }, []);

  if (!content) {
    return <Loading message="Loading testimonials..." />;
  }

  return (
    <Page 
      title={content.title} 
      subtitle={content.subtitle}
      markdownContent={content.content}
      pageName="testimonials"
    />
  );
};