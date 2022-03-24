
const express= require('express')
const cors= require('cors')
const dotenv= require('dotenv')
const restaurantsRoute= require('./routes/restaurantsRoute.cjs')

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/restaurants', restaurantsRoute)
app.listen(port, () => console.log(`server is listening on: ${port}`));

