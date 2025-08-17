import { useEffect } from 'react';

export const usePageTitle = (title: string) => {
  useEffect(() => {
    const baseTitle = 'Weddings~N~Events by Brigette Towers-Diaz';
    document.title = title ? `${title} | ${baseTitle}` : baseTitle;
    
    return () => {
      document.title = baseTitle;
    };
  }, [title]);
};