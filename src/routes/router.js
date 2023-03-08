const express = require('express');
const router = express.Router();
const {
    getAllUser,
    getSingleUser,
    createUser,
    editUser,
    deleteUser
} = require('../utils/userController');
// const userService = require('../services/userService')
const expressLayouts = require('express-ejs-layouts');


const Prisma = require("@prisma/client");
const prisma = new Prisma.PrismaClient();

router.use(express.json());
router.use(expressLayouts)
router.use(express.urlencoded({ extended: true }));


// Router untuk page (HTML):
router.get("/", async(req, res) => {
    const users = await prisma.userGame.findMany({ include: { userGameBiodata: true } });
    res.render("index", {
        title: 'Sign Up',
        layout: 'layouts/main-layouts',
        users: users
    });
});


router.get('/login', (req, res) => {
    res.render("login", {
        title: 'Sign In',
        layout: 'layouts/main-layouts',
    })
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === "luffy" && password === "daging") {
        res.redirect('/')
    } else {
        console.log("Masukkan inputan yang benar")
        res.redirect('/login')
    }
})

router.get('/register', (req, res) => {
    res.render("register", {
        title: 'Sign Up',
        layout: 'layouts/main-layouts',
    })
});

router.post("/register", async(req, res) => {
    const { username, password } = req.body;

    // panggil database:
    // lalu kalau berhasil, redirect user ke halaman "/"
    await prisma.userGame.create({
        data: {
            username,
            password,
            userGameBiodata: {
                create: {
                    gender: req.body.gender,
                    city: req.body.city,
                    name: req.body.fullname
                }
            }
        }
    });
    res.redirect("/");
});

router.get('/user/update/:id', async(req, res) => {
    const id = Number(req.params.id);
    const user = await prisma.userGame.findUnique({
        where: { id },
        include: { userGameBiodata: true }
    });
    res.render('update-user', {
        title: 'Edit User',
        layout: 'layouts/main-layouts',
        user
    });
});

router.post('/user/update', async(req, res) => {
    const { id, username, password } = req.body;

    await prisma.userGame.update({
        where: { id: Number(id) },
        data: {
            username,
            password,
            userGameBiodata: {
                update: {
                    gender: req.body.gender,
                    city: req.body.city,
                    name: req.body.fullname,
                }
            }
        },
        include: { userGameBiodata: true }
    });
    res.redirect('/');
});


//Router untuk API:
// CRUD
router.get('/api/user', getAllUser)
router.get("/api/user/:id", getSingleUser)
router.post("/api/user", createUser)
router.put("/api/user/:id", editUser)
router.delete("/api/user/:id", deleteUser)

module.exports = router;

/* 
router.get("/", (req, res) => {
    userService.getAllUser()
        .then((users) => res.render("index", {
            users: users,
        }))
});
*/