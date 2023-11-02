const path = require('path');

module.exports = {
  resolveSnapshotPath: (testPath, snapshotExtension) =>
    path.join(process.cwd(), '__snapshots__', path.basename(testPath) + snapshotExtension),
  resolveTestPath: (snapshotFilePath, snapshotExtension) =>
    path.join(process.env.TEST_ROOT, path.basename(snapshotFilePath, snapshotExtension)),
  testPathForConsistencyCheck: path.join(process.env.TEST_ROOT, 'example.test.ts'),
};
