const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefs =require('./data/chef.json');
const recipes =require('./data/recipes.json');

app.use(cors());

app.get('/', (req, res)=>{
    res.send('recipes is running')
})

app.get('/chefs', (req, res)=>{
    res.send(chefs)
})

app.get('/recipes', (req, res) =>{
    res.send(recipes)
})

app.get('/recipes/:id', (req, res) =>{
    const id =req.params.id;
    const selectedRecipes =  recipes.find(r=>r._id ===id);
    res.send(selectedRecipes);
})
app.get('/chefs/:id', (req, res) =>{
    const id =parseInt(req.params.id);
    const chefCatagory =  recipes.filter(r=>parseInt(r.category_id) ===id);
    res.send(chefCatagory);
})

app.listen(port, ()=>{
    console.log(`Recipes api is running on port: ${port}`)
})

