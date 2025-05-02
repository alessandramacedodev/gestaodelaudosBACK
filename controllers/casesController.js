const casesService = require('../services/casesService');

exports.getCases = async (req, res) => {
  try {
    const cases = await casesService.getCases();
    res.status(200).json(cases);  
  } catch (error) {
    console.error('Erro ao buscar casos:', error);  
    res.status(500).json({ error: 'Erro interno ao buscar casos.' });
  }
};
