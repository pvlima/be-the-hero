const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID with 8 characters', () => {
  it('should generate an unique ID', () => {
    const id = generateUniqueId();
    expect(id).toHaveLength(8);
  });
});