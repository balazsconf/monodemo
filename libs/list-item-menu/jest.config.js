module.exports = {
  name: 'list-item-menu',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/list-item-menu',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
