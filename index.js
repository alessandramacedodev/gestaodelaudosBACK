const express = require('express');
const cors = require('cors');
const usuariosRoutes = require('./routes/usersRoutes'); 

const app = express();
app.use(cors());
app.use(express.json());

// Usa as rotas corretamente
app.use('/usuarios', usuariosRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
