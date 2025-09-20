# Hagen Blacksmithing E-Commerce Website

A modern, responsive e-commerce website for Hagen Blacksmithing, featuring handcrafted ironwork and custom forging services.

## Features

### 🛍️ E-Commerce Functionality
- **Product Catalog**: Browse products by category (Tools, Decorative, Custom Work)
- **Shopping Cart**: Add/remove items with persistent storage
- **Product Categories**: Filter products by type
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile

### 🎨 Design & User Experience
- **Modern UI**: Clean, professional design with gold and dark color scheme
- **Hero Section**: Showcases blacksmithing work with compelling call-to-actions
- **About Section**: Tells the story of Hagen Blacksmithing
- **Contact Form**: Easy way for customers to get custom quotes
- **Smooth Animations**: Hover effects and transitions for better UX

### 📱 Technical Features
- **Responsive Layout**: Mobile-first design approach
- **Local Storage**: Cart persists between sessions
- **Form Validation**: Contact form with proper validation
- **Accessibility**: Semantic HTML and proper contrast ratios
- **Performance**: Optimized images and efficient code

## File Structure

```
Hagen-Blacksmithing/
├── index.html          # Main website file
├── styles.css          # All CSS styling
├── script.js           # JavaScript functionality
├── README.md           # This file
└── images/             # Product and gallery images
    ├── 503820886_10161155977462344_4036553592053670956_n.jpg
    ├── 503951734_10161155976827344_3081178706830117618_n.jpg
    └── [other images]
```

## Getting Started

### 1. Setup
1. Download all files to your web server or local development environment
2. Ensure all image files are in the correct directory
3. Open `index.html` in a web browser

### 2. Customization

#### Update Business Information
Edit the following in `index.html`:
- Business name and tagline
- Contact information (phone, email, address)
- Business hours
- Social media links

#### Add Real Product Images
1. Replace the emoji placeholders in `script.js` with actual product images
2. Update the `image` property in the products array
3. Ensure images are optimized for web (recommended: 300x300px, WebP format)

#### Customize Products
Edit the `products` array in `script.js`:
```javascript
const products = [
    {
        id: 1,
        name: "Your Product Name",
        category: "tools", // or "decorative", "custom"
        price: 285.00,
        description: "Product description...",
        image: "path/to/your/image.jpg"
    },
    // Add more products...
];
```

### 3. Deployment

#### Option 1: Static Hosting (Recommended)
- **Netlify**: Drag and drop the folder to netlify.com
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Push to a GitHub repository and enable Pages

#### Option 2: Traditional Web Hosting
- Upload all files to your web server via FTP
- Ensure the domain points to the directory containing `index.html`

## Customization Guide

### Colors
The website uses a professional color scheme:
- **Primary Gold**: #d4af37 (buttons, accents)
- **Dark Blue**: #2c3e50 (text, headers)
- **Light Gray**: #f8f9fa (backgrounds)
- **Medium Gray**: #6c757d (secondary text)

### Fonts
- **Headers**: Playfair Display (elegant serif)
- **Body Text**: Open Sans (clean sans-serif)

### Adding New Features

#### Search Functionality
Uncomment this line in `script.js`:
```javascript
addSearchFeature();
```

#### Additional Product Categories
1. Add new category buttons in the HTML
2. Update the filter function in JavaScript
3. Add products with the new category

#### Payment Integration
For a production site, integrate with:
- Stripe
- PayPal
- Square
- Shopify

## Browser Support
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips
1. **Optimize Images**: Use WebP format and compress images
2. **Minify Code**: Use tools like UglifyJS for production
3. **CDN**: Consider using a CDN for faster loading
4. **Caching**: Set up proper browser caching headers

## SEO Optimization
The website includes:
- Semantic HTML structure
- Meta descriptions
- Alt text for images
- Proper heading hierarchy
- Mobile-friendly design

## Support
For technical support or customization requests, contact your web developer.

## License
This website template is created for Hagen Blacksmithing. All rights reserved.

---

**Built with ❤️ for Hagen Blacksmithing**
