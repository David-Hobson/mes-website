//Require Packages
var express = require("express");
var fileUpload = require("express-fileupload");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var Post = require("./models/post");
var Team = require("./models/team");
<<<<<<< HEAD
var Council = require("./models/council");
var User = require("./models/user");
=======
var seedDB = require("./seeds");

>>>>>>> master

//Use statements for the express application
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(fileUpload());
<<<<<<< HEAD
app.use(expressSession({
    secret: process.env.SECRET_PHRASE,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});

=======
>>>>>>> master

//Set statements for the express application
app.set("view engine", "ejs");

//Mongodb connection
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds151382.mlab.com:51382/mac_eng_society`);

<<<<<<< HEAD

passport.use(new LocalStrategy(User.authenticate()));

//Serialize the users
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

aws.config.region = "us-east-2";
aws.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_ID
});

const S3_BUCKET = process.env.S3_BUCKET

//=== ROUTES ===

=======
>>>>>>> master
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

<<<<<<< HEAD
//ROUTE - GET ABOUT - Displays the about page
app.get("/about", function(req, res){
    res.render("about");
});

//ROUTE - GET TRADITIONS - Displays the traditions page
app.get("/traditions", function(req, res){
    res.render("traditions");
});

//ROUTE - GET MESCARD - Displays the MES card page
app.get("/mescard", function(req, res){
    res.render("mescard");
});

//ROUTE - GET LIBRARY - Displays the textbook library page
app.get("/library", function(req, res){
    res.render("library");
});

//ROUTE - GET STUDENTSPACE - Displays the student space page
app.get("/studentspace", function(req, res){
    res.render("studentspace");
});

//ROUTE - GET PUBLICATIONS - Displays the publications page
app.get("/publications", function(req, res){
    res.render("publications");
});

//ROUTE - GET RENTALS - Displays the rentals page
app.get("/rentals", function(req, res){
    res.render("rentals");
});

//ROUTE - GET FUNDING - Displays the funding page
app.get("/funding", function(req, res){
    res.render("funding");
});

//ROUTE - GET MACLAB - Displays the MACLAB page
app.get("/maclab", function(req, res){
    res.render("maclab");
});

//ROUTE - GET ECCS - Displays the ECCS page
app.get("/eccs", function(req, res){
    res.render("eccs");
});

//ROUTE - GET HATCHBOOKING - Displays the hatch booking page
app.get("/hatchbooking", function(req, res){
    res.render("hatchbooking");
});

//ROUTE - GET CONTACT - Displays the contacts page
app.get("/contact", function(req, res){
    res.render("contact");
});

//ROUTE - GET CONTACT - Displays the finances page
app.get("/finances", function(req, res){
    res.render("finances");
});

//ROUTE - GET GOVERNINGDOCS - Displays the governing documents page
app.get("/governingdocs", function(req, res){
    res.render("governingdocs");
});

//ROUTE - GET SRA - Displays the SRA engineering page
app.get("/sra", function(req, res){
    res.render("sra");
});

//ROUTE - GET COUNCIL - Displays the council page
app.get("/council", function(req, res){

    Council.find({}, function(err, allCouncil){
        if(err){
            console.log("Error loading executives...");
        }else{
            let execResults = allCouncil.filter(member => member.rank == "EXEC");
            let avpResults = allCouncil.filter(member => member.rank == "AVP");
            let depResults = allCouncil.filter(member => member.rank == "DEP");
            
            res.render("council", {executives: execResults, avps: avpResults, deps: depResults});
        }
    });
});

//ROUTE - GET LOGIN - Displays the login page
app.get("/login", function(req, res){
    res.render("login");
});

//ROUTE - POST LOGIN - Logins the user in on success
app.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
}), function(req, res){
   
});

//ROUTE - GET LOGOUT - Logs the user out
app.get("/logout", function(req, res){
    req.logout();
    res.redirect("back");
});

//ROUTE - GET REGISTER - Displays the register page
app.get("/register", checkAdmin, function(req, res){
    res.render("register");
});

//ROUTE - POST REGISTER - Register the user for login
app.post("/register", function(req, res){
    User.register(new User({username: req.body.username, name: req.body.name, position: req.body.position}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register");
        }

        passport.authenticate("local")(req, res, function(){
            res.redirect("/");
        });
    });
});

//ROUTE - GET CHANGEPASSWORD - Displays the change password page
app.get("/changepassword", isLoggedIn, function(req, res){
    res.render("changepassword");
});

//ROUTE - POST CHANGEPASSWORD - Changes the users password
app.post("/changepassword", isLoggedIn, function(req, res){
    User.findByUsername(req.user.username, function(err, foundUser){
        foundUser.changePassword(req.body.oldPassword, req.body.newPassword, function(err){
            if(err){
                console.log(err);
            }else{
                res.redirect("/");
            }
        });
    });
});

=======
>>>>>>> master
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

<<<<<<< HEAD
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
app.delete("/posts/:id", isLoggedIn, checkPostOwnership, function(req, res){
    Post.findByIdAndRemove(req.params.id, function(err, deletedPost){
        if(err){
            res.redirect("/posts");
        }else{
            const s3 = new aws.S3();
            const s3Params = {
                Bucket: S3_BUCKET + "/images/posts",
                Key: deletedPost.image
            };

            s3.deleteObject(s3Params, (err, data) => {
                if(err){
                    console.log("$@$@$@$@$@ ERROR @$@$@$@$@$")
                    console.log(err);
                    return res.end();
                }

                const returnData = {
                    signedRequest: data,
                    url: `https://mes-website-assets.s3.amazonaws.com/${deletedPost.image}`
                };

                // res.write(JSON.stringify(returnData), function(err){
                //     return res.end();
                // });
            });
            res.redirect("/posts");
       }
   }); 
});

//ROUTE - GET EDIT POST - Displays the edit post form
app.get("/posts/:id/edit", isLoggedIn, checkPostOwnership, function(req, res){
    Post.findById(req.params.id, function(err, foundPost){
           if(err){
               res.redirect("/posts");
           }else{
                res.render("edit", {post: foundPost});    
           } 
    }); 
});

//ROUTE - PUT POST - Updates the currently edited post
app.put("/posts/:id", isLoggedIn, checkPostOwnership, function(req, res){
    
    var author = {
        id: req.user._id,
        name: req.user.name,
        position: req.user.position
    }

    //Create the edited post object
    var editedPost = {
        title: req.body.title,
        content: req.body.content,
        author: author
    };

    //Checks if the edited post has a new image, keeps the default if not
    if(req.files.image != undefined){

        let newImageName = "img-" + req.params.id + req.files.image.name.substring(req.files.image.name.lastIndexOf("."));

        const s3 = new aws.S3();
        const s3Params = {
            Bucket: S3_BUCKET + "/images/posts",
            Key: newImageName,
            ACL: 'public-read',
            Body: req.files.image.data
        };

        s3.putObject(s3Params, (err, data) => {
            if(err){
                console.log("$@$@$@$@$@ ERROR @$@$@$@$@$")
                console.log(err);
                return res.end();
            }

            const returnData = {
                signedRequest: data,
                url: `https://mes-website-assets.s3.amazonaws.com/${newImageName}`
            };

            // res.write(JSON.stringify(returnData), function(err){
            //     return res.end();
            // });
        });

        //Update the newPost object with the new image name
        editedPost.image = newImageName;
    }

    Post.findByIdAndUpdate(req.params.id, editedPost, function(err, updatedPost){
       if(err){
           res.redirect("/posts");
       }else{
           res.redirect("/posts/" + req.params.id)
       }
   }); 
});

=======
>>>>>>> master
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
<<<<<<< HEAD
        }else{         
            //Create new image name
            let newImageName = "img-" + createdPost._id + req.files.image.name.substring(req.files.image.name.lastIndexOf("."));
            const s3 = new aws.S3();
                const s3Params = {
                Bucket: S3_BUCKET + "/images/posts",
                Key: newImageName,
                Expires: 60,
                ACL: 'public-read',
                Body: req.files.image.data
            };

            s3.putObject(s3Params, (err, data) => {
                if(err){
                    console.log("$@$@$@$@$@ ERROR @$@$@$@$@$")
                    console.log(err);
                    return res.end();
                }

                const returnData = {
                    signedRequest: data,
                    url: `https://mes-website-assets.s3.amazonaws.com/${newImageName}`
                };

                // res.write(JSON.stringify(returnData), function(err){
                //     return res.end();
                // });
            });

            newPost.image = newImageName;

=======
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
            
>>>>>>> master
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
app.listen(process.env.PORT, function(){
    console.log("McMaster Engineering Society Server has started...");
});