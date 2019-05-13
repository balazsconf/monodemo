module.exports = {
  name: 'monodemo-phone',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/monodemo-phone/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
