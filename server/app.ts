import * as express from 'express';
import * as path from 'path';

const app = express();
const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => console.log(`Server started on port ${port}`));
