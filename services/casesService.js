const supabase = require('../config/supabaseClient');

// Buscar todos os casos
exports.getAllCases = async () => {
  const { data, error } = await supabase.from('cases').select('*');
  if (error) throw error;
  return data;
};

// Buscar um caso por ID
exports.getCaseById = async (id) => {
  const { data, error } = await supabase
    .from('cases')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data;
};

// Criar um novo caso
exports.createCase = async (caseData) => {
  const { data, error } = await supabase
    .from('cases')
    .insert([caseData]);
  if (error) throw error;
  return data;
};

// Atualizar um caso
exports.updateCase = async (id, updates) => {
  const { data, error } = await supabase
    .from('cases')
    .update(updates)
    .eq('id', id);
  if (error) throw error;
  return data;
};

// Deletar um caso
exports.deleteCase = async (id) => {
  const { data, error } = await supabase
    .from('cases')
    .delete()
    .eq('id', id);
  if (error) throw error;
  return data;
};

