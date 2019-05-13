module.exports = {
  name: 'list-page',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/list-page',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
