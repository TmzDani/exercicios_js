const express = require('express');
 const app = express();
 const port = 3000;
 
 app.use(express.json());
 
 
 let items = [
     { id: 1, name: "The Boy and the Heron"},
     { id: 2, name: "Howls Moving Vastle"},
 ];
 
 app.get('/item', (req, res) => {
     const id = parseInt(req.params.id,10);
 
     const item = items.find(i => i.id === id);
 
     if (!item) {
         res.status(404).json({ error: 'item não encontrado.'});
     } else {
         res.status(200).json(items);
     }
 });
 
 app.post('/item', (req, res) => {
    
     const newItem = { id: items.length + 1, ...req.body}
     const { name } = req.body;
     
     if (!name || typeof name !== 'string' || name.length < 3) {
         res.status(400).json({ Error: 'O name deve ter pelo menos 3 letras meu kirido.'});
     } else {
         res.status(201).json({message: 'Item Criado', item:{name}});
     }
    
     items.push(newItem);
 });
 
 
 app.delete('/item/:id', (req, res) => {
     const id = parseInt(req.params.id);
     const index = items.findIndex(item => item.id === id);
     if(index !== -1) {
         
         items.splice(index, 1);
         res.status(200).json({mensage: "Item removido"});
     } else {
         res.status(404).json({mensage: "Item não encontrado"});
     }
 });
 
 app.put('/item/:id', (req, res) => {
     const id = parseInt(req.params.id);
     const index = items.findIndex(item => item.id === id);
     if (index !== -1) {
         items[index] = {id, ...req.body}
         res.status(200).json(items[index]);
     } else {
         res.status(404).json({ message: "Item não encontrado!"});
     }
 
 });
 
 app.patch('/item/:id', (req, res) => {
     const id = parseInt(req.params.id,10);
     const {name} = req.body;
 
     const item = items.find (i => i.id === id);
 
     if (!item) {
         res.status(404).json({ error: 'item não encontrado.'});
     }
 
     if (name && (typeof name !== 'string' || name.length < 3)){
         res.status(400).json({ error: 'O name deve ter pelo menos 3 letras meu kirido.'})
     }
 
     if (name){
         item.name = name;
     }
 
     res.json({message:'item atualizado', item });
 });
 
 app.delete('/item', (req, res) => {
     item = [];
     res.json({message: 'itens excluidos.'});
 });
 
 app.listen(port, () => {
     console.log(`O server esta rodando no caminho http://localhost:${port}`);
 })
 
 app.get('/item/count', (req, res) => {
     const count = item.length;
     res.json({ count });
 });
 
