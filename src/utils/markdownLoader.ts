export interface PageContent {
  title: string;
  subtitle?: string;
  content: string;
}

export const loadMarkdownContent = async (filename: string): Promise<PageContent> => {
  try {
    // Handle package subdirectory paths
    const isPackagePath = filename.startsWith('packages/');
    const filePath = isPackagePath ? `/content/${filename}.md` : `/content/${filename}.md`;
    
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Failed to load ${filename}.md`);
    }
    const text = await response.text();
    
    // Parse frontmatter-style metadata
    const lines = text.split('\n');
    let title = '';
    let subtitle = '';
    let contentStart = 0;
    
    if (lines[0] === '---') {
      let i = 1;
      while (i < lines.length && lines[i] !== '---') {
        const line = lines[i].trim();
        if (line.startsWith('title:')) {
          title = line.replace('title:', '').trim().replace(/['"]/g, '');
        } else if (line.startsWith('subtitle:')) {
          subtitle = line.replace('subtitle:', '').trim().replace(/['"]/g, '');
        }
        i++;
      }
      contentStart = i + 1;
    }
    
    const content = lines.slice(contentStart).join('\n').trim();
    
    return {
      title: title || `${filename.charAt(0).toUpperCase() + filename.slice(1)}`,
      subtitle,
      content
    };
  } catch (error) {
    console.error(`Error loading ${filename}.md:`, error);
    return {
      title: `${filename.charAt(0).toUpperCase() + filename.slice(1)}`,
      content: `Welcome to our ${filename} page. Content will be loaded from ${filename}.md file.`
    };
  }
};