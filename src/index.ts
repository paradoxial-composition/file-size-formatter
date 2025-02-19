#!/usr/bin/env node

/**
 * Formats a file size (in bytes) into a human-readable string.
 * @param bytes - The file size in bytes.
 * @param decimalPrecision - Number of decimals in the result (default is 2).
 * @returns Formatted file size with the appropriate unit.
 */
export function formatFileSize(bytes: number, decimalPrecision: number = 2): string {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const dm = decimalPrecision < 0 ? 0 : decimalPrecision;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
  