 const express = require('express');
 const app = express();
 const port = 3000;
 
 app.use(express.json());
  
 let items = [
     { id: 1, name: "The Boy and the Heron"},
     { id: 2, name: "Howls Movies Castle"},
 ];
