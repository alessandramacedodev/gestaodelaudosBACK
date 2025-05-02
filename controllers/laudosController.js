const laudosService = require('../services/laudosService');

exports.getLaudos = async (req, res) => {
  try {
    const laudos = await laudosService.getLaudos();
    return res.status(200).json(laudos);
  } catch (error) {
    console.error('Erro ao buscar laudos:', error); // Log para debug
    return res.status(500).json({
      error: 'Erro interno ao buscar laudos.',
      details: error.message || error
    });
  }
};

