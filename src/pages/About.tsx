import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Page } from '../components/Page';
import { loadMarkdownContent, type PageContent } from '../utils/markdownLoader';
import { Loading } from '../components/Loading';
import './About.css';

export const About = () => {
  const [content, setContent] = useState<PageContent | null>(null);

  useEffect(() => {
    loadMarkdownContent('about').then(setContent);
  }, []);

  if (!content) {
    return <Loading message="Loading about page..." />;
  }

  return (
    <Page 
      title={content.title} 
      subtitle={content.subtitle}
      pageName="about"
    >
      <div className="about-content">
        <section className="founder-section">
          <div className="founder-content">
            <div className="founder-image">
              <img 
                src="/pictures/owner/466049353_10225152306616670_3608116245007284645_n.jpg" 
                alt="Brigette Towers-Diaz - Founder & CEO"
                className="owner-portrait"
              />
            </div>
            <div className="founder-text">
              <h3>Meet Brigette Towers-Diaz</h3>
              <p className="founder-title">Founder & CEO, Weddings~N~Events by Brigette Towers-Diaz LLC</p>
              <p>
                With a passion for creating unforgettable moments and a keen eye for detail, 
                Brigette brings years of experience in event planning and coordination to every celebration. 
                Her dedication to excellence and personalized service ensures that each event is uniquely 
                tailored to reflect the client's vision and style.
              </p>
              <blockquote className="founder-quote">
                "My wedding superpower? An unrelenting obsession with the details! From the ceremony and reception to honoring multicultural traditions and placing every piece of decor just right, I believe that every detail matters. As a true Virgo, precision and perfection are my guiding principles."
              </blockquote>
            </div>
          </div>
        </section>
      </div>

      <div className="page-content">
        <div className="page-container">
          <div className="markdown-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>

      <div className="about-content">
        <section className="team-section">
          <h3>Our Team</h3>
          <div className="team-image">
            <img 
              src="/pictures/team/1.jpg" 
              alt="Weddings\~N\~Events Team"
              className="team-photo"
            />
          </div>
          <p className="team-description">
            Our experienced team of event professionals works together to bring your vision to life. 
            From initial consultation to event execution, we're committed to making your special day perfect.
          </p>
        </section>
      </div>
    </Page>
  );
};