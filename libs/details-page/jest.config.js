module.exports = {
  name: 'details-page',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/details-page',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
