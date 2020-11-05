const express = require('express');
const router = express.Router();
const Posts = require("./postDb")




router.get('/', (req, res) => {
  // do your magic!
  Posts.get()
    .then(posts => {
      res.status(201).json(posts)
    })
    .catch(err => {
      console.log(err)
    })
  });

router.get('/:id', validatePostId, (req, res) => {
  // do your magic!
  Posts.getById(req.params.id)
  .then(post => {
    res.status(201).json(post)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({error:"Can't find your post"})
  })
});

router.delete('/:id',validatePostId, (req, res) => {
  // do your magic!
  Posts.remove(req.params.id)
  .then(post => {
    res.status(204).json(post)
  })
  .catch(err => {
    console.log(err)
  })
}); 

router.put('/:id', (req, res) => {
  // do your magic!
  const changes = req.body;
  Posts.update(req.params.id, changes)
    .then(update => {
      res.status(200).json(updated)
    })
    .catch(err => {
      console.log(err)
    })
});




function validatePostId(req, res, next) {
  // do your magic!
  Posts.getById(req.params.id)
  .then(resource => {
    if(resource){
      req.post = resource;
      next();
    } else {
      res.status(400).json({message:"Trying entering another post"})
    }
  })
  .catch(err => {
    console.log(err)
  })
}


module.exports = router;
