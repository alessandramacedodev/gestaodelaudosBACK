const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const router = express.Router();

const supabaseUrl = 'https://keimualjftjhdqjtljpq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlaW11YWxqZnRqaGRxanBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyNTg1NTcsImV4cCI6MjA2MDgzNDU1N30.5UFN41Oa1fL9doenNIGVM3pGymjPJTuKutnQj4GGUmw';
const supabase = createClient(supabaseUrl, supabaseKey);

const tableName = 'evidences';

// Listar evidências
router.get('/', async (req, res) => {
  const { data, error } = await supabase.from(tableName).select('*');
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// Buscar evidência por ID
router.get('/:id', async (req, res) => {
  const { data, error } = await supabase.from(tableName).select('*').eq('id', req.params.id).single();
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// Criar nova evidência
router.post('/', async (req, res) => {
  const { data, error } = await supabase.from(tableName).insert([req.body]);
  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
});

// Atualizar evidência
router.put('/:id', async (req, res) => {
  const { data, error } = await supabase.from(tableName).update(req.body).eq('id', req.params.id);
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// Deletar evidência
router.delete('/:id', async (req, res) => {
  const { data, error } = await supabase.from(tableName).delete().eq('id', req.params.id);
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

module.exports = router;
