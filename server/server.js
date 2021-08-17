const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
app.use(cors());

require('./config/mongoose.config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const AllAuthorsRoutes = require('./routes/author.routes');
AllAuthorsRoutes(app);

app.listen(port, () => console.log(`Express listening on port: ${port}`));
