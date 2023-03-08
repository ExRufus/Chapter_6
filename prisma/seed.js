const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()

async function main() {

    // await prisma.userGame.upsert({
    //     where: { username: "Luffy" },
    //     update: {},
    //     create: {
    //         username: "Monkey D Luffy",
    //         password: "luffy123",
    //         userGameBiodata: {
    //             create: {
    //                 city: "Desa Foosha",
    //                 gender: "Male",
    //                 name: "Baka Senchou"
    //             }
    //         }
    //     }
    // })

    // await prisma.userGame.upsert({
    //     where: {
    //         username: "Zoro",
    //     },
    //     update: {},
    //     create: {
    //         username: "Roronoa Zoro",
    //         password: "zoro123",
    //         userGameBiodata: {
    //             create: {
    //                 city: "Shimotsuki",
    //                 gender: "Male",
    //                 name: "Marimo"
    //             }
    //         }
    //     }
    // });

    await prisma.userGame.upsert({
        where: {
            username: "Nami",
        },
        update: {},
        create: {
            username: "Nami",
            password: "nami123",
            userGameBiodata: {
                create: {
                    city: "Kokoyashi",
                    gender: "Male",
                    name: "Dorobo Neko"
                }
            }
        }
    });

    // await prisma.userGame.upsert({
    //     where: {
    //         username: "Sanji",
    //     },
    //     update: {},
    //     create: {
    //         username: "Vinsmoke Sanji",
    //         password: "sanji123",
    //         userGameBiodata: {
    //             create: {
    //                 city: "North Blue",
    //                 gender: "Male",
    //                 name: "Koki Mesum"
    //             }
    //         }
    //     }
    // });

    // await prisma.userGame.upsert({
    //     where: {
    //         username: "Robin",
    //     },
    //     update: {},
    //     create: {
    //         username: "Nico Robin",
    //         password: "robin123",
    //         userGameBiodata: {
    //             create: {
    //                 city: "Ohara",
    //                 gender: "Female",
    //                 name: "Anak Iblis"
    //             }
    //         }
    //     }
    // });

    //     await prisma.userGame.upsert({
    //         where: {
    //             username: "Leo",
    //         },
    //         update: {},
    //         create: {
    //             username: "lee",
    //             password: "lee123"
    //         }
    //     });
};

main()
    .then(async() => {
        await prisma.$disconnect()
    })
    .catch(async(e) => {
        console.log(e)
        await prisma.$disconnect()
        process.exit(1)
    })