module.exports = {
  name: 'list-item-shared',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/list-item-shared',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
