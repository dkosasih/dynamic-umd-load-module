module.exports = {
  name: 'public-shell',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/public-shell',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
