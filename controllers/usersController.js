const usersService = require('../services/usersService');

exports.getUsers = async (req, res) => {
  try {
    // Extrair filtros da query string
    const { nome, email, perfil } = req.query;

    // Obter usuários com possíveis filtros
    const users = await usersService.getUsers({ nome, email, perfil });

    // Formatar dados (exemplo básico)
    const formattedUsers = users.map(user => ({
      nome: user.nome,
      email: user.email,
      perfil: user.perfil,
      status: user.status || 'pendente', // valor padrão caso não esteja definido
      acoes: {
        visualizar: `/usuarios/${user.id}`,
        relatorio: `/usuarios/${user.id}/relatorio`
      }
    }));

    return res.status(200).json(formattedUsers);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    return res.status(500).json({ error: 'Erro interno ao buscar usuários.' });
  }
};
