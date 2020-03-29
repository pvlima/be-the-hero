const request = require('supertest');
const app = require('../../src/index');
const conn = require('../../src/database/conn');

describe('ONG', () => {

  beforeEach(async () => {
    await conn.migrate.rollback();
    await conn.migrate.latest();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/api/ongs')
      .send({
        name: "ONG TEST",
        email: "email@test.com",
        whatsapp: "88994721022",
        city: "Faveira",
        uf: "CE"
      });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });

  afterAll(async () => {
    await conn.destroy();
  });

});