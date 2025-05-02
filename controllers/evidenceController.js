const evidenceService = require('../services/evidenceService');

exports.getEvidences = async (req, res) => {
  try {
    const evidences = await evidenceService.getEvidences();
    return res.status(200).json(evidences);
  } catch (error) {
    console.error('Erro ao buscar evidências:', error);
    return res.status(500).json({
      error: 'Erro interno ao buscar evidências.',
      details: error.message
    });
  }
};
