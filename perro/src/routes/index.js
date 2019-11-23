const express = require('express');
const router = express.Router();

const Dog = require('../models/dogs');

router.get('/', async (req,res)=>{
    const dogs = await Dog.find();
    res.render('index', {
        dogs
    });
});

router.post('/add', async (req, res)=>{
    const dog = new Dog(req.body);
    await dog.save();
    res.redirect('/');
});

router.get('/edit/:id', async(req, res) => {
    const { id } = req.params;
    const dog = await Dog.findById(id);
    res.render('edit', {
        dog
    }); 
})

router.post('/edit/:id', async (req, res) =>{
    const { id } = req.params;
    await Dog.update({_id: id}, req.body);
    res.redirect('/');
});

router.get('/delete/:id', async (req,res) => {
    const { id } = req.params;
    await Dog.remove({_id: id});
    res.redirect('/');
});

module.exports = router;