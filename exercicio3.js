app.post('/item', (req, res) => {
    const newItem = { id: items.length + 1, ...req.body}
    const { name } = req.body;
    
    if (!name || typeof name !== 'string' || name.length < 3) {
        res.status(400).json({ Error: 'O campo nome deve ter pelo menos 3 caracteres meu kirido.'});
    } else {
        res.status(201).json({message: 'Item Criado com sucesso', item:{name}});
    }
       //push insere um novo item no vetor...
    items.push(newItem);
});
