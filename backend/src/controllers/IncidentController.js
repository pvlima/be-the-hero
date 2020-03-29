const conn = require('../database/conn');
module.exports = {

  async index(req, res) {
    const { page = 1 } = req.query;
    const incidents = await conn('incidents')
      .join('ongs', 'incidents.ong_id', '=', 'ongs.id')
      .limit(5)
      .offset((page - 1) * 5)
      .select(["incidents.*", 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf']);

    const [count] = await conn('incidents').count('id', { as: 'count' });
    
    res.header('X-Total-Count', count['count']);

    return res.json(incidents);
  },

  async show(req, res) {
    const { id } = req.params;

    const incident = await conn('incidents').select('*')
      .where('id', id)
      .first();

    if(!incident) return res.status(404).json({ error: 'NotFound' });

    return res.json(incident);

  },

  async store(req, res) {

    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;

    const [id] = await conn('incidents').insert({title, description, value, ong_id});

    return res.json({ id });
  },

  async destroy(req, res) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;

    const incident = await conn('incidents')
      .where('id', id)
      .select('ong_id')
      .first();

    if(incident.ong_id !== ong_id) {
      return res.status(401).json({ error: 'Operation not permitted' });
    }

    await conn('incidents').where('id', id).delete();

    return res.status(204).send();
  }

};