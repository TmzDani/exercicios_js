

app.get('/item', (req, res) => {
    const id = parseInt(req.params.id,10);

    const item = items.find(i => i.id === id);

    if (!item) {
        res.status(404).json({ error: 'item não encontrado.'});
    } else {
        res.status(200).json(items);
    }
});
