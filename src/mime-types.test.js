import { describe, it, expect } from 'vitest';
import { getMimeType } from './mime-types';

describe('getMimeType', () => {
  it('should return correct MIME type for known extensions', () => {
    expect(getMimeType('file.html')).toBe('text/html');
    expect(getMimeType('file.css')).toBe('text/css');
    expect(getMimeType('file.js')).toBe('application/javascript');
    expect(getMimeType('file.png')).toBe('image/png');
    expect(getMimeType('file.jpg')).toBe('image/jpeg');
    expect(getMimeType('file.pdf')).toBe('application/pdf');
  });

  it('should handle uppercase extensions', () => {
    expect(getMimeType('file.HTML')).toBe('text/html');
    expect(getMimeType('file.PNG')).toBe('image/png');
  });

  it('should return default MIME type for unknown extensions', () => {
    expect(getMimeType('file.xyz')).toBe('application/octet-stream');
    expect(getMimeType('file')).toBe('application/octet-stream');
  });

  it('should work with complex file paths', () => {
    expect(getMimeType('/path/to/file.json')).toBe('application/json');
    expect(getMimeType('C:\\Users\\example\\file.txt')).toBe('text/plain');
  });
});