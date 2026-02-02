import { version as pkgVersion } from '../../package.json';
export const version = process.env.VITEST ? 'test-version' : pkgVersion;
