const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const router = express.Router();

// Conexão com o Supabase
const supabaseUrl = 'https://keimualjftjhdqjtljpq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlaW11YWxqZnRqaGRxanRsanBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyNTg1NTcsImV4cCI6MjA2MDgzNDU1N30.5UFN41Oa1fL9doenNIGVM3pGymjPJTuKutnQj4GGUmw';  
const supabase = createClient(supabaseUrl, supabaseKey);

// Nome da tabela
const tableName = 'users';

// Listar usuários com filtros por nome, email, perfil
router.get('/', async (req, res) => {
  const { nome, email, perfil } = req.query;
  let query = supabase.from(tableName).select('*');

  if (nome) query = query.ilike('nome', `%${nome}%`);
  if (email) query = query.ilike('email', `%${email}%`);
  if (perfil) query = query.eq('perfil', perfil);

  const { data, error } = await query;

  if (error) return res.status(400).json({ error: error.message });

  // Adiciona ações fictícias para cada usuário
  const dataWithActions = data.map(user => ({
    ...user,
    acoes: ['visualizar', 'relatorio'],
  }));

  res.json(dataWithActions);
});

// Buscar usuário por ID
router.get('/:id', async (req, res) => {
  const { data, error } = await supabase
    .from(tableName)
    .select('*')
    .eq('id', req.params.id)
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// Criar novo usuário
router.post('/', async (req, res) => {
  const { nome, email, perfil, status } = req.body;

  // Validação simples
  if (!nome || !email || !perfil) {
    return res.status(400).json({ error: 'Campos obrigatórios: nome, email, perfil' });
  }

  const { data, error } = await supabase
    .from(tableName)
    .insert([{ nome, email, perfil, status: status || 'pendente' }]);

  if (error) return res.status(400).json({ error: error.message });

  res.status(201).json(data);
});

// Atualizar usuário
router.put('/:id', async (req, res) => {
  const { data, error } = await supabase
    .from(tableName)
    .update(req.body)
    .eq('id', req.params.id);

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// Deletar usuário
router.delete('/:id', async (req, res) => {
  const { data, error } = await supabase
    .from(tableName)
    .delete()
    .eq('id', req.params.id);

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

module.exports = router;
