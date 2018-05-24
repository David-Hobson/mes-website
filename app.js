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
    Post.find({}, function(err, allPosts){
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

//ROUTE - GET POSTS - Displays all the posts
app.get("/posts", function(req, res){
    Post.find({}, function(err, allPosts){
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

//ROUTE - POST POSTS - Creates a new post
app.post("/posts", function(req, res){
    
    //Create the new post object
    var newPost = {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        position: req.body.position,
        image: "/uploads/" + req.files.image.name
    };
    
    //Create the new post in the database
    Post.create(newPost, function(err, createdPost){
        if(err){
            console.log("ERROR DURING POST CREATION: " + err);
            res.redirect("/posts");
        }else{
            console.log("Added a new post!");
            
            //Checks to see if image has been uploaded
            if(req.files.image == undefined){
                //If there is no image, use default image specified
                newPost.image = "https://scontent.fykz1-1.fna.fbcdn.net/v/t31.0-8/12719090_10153940161648134_8548165327463917049_o.png?oh=d17b6829e1a43a272abe71de80b4eacb&oe=5AB901E3";
            }else{
                
                //Get the file extension for the uploaded image
                var imageExt = req.files.image.name.substring(req.files.image.name.lastIndexOf("."));
                
                //Move image to the uploads folder with new name which 'img' followed by the post id
                req.files.image.mv("./public/uploads/img" + createdPost._id + imageExt, function(err){
                    if(err){
                        console.log("Failed to upload image: " + err);    
                    }
                });
                
                //Update the newPost object with the new image name
                newPost.image = "/uploads/img" + createdPost._id + imageExt;
            }
            
            //Update the post in the database with the new name for the image
            Post.findByIdAndUpdate(createdPost._id, newPost, function(err, updatedPost){
                if(err){
                    console.log(err);
                }else{
                    //console.log(updatedPost);
                }
            });
            
            res.redirect("/posts");
        }
    });
    
});

//SERVER START
app.listen(3000, function(){
    console.log("McMaster Engineering Society Server has started...");
});