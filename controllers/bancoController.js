const bancoService = require('../services/bancoService');

exports.getBancoInfo = async (req, res) => {
  try {
    const info = await bancoService.getBancoInfo();
    if (!info) {
      return res.status(404).json({ error: 'Nenhuma informação encontrada no banco odonto-legal.' });
    }
    res.status(200).json(info);
  } catch (error) {
    console.error('Erro ao buscar informações do banco odonto-legal:', error);
    res.status(500).json({ error: 'Erro interno ao buscar informações do banco odonto-legal.' });
  }
};
