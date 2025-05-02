const supabase = require('../config/supabaseClient');

// Buscar todas as configurações
exports.getAllConfigs = async () => {
  const { data, error } = await supabase
    .from('configuracoes')
    .select('*');
  if (error) throw error;
  return data;
};

// Buscar configuração por chave
exports.getConfigByKey = async (chave) => {
  const { data, error } = await supabase
    .from('configuracoes')
    .select('*')
    .eq('chave', chave)
    .single();
  if (error) throw error;
  return data;
};

// Atualizar configuração
exports.updateConfig = async (chave, valor) => {
  const { data, error } = await supabase
    .from('configuracoes')
    .update({ valor, updated_at: new Date() })
    .eq('chave', chave);
  if (error) throw error;
  return data;
};

// Deletar configuração
exports.deleteConfig = async (chave) => {
  const { data, error } = await supabase
    .from('configuracoes')
    .delete()
    .eq('chave', chave);
  if (error) throw error;
  return data;
};
