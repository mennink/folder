'use strict';

describe('Service: FolderRegelRepository', function () {

  // load the service's module
  beforeEach(module('folderApp'));

  // instantiate service
  var FolderRegelRepository;
  beforeEach(inject(function (_FolderRegelRepository_) {
    FolderRegelRepository = _FolderRegelRepository_;
  }));

  it('should do something', function () {
    expect(!!FolderRegelRepository).toBe(true);
  });

});
