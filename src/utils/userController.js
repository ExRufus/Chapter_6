const Prisma = require("@prisma/client");
const prisma = new Prisma.PrismaClient();

const getAllUser = (req, res) => {
    // Baca list users dari Database
    prisma.userGame
        .findMany()
        .then((users) => {
            console.log("Read DB Success, Users: ", users);
            res.json(users)
        }).catch((error) => {
            console.log("Ada ERROR!: ", error);
            res.json([])
        });
};

const getSingleUser = (req, res) => {
    // Cari user dari Database
    const id = Number(req.params.id); // "1" => 1

    prisma.userGame
        .findUnique({ where: { id } })
        .then((user) => {
            if (!user) {
                throw new Error("User not found")
            }
            res.json(user);
        })
        .catch((error) => {
            console.log("ada ERROR!: ", error);
            res.json({ status: "User tidak ditemukan" })
        })
};

const createUser = async(req, res) => {
    // Membuat user baru {id, username, password}

    // proses validasi manual
    if (!req.body) {
        res.json({
            status: "failed to create user",
            message: "missing payload"
        });
        return; // jika sudah masuk fungsi di atas maka fungsinya sudah selesai
    }
    if (!req.body.username) {
        res.json({
            status: "failed to create user",
            message: 'missing property "username" in payload',
        });
        return; // jika sudah masuk fungsi di atas maka fungsinya sudah selesai
    }
    if (!req.body.password) {
        res.json({
            status: "failed to create user",
            message: 'missing property "password" in payload',
        });
        return; // jika sudah masuk fungsi di atas maka fungsinya sudah selesai
    }

    try {
        const result = await prisma.userGame.create({
            data: { username: req.body.username, password: req.body.password },
        })
        res.json({ status: "berhasil membuat user", info: result })
    } catch (error) {
        res.json({ status: "gagal membuat user", info: error })
    }
}

const editUser = async(req, res) => {
    // Edit data user
    const id = Number(req.params.id);

    if (!req.body) {
        res.json({
            status: "failed to update user",
            message: "missing payload"
        });
        return; // jika sudah masuk fungsi di atas maka fungsinya sudah selesai
    }
    if (!req.body.username) {
        res.json({
            status: "failed to update user",
            message: 'missing property "username" in payload',
        });
        return; // jika sudah masuk fungsi di atas maka fungsinya sudah selesai
    }
    if (!req.body.password) {
        res.json({
            status: "failed to update user",
            message: 'missing property "password" in payload',
        });
        return; // jika sudah masuk fungsi di atas maka fungsinya sudah selesai
    }

    try {
        const result = await prisma.userGame.update({
            where: { id },
            data: { username: req.body.username, password: req.body.password },
        })
        res.json({ status: "berhasil update user", info: result })
    } catch (error) {
        res.json({ status: "gagal update user", info: error })
    }
};

const deleteUser = async(req, res) => {
    const id = Number(req.params.id);

    try {
        const deletedUser = await prisma.userGame.delete({
            where: { id },
            include: { userGameBiodata: true },
        });

        await prisma.userGameBioData.delete({
            where: { userGameId: deletedUser.id },
        });

        res.json({ status: "berhasil menghapus user", deletedUser });
    } catch (error) {
        res.json({ status: "gagal menghapus user", message: error.message });
    }
};



module.exports = {
    getAllUser,
    getSingleUser,
    createUser,
    editUser,
    deleteUser
}

/* 
const getAllUser = (req, res) => {
    // Baca list users dari Database
    userService
        .getAllUsers()
        .then((users) => {
            console.log("Read DB Success, Users: ", users);
            res.json(users)
        }).catch((error) => {
            console.log("Ada ERROR!: ", error);
            res.json([])
        });
};
*/

// const deleteUser = (req, res) => {
//     const id = Number(req.params.id);

//     prisma.userGame, prisma.userGameBioData
//         .delete({ where: { id }, include: { userGameBioData: true } })
//         .then((info) => {
//             res.json({ status: "berhasil menghapus user", info });
//         })
//         .catch((error) => {
//             res.json({ status: "gagal menghapus user", message: error });
//         });
// };