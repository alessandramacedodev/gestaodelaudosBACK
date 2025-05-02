const supabase = require('../config/supabaseClient');

// Buscar todas as evidências
exports.getAllEvidences = async () => {
  const { data, error } = await supabase.from('evidences').select('*');
  if (error) throw error;
  return data;
};

// Buscar uma evidência pelo ID
exports.getEvidenceById = async (id) => {
  const { data, error } = await supabase
    .from('evidences')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data;
};

// Criar uma nova evidência
exports.createEvidence = async (evidenceData) => {
  const { data, error } = await supabase
    .from('evidences')
    .insert([evidenceData]);
  if (error) throw error;
  return data;
};

// Atualizar uma evidência existente
exports.updateEvidence = async (id, updates) => {
  const { data, error } = await supabase
    .from('evidences')
    .update(updates)
    .eq('id', id);
  if (error) throw error;
  return data;
};

// Deletar uma evidência
exports.deleteEvidence = async (id) => {
  const { data, error } = await supabase
    .from('evidences')
    .delete()
    .eq('id', id);
  if (error) throw error;
  return data;
};
