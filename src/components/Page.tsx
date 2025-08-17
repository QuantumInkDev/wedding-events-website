import { type ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { usePageTitle } from '../hooks/usePageTitle';
import './Page.css';

interface PageProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  markdownContent?: string;
  className?: string;
  pageName?: string;
}

export const Page = ({ title, subtitle, children, markdownContent, className = '', pageName }: PageProps) => {
  usePageTitle(title);
  
  const headerStyle = pageName 
    ? { backgroundImage: `url(/content/${pageName}.jpg)` }
    : {};
    
  return (
    <div className={`page ${className}`}>
      <div className="page-header" style={headerStyle}>
        <div className="page-header-content">
          <h1 className="page-title">{title}</h1>
          {subtitle && <p className="page-subtitle">{subtitle}</p>}
        </div>
      </div>
      
      <div className="page-content">
        <div className="page-container">
          {markdownContent && (
            <div className="markdown-content">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {markdownContent}
              </ReactMarkdown>
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};