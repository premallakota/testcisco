import { createOptimizedPicture } from '../../scripts/aem.js';

/**
 * Decorates the ec-it-corner block
 * @param {Element} block The ec-it-corner block element
 */
export default function decorate(block) {
  const blockData = {};
  
  // Extract data from block rows
  [...block.children].forEach((row) => {
    const cells = [...row.children];
    if (cells.length >= 2) {
      const key = cells[0].textContent.trim().toLowerCase().replace(/\s+/g, '');
      const value = cells[1];
      blockData[key] = value;
    }
  });

  // Clear the block
  block.innerHTML = '';
  
  // Create the structured content
  const container = document.createElement('div');
  container.className = 'ec-it-corner-container';
  
  // Title section
  if (blockData.title) {
    const titleElement = document.createElement('div');
    titleElement.className = 'ec-it-corner-title';
    titleElement.textContent = blockData.title.textContent.trim();
    container.appendChild(titleElement);
  }
  
  // Main content wrapper
  const mainContent = document.createElement('div');
  mainContent.className = 'ec-it-corner-main';
  
  // Media section
  if (blockData.media) {
    const mediaWrapper = document.createElement('div');
    mediaWrapper.className = 'ec-it-corner-media';
    
    const mediaElement = blockData.media.querySelector('img');
    if (mediaElement) {
      const mediaLink = blockData.medialink?.querySelector('a')?.href || '';
      const altText = blockData.alttext?.textContent.trim() || mediaElement.alt || '';
      
      const optimizedPicture = createOptimizedPicture(
        mediaElement.src,
        altText,
        false,
        [{ width: '750' }]
      );
      
      if (mediaLink) {
        const link = document.createElement('a');
        link.href = mediaLink;
        link.appendChild(optimizedPicture);
        mediaWrapper.appendChild(link);
      } else {
        mediaWrapper.appendChild(optimizedPicture);
      }
    }
    
    mainContent.appendChild(mediaWrapper);
  }
  
  // Content section
  const contentWrapper = document.createElement('div');
  contentWrapper.className = 'ec-it-corner-content';
  
  // Heading
  if (blockData.heading) {
    const headingElement = document.createElement('h2');
    headingElement.className = 'ec-it-corner-heading';
    const headingLink = blockData.headinglink?.querySelector('a')?.href || '';
    const headingText = blockData.heading.textContent.trim();
    
    if (headingLink) {
      const link = document.createElement('a');
      link.href = headingLink;
      link.textContent = headingText;
      headingElement.appendChild(link);
    } else {
      headingElement.textContent = headingText;
    }
    
    contentWrapper.appendChild(headingElement);
  }
  
  // Subheading
  if (blockData.subheading && blockData.subheading.textContent.trim()) {
    const subheadingElement = document.createElement('h3');
    subheadingElement.className = 'ec-it-corner-subheading';
    subheadingElement.textContent = blockData.subheading.textContent.trim();
    contentWrapper.appendChild(subheadingElement);
  }
  
  // Body content
  if (blockData.body) {
    const bodyElement = document.createElement('div');
    bodyElement.className = 'ec-it-corner-body';
    bodyElement.innerHTML = blockData.body.innerHTML;
    contentWrapper.appendChild(bodyElement);
  }
  
  mainContent.appendChild(contentWrapper);
  container.appendChild(mainContent);
  
  // Footnote section
  if (blockData.footnote) {
    const footnoteWrapper = document.createElement('div');
    footnoteWrapper.className = 'ec-it-corner-footnote';
    
    const footnoteLink = blockData.footnotelink?.querySelector('a')?.href || '';
    const footnoteAltText = blockData.footnotealttext?.textContent.trim() || '';
    
    const footnoteContent = document.createElement('div');
    footnoteContent.className = 'ec-it-corner-footnote-content';
    footnoteContent.innerHTML = blockData.footnote.innerHTML;
    
    // Add alt text if available as title attribute
    if (footnoteAltText) {
      const svgElement = footnoteContent.querySelector('svg');
      if (svgElement) {
        svgElement.setAttribute('aria-label', footnoteAltText);
        svgElement.setAttribute('role', 'img');
      }
    }
    
    if (footnoteLink) {
      const link = document.createElement('a');
      link.href = footnoteLink;
      link.appendChild(footnoteContent);
      footnoteWrapper.appendChild(link);
    } else {
      footnoteWrapper.appendChild(footnoteContent);
    }
    
    container.appendChild(footnoteWrapper);
  }
  
  block.appendChild(container);
}
