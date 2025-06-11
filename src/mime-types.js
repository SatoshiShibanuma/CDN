const path = require('path');

/**
 * Get MIME type for a given file path
 * @param {string} filePath - Path to the file
 * @returns {string} MIME type of the file
 */
function getMimeType(filePath) {
  // Common file extensions and their MIME types
  const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf',
    '.txt': 'text/plain',
    '.mp4': 'video/mp4',
    '.mp3': 'audio/mpeg',
    '.xml': 'application/xml',
    '.zip': 'application/zip',
    '.webp': 'image/webp',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf'
  };

  // Extract file extension
  const ext = path.extname(filePath).toLowerCase();
  
  // Return MIME type or default to 'application/octet-stream'
  return mimeTypes[ext] || 'application/octet-stream';
}

module.exports = { getMimeType };