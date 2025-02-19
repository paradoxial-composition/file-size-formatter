# File Size Formatter

A simple utility to format file sizes into human-readable formats (e.g., `1024 bytes` → `1 KB`). Lightweight and dependency-free.

## Features

- **Multiple Units:** Supports Bytes, KB, MB, GB, etc.
- **Custom Precision:** Customize the number of decimals.
- **Zero Dependencies:** No extra libraries required.

## Installation

Install via npm:

```bash
npm install simple-file-size-formatter
```

## Usage

Import the function and use it in your project:

```typescript
import { formatFileSize } from 'simple-file-size-formatter';

const sizeInBytes = 1024;
console.log(formatFileSize(sizeInBytes)); // Output: "1 KB"
```

Customize the decimal precision:

```typescript
const sizeInBytes = 1234567;
console.log(formatFileSize(sizeInBytes, 3)); // Output: "1.177 MB"
```

## API

### `formatFileSize(bytes: number, decimalPrecision?: number): string`

- **bytes:** File size in bytes.
- **decimalPrecision:** (Optional) Number of decimals (default is 2).

Returns a formatted string with the appropriate unit.

## License

Licensed under the MIT License.
