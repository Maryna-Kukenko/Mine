const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../modules/Item');

//@rout GET api/items
//@desc Get All Items
//@access Public
router.get('/', (req, res) => {
  Item.find()
    .sort({title:1})
    .then(items => res.json(items))
});

//@rout POST api/items
//@desc Create An Item
//@access Public
router.post('/', (req, res, next) => {
  const data = req.body;

  const newItem = new Item({
    title: data.title,
    release_year: data.release_year,
    format: data.format,
    stars: data.stars
  });

  newItem.save()
    .then(item => res.json(item));
  }
);

//@rout DELETE api/items/:id
//@desc Delete An Item
//@access Public
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  Item.findById(id)
    .then(item => item.remove().then(() => res.json({success:true})))
    .catch(err => res.status(404).json({success: false}))
});

module.exports = router;