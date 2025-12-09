import React from 'react';

// NOTE: This file assumes a Vercel-like environment (Next.js, etc.) 
// where a React component can be rendered as an image using @vercel/og or similar.

// Common OG Image Dimensions: 1200x630 pixels
const OpenGraphImage = ({ title = "DeSuite Premium Dashboard", description = "Unlock the power of your data with enterprise-grade analytics.", colorScheme = "light" }) => {
  const isDark = colorScheme === 'dark';

  // Base colors for contrast and branding
  const BG_COLOR = isDark ? '#1F2937' : '#FFFFFF'; // Tailwind gray-800 or white
  const TEXT_COLOR = isDark ? '#F3F4F6' : '#1F2937'; // Tailwind gray-100 or gray-800
  const PRIMARY_START = '#FF6B81'; // Adjusted Primary color (Red-Pink)
  const PRIMARY_END = '#6366F1';   // Indigo/Violet

  return (
    // The wrapper must have the specific dimensions
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: BG_COLOR,
        fontFamily: 'Inter, sans-serif', // Use Inter font
        padding: '60px 80px',
        position: 'relative',
        lineHeight: 1.4,
      }}
    >
      {/* Background Gradient Mesh Effect (Simplified for OG image) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          backgroundImage: `radial-gradient(at 0% 0%, ${PRIMARY_START} 0px, transparent 50%), radial-gradient(at 100% 100%, ${PRIMARY_END} 0px, transparent 50%)`,
        }}
      />
      
      {/* Content Container */}
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, position: 'relative' }}>
        
        {/* Logo/Brand Header */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 40 }}>
          <div
            style={{
              height: 40,
              width: 40,
              backgroundColor: PRIMARY_START,
              borderRadius: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontSize: 24,
              fontWeight: 900,
              boxShadow: '0 4px 15px rgba(255, 107, 129, 0.5)',
              marginRight: 15
            }}
          >
            D
          </div>
          <span style={{ fontSize: 32, fontWeight: 700, color: TEXT_COLOR }}>
            DeSuite
          </span>
        </div>

        {/* Main Title */}
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: 'auto' }}>
          <h1
            style={{
              fontSize: 80,
              fontWeight: 900,
              marginBottom: 10,
              // Gradient Text Effect
              backgroundImage: `linear-gradient(135deg, ${PRIMARY_START}, ${PRIMARY_END})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent', // Fallback
              padding: 0,
              margin: 0,
            }}
          >
            {title}
          </h1>

          {/* Description */}
          <p
            style={{
              fontSize: 36,
              color: TEXT_COLOR,
              opacity: 0.7,
              marginTop: 10,
              maxWidth: 900
            }}
          >
            {description}
          </p>
        </div>
      </div>
      
      {/* Footer / Domain */}
      <div style={{ fontSize: 28, color: TEXT_COLOR, opacity: 0.5, marginTop: 'auto' }}>
        desuite.com
      </div>
    </div>
  );
};

export default OpenGraphImage;

// Example Usage/Export (adjust based on your framework):
// export const runtime = 'edge';
// export async function GET(request) { /* ... logic to render component ... */ }