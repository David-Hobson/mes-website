//Require Packages
var express = require("express");
var fileUpload = require("express-fileupload");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var Post = require("./models/post");
var Team = require("./models/team");
var seedDB = require("./seeds");


//Use statements for the express application
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(fileUpload());

//Set statements for the express application
app.set("view engine", "ejs");

//Mongodb connection
mongoose.connect("mongodb://localhost/mac_eng_society");

//Seed the data base with sample data
seedDB();

//ROUTE - GET LANDING - Displays the landing page
app.get("/", function(req, res){
    //Sorts posts from newest to oldest and sends it to landing page
    Post.find().sort({created: -1}).exec(function(err, allPosts){
        if(err){
            console.log(err);
            res.redirect("/");
        }else{
            Team.find({}, function(err, allTeams){
                if(err){
                    console.log(err);
                    res.redirect("/");
                }else{
                    res.render("landing", {posts: allPosts, teams: allTeams});
                }
            })
            
        }
    });
});

//ROUTE - GET ABOUT - Displays the about page
app.get("/about", function(req, res){
    res.render("about");
});

//ROUTE - GET POSTS - Displays all the posts
app.get("/posts", function(req, res){
    //Sorts posts from newest to oldest
    Post.find().sort({created: -1}).exec(function(err, allPosts){
        if(err){
            res.redirect("/");
        }else{
            res.render("posts", {posts: allPosts});   
        }
    });
});

//ROUTE - GET POSTS/NEW - Displays the new post form
app.get("/posts/new", function(req, res){
    res.render("new");
});

//ROUTE - GET POST - Displays a detailed post
app.get("/posts/:id", function(req, res){
    Post.findById(req.params.id).exec(function(err, foundPost){
        if(err){
            console.log("Error when finding post: " + err);
        }else{
            res.render("show.ejs", {post: foundPost});
        }
    });
});

//ROUTE - DELETE POST - Deletes a post
app.delete("/posts/:id",function(req, res){
    Post.findByIdAndRemove(req.params.id, function(err){
       if(err){
           res.redirect("/posts");
       }else{
           res.redirect("/posts");
       }
   }); 
});

//ROUTE - GET EDIT POST - Displays the edit post form
app.get("/posts/:id/edit", function(req, res){
    Post.findById(req.params.id, function(err, foundPost){
           if(err){
               res.redirect("/posts");
           }else{
                res.render("edit", {post: foundPost});    
           } 
    }); 
});

//ROUTE - PUT POST - Updates the currently edited post
app.put("/posts/:id", function(req, res){
    
    //Create the edited post object
    var editedPost = {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        position: req.body.position,
    };

    //Checks if the edited post has a new image, keeps the default if not
    if(req.files.image != undefined){
        let newImageName = "img-" + req.params.id + req.files.image.name.substring(req.files.image.name.lastIndexOf("."));

        //Move image to the uploads folder with new name which 'img' followed by the post id
        req.files.image.mv("./public/uploads/" + newImageName, function(err){
            if(err){
                console.log("Failed to upload image: " + err);    
            }
        });
        
        //Update the newPost object with the new image name
        editedPost.image = "/uploads/" + newImageName;
    }

    Post.findByIdAndUpdate(req.params.id, editedPost, function(err, updatedPost){
       if(err){
           res.redirect("/posts");
       }else{
           res.redirect("/posts/" + req.params.id)
       }
   }); 
});

//ROUTE - POST POSTS - Creates a new post
app.post("/posts", function(req, res){

    //Create the new post object
    var newPost = {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        position: req.body.position,
        image: ""
    };
    
    //Create the new post in the database
    Post.create(newPost, function(err, createdPost){
        if(err){
            console.log("ERROR DURING POST CREATION: " + err);
            res.redirect("/posts");
        }else{         
            //Create new image name
            let newImageName = "img-" + createdPost._id + req.files.image.name.substring(req.files.image.name.lastIndexOf("."));

            //Move image to the uploads folder with new name which 'img' followed by the post id
            req.files.image.mv("./public/uploads/" + newImageName, function(err){
                if(err){
                    console.log("Failed to upload image: " + err);    
                }
            });
            
            //Update the newPost object with the new image name
            newPost.image = "/uploads/" + newImageName;
            
            //Update the post in the database with the new name for the image
            Post.findByIdAndUpdate(createdPost._id, newPost, function(err, updatedPost){
                if(err){
                    console.log(err);
                }else{
                    //console.log(updatedPost);
                }
            });

            console.log("Added a new post!");
            res.redirect("/posts");
        }
    });
    
});

//SERVER START
app.listen(3000, function(){
    console.log("McMaster Engineering Society Server has started...");
});