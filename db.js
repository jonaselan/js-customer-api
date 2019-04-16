const faker = require('faker');

do {
    from = faker.random.number({min:1, max:10});
    to = faker.random.number({min:1, max:10});
} while (from === to);

const getMessages = (count) => {
    messages = [];
    count += faker.random.number({min:1, max:10});

    for (let i = 0; i < count; i++) {
        messages[i] = {
            "id": faker.random.number({min:1, max:100}),
            "from": from,
            "to": to,
            "read": faker.random.boolean(),
            "content": faker.lorem.sentences(),
        }
    }

    return {
        messages
    };
};

const getUsers = () => {
    users = [];

    for (let i = 0; i < 10; i++) {
        users[i] = {
            "id": (i + 1),
            "name": faker.name.firstName(),
            "email": faker.internet.email(),
        }
    }

    return {
        users
    }
};

module.exports = {
    getUsers,
    getMessages
};