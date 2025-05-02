const supabase = require('../config/supabaseClient');

exports.getBancoInfo = async () => {
  const { data, error } = await supabase.from('banco_odonto_legal').select('*');
  if (error) throw error;
  return data;
};
