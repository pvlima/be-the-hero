const conn = require('../database/conn');
module.exports = {

  async create(req, res) {
    const { id = '0' } = req.body;

    const ong = await conn('ongs')
      .where('id', id)
      .select('name')
      .first();

    if(!ong) return res.status(400).json({ error: 'No ONG found with this ID' });

    return res.json(ong);
  },
  
}