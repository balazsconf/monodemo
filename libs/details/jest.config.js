module.exports = {
  name: 'details',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/details',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
