import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from '../components/Page';
import { loadMarkdownContent, type PageContent } from '../utils/markdownLoader';
import { Loading } from '../components/Loading';

export const PackageDetail = () => {
  const { packageType } = useParams();
  const [content, setContent] = useState<PageContent | null>(null);

  useEffect(() => {
    if (packageType) {
      loadMarkdownContent(`packages/${packageType}`).then(setContent);
    }
  }, [packageType]);

  if (!content) {
    return <Loading message={`Loading ${packageType} package details...`} />;
  }

  return (
    <Page 
      title={content.title} 
      subtitle={content.subtitle}
      markdownContent={content.content}
      pageName={`packages/${packageType}`}
    />
  );
};