# EC IT Corner Block - Usage Guide

## Overview

The `ec-it-corner` block is a content block designed to display featured IT corner content with a media element (image) on the left and detailed content on the right. It supports titles, headings, subheadings, body text, and optional footnotes.

## Features

- **Responsive Design**: Adapts to mobile, tablet, and desktop screens
- **Media Support**: Displays optimized images with optional links
- **Rich Content**: Supports headings, subheadings, and formatted body text
- **Footnote Section**: Can include a footnote with SVG icons or additional content
- **Accessibility**: Includes alt text and ARIA labels for screen readers

## How to Use in Your Document

### Basic Structure

In your Microsoft Word or Google Doc, create a table with the following structure:

```
| Title          | IT Corner                                           |
| Media          | [your-image.png]                                    |
| Alt Text       | Description of the image                            |
| Heading        | Your Main Heading                                   |
| Subheading     | Your Optional Subheading                            |
| Body           | Your main content goes here. Can include paragraphs.|
```

### Available Fields

| Field Name        | Required | Description                                          |
|-------------------|----------|------------------------------------------------------|
| **Title**         | Optional | Section title displayed at the top                   |
| **Media**         | Optional | Image to display (left side on desktop)              |
| **Media Link**    | Optional | URL to link the image to                             |
| **Alt Text**      | Optional | Alternative text for the media image                 |
| **Heading**       | Optional | Main heading for the content                         |
| **Heading Link**  | Optional | URL to link the heading to                           |
| **Subheading**    | Optional | Secondary heading below the main heading             |
| **Body**          | Optional | Main content area (supports HTML formatting)         |
| **Footnote**      | Optional | Footer content (can include SVG icons)               |
| **Footnote Link** | Optional | URL to link the footnote content to                  |
| **Footnote Alt Text** | Optional | Alt text for footnote SVG elements              |

## Examples

### Example 1: Full Featured Block

```
-----------------------------------
| Title          | EC IT Corner                                        |
| Media          | /images/it-corner-banner.jpg                        |
| Media Link     | https://example.com/it-corner                       |
| Alt Text       | IT Corner promotional image                         |
| Heading        | Latest Tech Updates                                 |
| Heading Link   | https://example.com/tech-updates                    |
| Subheading     | Exploring Cloud Computing Trends                    |
| Body           | Discover the latest trends in cloud computing...    |
| Footnote       | <svg>...</svg>                                      |
| Footnote Link  | https://example.com/more-info                       |
| Footnote Alt Text | Company logo                                     |
-----------------------------------
```

### Example 2: Simple Block with Image and Content

```
-----------------------------------
| Media          | /images/announcement.jpg                            |
| Alt Text       | New product announcement                            |
| Heading        | Introducing Our New Platform                        |
| Body           | We're excited to announce the launch of...         |
-----------------------------------
```

### Example 3: Text-Only Block

```
-----------------------------------
| Title          | Quick Updates                                       |
| Heading        | Important Notice                                    |
| Subheading     | System Maintenance Scheduled                        |
| Body           | Please note that our systems will undergo...        |
-----------------------------------
```

## Styling

The block comes with built-in responsive styling:

- **Desktop**: Media on left (40% width), content on right (60% width)
- **Tablet** (≤768px): Stacked layout with media on top
- **Mobile** (≤480px): Optimized spacing and font sizes

### Customization

To customize the styling, edit `ec-it-corner.css`:

```css
/* Change the title color */
.ec-it-corner-title {
  color: #your-color;
}

/* Adjust media width on desktop */
.ec-it-corner-media {
  flex: 0 0 50%; /* Change from 40% to 50% */
}

/* Customize heading styles */
.ec-it-corner-heading {
  font-size: 2rem;
  color: #your-brand-color;
}
```

## Tips and Best Practices

1. **Image Optimization**: Use images with a width of at least 750px for optimal quality
2. **Alt Text**: Always provide descriptive alt text for accessibility
3. **Content Length**: Keep body content concise for better readability
4. **Links**: Use media/heading links sparingly to avoid overwhelming users
5. **Footnotes**: Use for branding elements or additional context

## HTML Output Structure

The block generates the following HTML structure:

```html
<div class="ec-it-corner">
  <div class="ec-it-corner-container">
    <div class="ec-it-corner-title">Section Title</div>
    <div class="ec-it-corner-main">
      <div class="ec-it-corner-media">
        <picture><!-- Optimized image --></picture>
      </div>
      <div class="ec-it-corner-content">
        <h2 class="ec-it-corner-heading">Main Heading</h2>
        <h3 class="ec-it-corner-subheading">Subheading</h3>
        <div class="ec-it-corner-body"><!-- Body content --></div>
      </div>
    </div>
    <div class="ec-it-corner-footnote">
      <div class="ec-it-corner-footnote-content"><!-- Footnote --></div>
    </div>
  </div>
</div>
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

**Image not displaying?**
- Check the image path is correct
- Ensure the image exists in your media library

**Styling looks off?**
- Clear browser cache
- Check if `ec-it-corner.css` is properly loaded

**Links not working?**
- Ensure URLs include the protocol (https://)
- Check for typos in the URL

## Integration with AEM Edge Delivery

This block is part of an AEM Edge Delivery Services project. To use it:

1. Add the block reference in your document: `ec-it-corner`
2. The block will be automatically decorated when the page loads
3. Images are automatically optimized using `createOptimizedPicture()`

## Support

For issues or questions about this block, please refer to the main project documentation or contact the development team.
