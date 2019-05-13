module.exports = {
  name: 'list',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/list',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
