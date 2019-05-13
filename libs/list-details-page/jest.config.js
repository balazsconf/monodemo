module.exports = {
  name: 'list-details-page',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/list-details-page',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
