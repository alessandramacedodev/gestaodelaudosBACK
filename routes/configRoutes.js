const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const router = express.Router();

const supabaseUrl = 'https://keimualjftjhdqjtljpq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlaW11YWxqZnRqaGRxanBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyNTg1NTcsImV4cCI6MjA2MDgzNDU1N30.5UFN41Oa1fL9doenNIGVM3pGymjPJTuKutnQj4GGUmw';
const supabase = createClient(supabaseUrl, supabaseKey);

const tableName = 'configuracoes';

// Listar configurações
router.get('/', async (req, res) => {
  const { data, error } = await supabase.from(tableName).select('*');
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// Atualizar configuração por chave
router.put('/:chave', async (req, res) => {
  const { data, error } = await supabase.from(tableName).update({ valor: req.body.valor }).eq('chave', req.params.chave);
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

module.exports = router;
