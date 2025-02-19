#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatFileSize = formatFileSize;
/**
 * Formats a file size (in bytes) into a human-readable string.
 * @param bytes - The file size in bytes.
 * @param decimalPrecision - Number of decimals in the result (default is 2).
 * @returns Formatted file size with the appropriate unit.
 */
function formatFileSize(bytes, decimalPrecision) {
    if (decimalPrecision === void 0) { decimalPrecision = 2; }
    if (bytes === 0)
        return '0 Bytes';
    var k = 1024;
    var dm = decimalPrecision < 0 ? 0 : decimalPrecision;
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    var i = Math.floor(Math.log(bytes) / Math.log(k));
    console.log(parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]);
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
