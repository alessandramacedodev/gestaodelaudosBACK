const supabase = require('../config/supabaseClient');

// CREATE
exports.createLaudo = async (laudoData) => {
  const { data, error } = await supabase.from('laudos').insert([laudoData]);
  if (error) throw error;
  return data;
};

// READ - Buscar todos
exports.getAllLaudos = async () => {
  const { data, error } = await supabase.from('laudos').select('*');
  if (error) throw error;
  return data;
};

// READ - Buscar por ID
exports.getLaudoById = async (id) => {
  const { data, error } = await supabase.from('laudos').select('*').eq('id', id).single();
  if (error) throw error;
  return data;
};

// UPDATE
exports.updateLaudo = async (id, updates) => {
  const { data, error } = await supabase.from('laudos').update(updates).eq('id', id);
  if (error) throw error;
  return data;
};

// DELETE
exports.deleteLaudo = async (id) => {
  const { data, error } = await supabase.from('laudos').delete().eq('id', id);
  if (error) throw error;
  return data;
};

