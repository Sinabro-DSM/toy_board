const jwt = require('jsonwebtoken');
const Post = require('../../model/post');

const write = (req,res)=>{
    let newPost = new Post();
    newPost.title = req.body.title;
    newPost.content = req.body.content;
    newPost.id = req.token.id;
    newPost.save((err)=>{
        if(err){
            console.log(err);
            res.status(500).end();
            return;
        }
        else{
            res.status(200).end();
        }
    })
}
const read = (req,res)=>{
    Post.find((err,posts)=>{
        if(err) {
            console.log(err);
            res.status(404).end();
            return;
        }
        else{
            res.json(posts);
        }
    });
}
const updatePost = (req,res)=>{
    Post.findOne({_id:req.body._id},(err,update)=>{
        if(err) {
            res.status(500).json({messege:'sorry'}).end();
            console.log(err);
            return;
        }
        if(!update) res.status(404).json({messege:'no Post'}).end();
        if(update.id==req.token.id){
            Post.update({_id:req.body._id},{$set:{content:req.body.content}},(err,output)=>{
                if(err) {
                    res.status(500).json({error:'database failure'}).end();
                    console.log(err);
                    return;
                }

                res.status(200).json({messege:'success'}).end();
            });
        }
        else res.status(404).json({messege:'gg'}).end();
    });
}
const deletePost=(req, res)=>{
    Post.findOne({_id:req.body._id},(err,delPost)=>{
        if(err) {
            res.status(500).json({messege:'sorry'}).end();
            console.log(err);
            return;
        }
        if(!delPost) {
            res.status(404).json({messege:'no Post'}).end();
            console.log(err);
            return;
        }
        if(delPost.id==req.token.id){
            Post.remove({_id:req.body._id},(err,output)=>{
                if(err) {
                    res.status(500).json({messege:'error'}).end();
                    return;
                }
                res.status(200).json({messege:"success"}).end();
            });
        }
    });
}

exports.write = write;
exports.read = read;
exports.updatePost = updatePost;
exports.deletePost = deletePost;
