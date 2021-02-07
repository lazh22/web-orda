users = {
    Administrator: {
        user1: {
            username: "Вася",
            full_name: "Василий",
            age: 30,
            registDate: 2016,
            logindate: "05.02.2021",
            superuser: true,
        },
    },
    Moderators: {
        user1: {
            username: "Вика",
            full_name: "Виктория",
            age: 20,
            registDate: 2020,
            logindate: "07.02.2021",
            accessLevel: 1,
        }, 
        user2: {
            username: "Толя",
            full_name: "Анатолий",
            age: 21,
            registDate: 2019,
            logindate: "07.02.2021",
            accessLevel: 3,
        },
    },
    Users:{
        user1: {
            username: "Катя",
            full_name: "Екатерина",
            age: 18,
            registDate: 2018,
            logindate: "07.02.2021",
            isBanned: false,
        },
        user2: {
            username: "Миша",
            full_name: "Михаил",
            age: 19,
            registDate: 2019,
            logindate: "07.02.2021",
            isBanned: false,
        },
        user3: {
            username: "Саша",
            full_name: "Александра",
            age: 20,
            registDate: 2020,
            logindate: "07.02.2021",
            isBanned: false,
        },   
        user4: {
            username: "Саша",
            full_name: "Алксандр",
            age: 21,
            registDate: 2021,
            logindate: "07.02.2021",
            isBanned: true,
        },     
    },
};
console.log(users.Administrator.user1.superuser)