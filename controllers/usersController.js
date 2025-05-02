const { createClient } = require('@supabase/supabase-js');

// Conexão com Supabase
const supabaseUrl = 'https://keimualjftjhdqjtljpq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlaW11YWxqZnRqaGRxanRsanBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyNTg1NTcsImV4cCI6MjA2MDgzNDU1N30.5UFN41Oa1fL9doenNIGVM3pGymjPJTuKutnQj4GGUmw';
const supabase = createClient(supabaseUrl, supabaseKey);

const tableName = 'users';

// Buscar usuários com filtros opcionais
exports.getUsers = async (req, res) => {
  try {
    const { nome, email, perfil } = req.query;

    let query = supabase.from(tableName).select('*');

    if (nome) query = query.ilike('nome', `%${nome}%`);
    if (email) query = query.ilike('email', `%${email}%`);
    if (perfil) query = query.eq('perfil', perfil);

    const { data, error } = await query;

    if (error) {
      console.error('Erro Supabase:', error.message);
      return res.status(500).json({ error: 'Erro ao buscar usuários.' });
    }

    const formattedUsers = data.map(user => ({
      nome: user.nome,
      email: user.email,
      perfil: user.perfil,
      status: user.status || 'pendente',
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
