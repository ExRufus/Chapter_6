// const Prisma = require("@prisma/client");
// const prisma = new Prisma.PrismaClient();

// const getAllUsers = async() => {
//     return await prisma.userGame.findMany();
// };

// const getSingleUser = async(id) => {
//     return await prisma.userGame.findUnique({ where: { id } })
// };

// const createUser = async() => {
//     // Membuat user baru {id, username, password}

//     // proses validasi manual
//     if (!req.body) {
//         res.json({
//             status: "failed to create user",
//             message: "missing payload"
//         });
//         return; // jika sudah masuk fungsi di atas maka fungsinya sudah selesai
//     }
//     if (!req.body.username) {
//         res.json({
//             status: "failed to create user",
//             message: 'missing property "username" in payload',
//         });
//         return; // jika sudah masuk fungsi di atas maka fungsinya sudah selesai
//     }
//     if (!req.body.password) {
//         res.json({
//             status: "failed to create user",
//             message: 'missing property "password" in payload',
//         });
//         return; // jika sudah masuk fungsi di atas maka fungsinya sudah selesai
//     }

//     try {
//         const result = await prisma.userGame.create({
//             data: { username: req.body.username, password: req.body.password },
//         })
//         res.json({ status: "berhasil membuat user", info: result })
//     } catch (error) {
//         res.json({ status: "gagal membuat user", info: error })
//     }
// }

// const editUser = async() => {
//     // Edit data user
//     const id = Number(req.params.id);

//     if (!req.body) {
//         res.json({
//             status: "failed to update user",
//             message: "missing payload"
//         });
//         return; // jika sudah masuk fungsi di atas maka fungsinya sudah selesai
//     }
//     if (!req.body.username) {
//         res.json({
//             status: "failed to update user",
//             message: 'missing property "username" in payload',
//         });
//         return; // jika sudah masuk fungsi di atas maka fungsinya sudah selesai
//     }
//     if (!req.body.password) {
//         res.json({
//             status: "failed to update user",
//             message: 'missing property "password" in payload',
//         });
//         return; // jika sudah masuk fungsi di atas maka fungsinya sudah selesai
//     }

//     try {
//         const result = await prisma.userGame.update({
//             where: { id },
//             data: { username: req.body.username, password: req.body.password },
//         })
//         res.json({ status: "berhasil update user", info: result })
//     } catch (error) {
//         res.json({ status: "gagal update user", info: error })
//     }
// };

// const deleteUser = () => {
//     // Delete data user
//     const id = Number(req.params.id);

//     prisma.userGame
//         .delete({ where: { id } })
//         .then(info => {
//             res.json({ info })
//         })
//         .catch((error) => {
//             res.json({ status: "Gagal menghapus user", message: error })
//         })
// };

// module.exports = { getAllUsers }





/*
const getAllUsers = () => {
    return prisma.userGame
        .findMany()
        .then((users) => {
            console.log("Read DB Success, Users: ", users);
            return users;
        }).catch((error) => {
            console.log("Ada ERROR!: ", error);
            return [];
        });
}

const getSingleUser = () => {
    // Cari user dari Database
    const id = Number(req.params.id); // "1" => 1

    prisma.userGame
        .findUnique({ where: { id } })
        .then((user) => {
            if (!user) {
                throw new Error("User not found")
            }
            return user;
        })
        .catch((error) => {
            console.log("ada ERROR!: ", error);
            res.json({ status: "User tidak ditemukan" })
        })
};
*/