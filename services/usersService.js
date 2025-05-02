const supabase = require('../config/supabaseClient');

// Create
exports.createUser = async (userData) => {
  const { data, error } = await supabase.from('users').insert([userData]);
  if (error) throw error;
  return data;
};

// Read
exports.getAllUsers = async () => {
  const { data, error } = await supabase.from('users').select('*');
  if (error) throw error;
  return data;
};

exports.getUserById = async (id) => {
  const { data, error } = await supabase.from('users').select('*').eq('id', id).single();
  if (error) throw error;
  return data;
};

// Update
exports.updateUser = async (id, updates) => {
  const { data, error } = await supabase.from('users').update(updates).eq('id', id);
  if (error) throw error;
  return data;
};

// Delete
exports.deleteUser = async (id) => {
  const { data, error } = await supabase.from('users').delete().eq('id', id);
  if (error) throw error;
  return data;
};
