const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://keimualjftjhdqjtljpq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlaW11YWxqZnRqaGRxanRsanBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyNTg1NTcsImV4cCI6MjA2MDgzNDU1N30.5UFN41Oa1fL9doenNIGVM3pGymjPJTuKutnQj4GGUmw';

const supabase = createClient(supabaseUrl, supabaseKey);

exports.getConfig = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('configuracoes')
      .select('chave, valor');

    if (error) {
      console.error('Erro ao buscar configurações:', error);
      return res.status(500).json({ error: 'Erro ao buscar configurações.' });
    }

    const config = {};
    data.forEach(item => {
      config[item.chave] = item.valor;
    });

    res.json({ message: 'Configurações carregadas com sucesso.', config });
  } catch (err) {
    console.error('Erro inesperado:', err);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};
