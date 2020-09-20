module.exports = {
  name: 'public',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/public',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
