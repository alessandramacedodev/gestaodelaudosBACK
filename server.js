const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Importação das rotas
const usersRoutes = require('./routes/usersRoutes');
const casesRoutes = require('./routes/casesRoutes');
const evidenceRoutes = require('./routes/evidenceRoutes');
const laudosRoutes = require('./routes/laudosRoutes');
const bancoRoutes = require('./routes/bancoRoutes');
const configRoutes = require('./routes/configRoutes');

// Uso das rotas
app.use('/api/users', usersRoutes);
app.use('/api/cases', casesRoutes);
app.use('/api/evidences', evidenceRoutes);
app.use('/api/laudos', laudosRoutes);
app.use('/api/banco', bancoRoutes);
app.use('/api/config', configRoutes);

// Rota inicial
app.get('/', (req, res) => {
  res.send('🚀 API Rodando!');
});

// Porta
const PORT = process.env.PORT || 3001;
app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
