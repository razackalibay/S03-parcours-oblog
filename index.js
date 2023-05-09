// bonus 1.3.4 faits
const express= require('express')
const router = require("./router"); 


const PORT= 8181;

const app = express()

// moteur views
app.set('view engine', 'ejs')
//dossier views
app.set('views', 'views');
// dossier static
app.use(express.static('static'))

app.use(router);





app.listen(PORT, () =>{ 
    console.log(`http://localhost:${PORT}`);
})