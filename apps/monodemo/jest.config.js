module.exports = {
  name: "monodemo",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/monodemo/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
