const faker = require('faker');

do {
    from = faker.random.number({min:1, max:10});
    to = faker.random.number({min:1, max:10});
} while (from === to);

const getConversationMessages = (count) => {
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
const getAllMessages = () => {
  return {
      "messages": [
          {
              "id": 1,
              "from": 7,
              "to": 4,
              "read": false,
              "content": "Omnis mollitia sint et dolores ut commodi.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 2,
              "from": 8,
              "to": 10,
              "read": false,
              "content": "Omnis architecto asperiores ut.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 3,
              "from": 6,
              "to": 5,
              "read": false,
              "content": "Consequatur autem et et ut.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 5,
              "from": 5,
              "to": 7,
              "read": false,
              "content": "Laborum est natus qui facere reprehenderit et.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 6,
              "from": 7,
              "to": 8,
              "read": false,
              "content": "Aut maxime explicabo ipsa optio.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 7,
              "from": 1,
              "to": 10,
              "read": false,
              "content": "Fuga dignissimos ratione adipisci voluptatem quia blanditiis aut.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 8,
              "from": 6,
              "to": 8,
              "read": false,
              "content": "Corporis sed necessitatibus voluptas rem accusantium nihil quia.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 9,
              "from": 4,
              "to": 8,
              "read": false,
              "content": "A dignissimos est consequatur ad a in.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 10,
              "from": 7,
              "to": 5,
              "read": false,
              "content": "Eveniet eum beatae voluptatem iure dolorem ut corrupti aliquam.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 11,
              "from": 5,
              "to": 10,
              "read": false,
              "content": "Qui eum voluptatem architecto velit ab architecto.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 12,
              "from": 1,
              "to": 4,
              "read": false,
              "content": "In nobis eligendi ea velit minus enim.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 13,
              "from": 3,
              "to": 7,
              "read": false,
              "content": "Itaque odit aut doloribus nostrum.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 14,
              "from": 8,
              "to": 3,
              "read": false,
              "content": "Sunt dolorem et ipsam ut.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 15,
              "from": 8,
              "to": 3,
              "read": false,
              "content": "Sed excepturi eaque et id eos eos.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 17,
              "from": 8,
              "to": 10,
              "read": false,
              "content": "Expedita error ducimus sit aut maiores sapiente aliquam.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 18,
              "from": 8,
              "to": 4,
              "read": false,
              "content": "Autem error expedita repellendus omnis rerum quis ullam.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 19,
              "from": 3,
              "to": 8,
              "read": false,
              "content": "Vitae odit rerum voluptas exercitationem.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 20,
              "from": 5,
              "to": 4,
              "read": false,
              "content": "Nihil ex debitis ex.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 21,
              "from": 10,
              "to": 8,
              "read": false,
              "content": "Laudantium sunt nam molestiae.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 23,
              "from": 6,
              "to": 9,
              "read": false,
              "content": "Cumque asperiores quidem est deserunt aliquid beatae aut.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 24,
              "from": 2,
              "to": 7,
              "read": false,
              "content": "Accusamus dignissimos quis quae blanditiis molestias eos eos.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 25,
              "from": 6,
              "to": 5,
              "read": false,
              "content": "Porro voluptatem exercitationem sint eveniet modi voluptatum enim.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 26,
              "from": 8,
              "to": 6,
              "read": false,
              "content": "Qui quod sed exercitationem consequuntur est ipsam quia.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 27,
              "from": 7,
              "to": 9,
              "read": false,
              "content": "Dolorem cum voluptatem officia soluta ipsam.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 28,
              "from": 2,
              "to": 5,
              "read": false,
              "content": "Laudantium odio fugiat quia magni non qui quidem.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 29,
              "from": 1,
              "to": 6,
              "read": false,
              "content": "Consequatur maiores id quasi porro quis rem.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 30,
              "from": 2,
              "to": 10,
              "read": false,
              "content": "Accusamus delectus quisquam et consequatur.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 31,
              "from": 3,
              "to": 8,
              "read": false,
              "content": "Provident dolores quo qui.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 32,
              "from": 8,
              "to": 5,
              "read": false,
              "content": "Saepe suscipit et at odit.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 33,
              "from": 7,
              "to": 4,
              "read": false,
              "content": "Perferendis et architecto quia corrupti.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 34,
              "from": 2,
              "to": 9,
              "read": false,
              "content": "Ipsum ipsam sit ipsa est reiciendis quos.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 35,
              "from": 2,
              "to": 4,
              "read": false,
              "content": "Voluptates aspernatur rem ipsum repellat id.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 36,
              "from": 5,
              "to": 9,
              "read": false,
              "content": "Laboriosam ipsam cumque maxime ea dolores qui.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 37,
              "from": 3,
              "to": 9,
              "read": false,
              "content": "Aliquam possimus corrupti esse ipsam vitae aut.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 38,
              "from": 4,
              "to": 3,
              "read": false,
              "content": "Doloremque at excepturi reiciendis iure.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 40,
              "from": 10,
              "to": 9,
              "read": false,
              "content": "Minus voluptatem et similique est.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 41,
              "from": 4,
              "to": 5,
              "read": false,
              "content": "Consequatur iste fugiat sed architecto.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 42,
              "from": 5,
              "to": 2,
              "read": false,
              "content": "Eius dolor non odio deleniti maiores reprehenderit nobis autem.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 43,
              "from": 10,
              "to": 9,
              "read": false,
              "content": "Delectus delectus natus sed voluptatem est enim.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 45,
              "from": 6,
              "to": 7,
              "read": false,
              "content": "Soluta est maxime aut corrupti eligendi saepe.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 46,
              "from": 9,
              "to": 1,
              "read": false,
              "content": "Veritatis est et unde suscipit fugiat assumenda modi.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 47,
              "from": 5,
              "to": 9,
              "read": false,
              "content": "Aut occaecati dolores rem in.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 48,
              "from": 8,
              "to": 1,
              "read": false,
              "content": "Magni non labore corporis deserunt.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 49,
              "from": 3,
              "to": 4,
              "read": false,
              "content": "Dicta qui mollitia veritatis ut.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 50,
              "from": 4,
              "to": 3,
              "read": false,
              "content": "Molestiae assumenda minima corrupti repellat et ipsam perferendis.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 51,
              "from": 3,
              "to": 9,
              "read": false,
              "content": "Vero facilis omnis facere odio.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 52,
              "from": 2,
              "to": 8,
              "read": false,
              "content": "Dolorem ipsam itaque sed ea.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 53,
              "from": 3,
              "to": 10,
              "read": false,
              "content": "Voluptate ut doloremque ut aut.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 54,
              "from": 7,
              "to": 3,
              "read": false,
              "content": "Laborum dolorem omnis veritatis et sint veritatis fugit.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 55,
              "from": 1,
              "to": 10,
              "read": false,
              "content": "Quis ut autem quos ipsam.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 56,
              "from": 4,
              "to": 9,
              "read": false,
              "content": "Est voluptas omnis eveniet ad.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 57,
              "from": 6,
              "to": 8,
              "read": false,
              "content": "Sunt non unde non omnis officiis.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 58,
              "from": 9,
              "to": 1,
              "read": false,
              "content": "Sit similique quaerat et ea nemo.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 59,
              "from": 3,
              "to": 9,
              "read": false,
              "content": "Consequuntur voluptates culpa fugit et qui voluptas.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 60,
              "from": 9,
              "to": 10,
              "read": false,
              "content": "Qui accusantium quisquam quia voluptatem officiis ut ex.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 61,
              "from": 6,
              "to": 5,
              "read": false,
              "content": "Earum deleniti iure culpa eum aut sunt et.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 62,
              "from": 3,
              "to": 10,
              "read": false,
              "content": "Iusto neque debitis distinctio.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 63,
              "from": 1,
              "to": 2,
              "read": false,
              "content": "Voluptas corrupti qui blanditiis sed libero vel.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 64,
              "from": 5,
              "to": 9,
              "read": false,
              "content": "Eaque voluptatem dolor explicabo ex corrupti.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 65,
              "from": 9,
              "to": 1,
              "read": false,
              "content": "Est dolore vel facere rem aut rerum.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 66,
              "from": 3,
              "to": 6,
              "read": false,
              "content": "Consequuntur amet quae odit enim velit eligendi velit.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-03-28 12:53:04"
          },
          {
              "id": 67,
              "from": 9,
              "to": 2,
              "read": false,
              "content": "Repellendus quia et quia rerum voluptatem.",
              "created_at": "2019-03-28 12:53:05",
              "updated_at": "2019-03-28 12:53:05"
          },
          {
              "id": 68,
              "from": 1,
              "to": 8,
              "read": false,
              "content": "Rerum nihil et et alias quas.",
              "created_at": "2019-03-28 12:53:05",
              "updated_at": "2019-03-28 12:53:05"
          },
          {
              "id": 69,
              "from": 5,
              "to": 3,
              "read": false,
              "content": "Qui minima quas recusandae reiciendis aliquid.",
              "created_at": "2019-03-28 12:53:05",
              "updated_at": "2019-03-28 12:53:05"
          },
          {
              "id": 70,
              "from": 3,
              "to": 10,
              "read": false,
              "content": "Qui molestiae voluptatem aut quae.",
              "created_at": "2019-03-28 12:53:05",
              "updated_at": "2019-03-28 12:53:05"
          },
          {
              "id": 71,
              "from": 8,
              "to": 6,
              "read": false,
              "content": "Sunt quam et quia minima.",
              "created_at": "2019-03-28 12:53:05",
              "updated_at": "2019-03-28 12:53:05"
          },
          {
              "id": 72,
              "from": 7,
              "to": 8,
              "read": false,
              "content": "Exercitationem molestias est pariatur quibusdam.",
              "created_at": "2019-03-28 12:53:05",
              "updated_at": "2019-03-28 12:53:05"
          },
          {
              "id": 73,
              "from": 3,
              "to": 2,
              "read": false,
              "content": "Ut est est voluptatibus et consequatur corporis.",
              "created_at": "2019-03-28 12:53:05",
              "updated_at": "2019-03-28 12:53:05"
          },
          {
              "id": 74,
              "from": 3,
              "to": 9,
              "read": false,
              "content": "Autem nulla eligendi non et praesentium quae.",
              "created_at": "2019-03-28 12:53:05",
              "updated_at": "2019-03-28 12:53:05"
          },
          {
              "id": 75,
              "from": 10,
              "to": 5,
              "read": false,
              "content": "Nisi consequatur sed ut vero.",
              "created_at": "2019-03-28 12:53:05",
              "updated_at": "2019-03-28 12:53:05"
          },
          {
              "id": 76,
              "from": 3,
              "to": 2,
              "read": false,
              "content": "Et commodi laudantium exercitationem rem voluptas.",
              "created_at": "2019-03-28 12:53:05",
              "updated_at": "2019-03-28 12:53:05"
          },
          {
              "id": 77,
              "from": 1,
              "to": 3,
              "read": false,
              "content": "Odio facilis voluptate libero tempora dolor veritatis sed ex.",
              "created_at": "2019-03-28 12:53:05",
              "updated_at": "2019-03-28 12:53:05"
          },
          {
              "id": 78,
              "from": 2,
              "to": 7,
              "read": false,
              "content": "Mollitia porro dicta eaque.",
              "created_at": "2019-03-28 12:53:05",
              "updated_at": "2019-03-28 12:53:05"
          },
          {
              "id": 16,
              "from": 5,
              "to": 1,
              "read": true,
              "content": "Amet sunt quam sit tempora dolor itaque.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-04-01 19:46:28"
          },
          {
              "id": 4,
              "from": 4,
              "to": 1,
              "read": true,
              "content": "Quos quae neque aliquid et ea dolor sed.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-04-01 19:46:22"
          },
          {
              "id": 22,
              "from": 2,
              "to": 1,
              "read": true,
              "content": "Harum voluptate rerum odit et quas.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-04-01 19:55:51"
          },
          {
              "id": 79,
              "from": 9,
              "to": 2,
              "read": false,
              "content": "Nam quas magnam et repudiandae quisquam voluptatem voluptate.",
              "created_at": "2019-03-28 12:53:05",
              "updated_at": "2019-03-28 12:53:05"
          },
          {
              "id": 80,
              "from": 7,
              "to": 4,
              "read": false,
              "content": "Pariatur aliquid aut quis expedita temporibus eligendi sequi.",
              "created_at": "2019-03-28 12:53:05",
              "updated_at": "2019-03-28 12:53:05"
          },
          {
              "id": 81,
              "from": 10,
              "to": 6,
              "read": false,
              "content": "Explicabo quae quia non cumque quo.",
              "created_at": "2019-03-28 12:53:05",
              "updated_at": "2019-03-28 12:53:05"
          },
          {
              "id": 83,
              "from": 8,
              "to": 9,
              "read": false,
              "content": "Illum non quasi libero aut quo molestiae aliquam.",
              "created_at": "2019-03-28 12:53:05",
              "updated_at": "2019-03-28 12:53:05"
          },
          {
              "id": 84,
              "from": 7,
              "to": 10,
              "read": false,
              "content": "Ea veritatis similique explicabo nemo explicabo amet.",
              "created_at": "2019-03-28 12:53:05",
              "updated_at": "2019-03-28 12:53:05"
          },
          {
              "id": 85,
              "from": 9,
              "to": 10,
              "read": false,
              "content": "Numquam in minus commodi necessitatibus.",
              "created_at": "2019-03-28 12:53:05",
              "updated_at": "2019-03-28 12:53:05"
          },
          {
              "id": 86,
              "from": 4,
              "to": 3,
              "read": false,
              "content": "Neque perferendis voluptatem accusamus perferendis odit quam facere.",
              "created_at": "2019-03-28 12:53:05",
              "updated_at": "2019-03-28 12:53:05"
          },
          {
              "id": 87,
              "from": 7,
              "to": 2,
              "read": false,
              "content": "Magnam omnis natus corporis eligendi est.",
              "created_at": "2019-03-28 12:53:05",
              "updated_at": "2019-03-28 12:53:05"
          },
          {
              "id": 88,
              "from": 6,
              "to": 3,
              "read": false,
              "content": "Dolorem illum animi quia ipsum modi et.",
              "created_at": "2019-03-28 12:53:05",
              "updated_at": "2019-03-28 12:53:05"
          },
          {
              "id": 89,
              "from": 10,
              "to": 5,
              "read": false,
              "content": "Dolor veritatis ut reiciendis.",
              "created_at": "2019-03-28 12:53:05",
              "updated_at": "2019-03-28 12:53:05"
          },
          {
              "id": 90,
              "from": 9,
              "to": 2,
              "read": false,
              "content": "Voluptatum vel consectetur facere suscipit non.",
              "created_at": "2019-03-28 12:53:05",
              "updated_at": "2019-03-28 12:53:05"
          },
          {
              "id": 91,
              "from": 6,
              "to": 10,
              "read": false,
              "content": "Et neque dolores adipisci voluptas.",
              "created_at": "2019-03-28 12:53:05",
              "updated_at": "2019-03-28 12:53:05"
          },
          {
              "id": 92,
              "from": 3,
              "to": 10,
              "read": false,
              "content": "Inventore atque vero quia totam laudantium corrupti consequatur.",
              "created_at": "2019-03-28 12:53:05",
              "updated_at": "2019-03-28 12:53:05"
          },
          {
              "id": 93,
              "from": 7,
              "to": 9,
              "read": false,
              "content": "Accusantium fugiat sit officiis commodi magni qui aut.",
              "created_at": "2019-03-28 12:53:05",
              "updated_at": "2019-03-28 12:53:05"
          },
          {
              "id": 94,
              "from": 3,
              "to": 5,
              "read": false,
              "content": "Excepturi officiis eius cum omnis est culpa.",
              "created_at": "2019-03-28 12:53:05",
              "updated_at": "2019-03-28 12:53:05"
          },
          {
              "id": 95,
              "from": 9,
              "to": 10,
              "read": false,
              "content": "Ipsum distinctio sit laboriosam.",
              "created_at": "2019-03-28 12:53:05",
              "updated_at": "2019-03-28 12:53:05"
          },
          {
              "id": 96,
              "from": 6,
              "to": 2,
              "read": false,
              "content": "Est dicta ea voluptatum adipisci.",
              "created_at": "2019-03-28 12:53:05",
              "updated_at": "2019-03-28 12:53:05"
          },
          {
              "id": 97,
              "from": 1,
              "to": 9,
              "read": false,
              "content": "Ea at est aut ut corporis ut.",
              "created_at": "2019-03-28 12:53:05",
              "updated_at": "2019-03-28 12:53:05"
          },
          {
              "id": 98,
              "from": 4,
              "to": 9,
              "read": false,
              "content": "Eligendi et aliquid occaecati qui nobis aliquam dolores.",
              "created_at": "2019-03-28 12:53:05",
              "updated_at": "2019-03-28 12:53:05"
          },
          {
              "id": 99,
              "from": 10,
              "to": 4,
              "read": false,
              "content": "Et eveniet odio voluptatem.",
              "created_at": "2019-03-28 12:53:05",
              "updated_at": "2019-03-28 12:53:05"
          },
          {
              "id": 100,
              "from": 1,
              "to": 5,
              "read": false,
              "content": "Illo ut saepe atque sit exercitationem sit.",
              "created_at": "2019-03-28 12:53:05",
              "updated_at": "2019-03-28 12:53:05"
          },
          {
              "id": 101,
              "from": 1,
              "to": 2,
              "read": false,
              "content": "qwe",
              "created_at": "2019-03-28 12:54:06",
              "updated_at": "2019-03-28 12:54:06"
          },
          {
              "id": 102,
              "from": 1,
              "to": 2,
              "read": false,
              "content": "eaaa",
              "created_at": "2019-03-28 13:03:23",
              "updated_at": "2019-03-28 13:03:23"
          },
          {
              "id": 103,
              "from": 1,
              "to": 3,
              "read": false,
              "content": "qwe",
              "created_at": "2019-03-28 17:14:00",
              "updated_at": "2019-03-28 17:14:00"
          },
          {
              "id": 82,
              "from": 5,
              "to": 1,
              "read": true,
              "content": "Inventore sed sit sed vel non fuga et.",
              "created_at": "2019-03-28 12:53:05",
              "updated_at": "2019-04-01 19:46:28"
          },
          {
              "id": 104,
              "from": 1,
              "to": 2,
              "read": false,
              "content": "SIM",
              "created_at": "2019-04-01 19:55:45",
              "updated_at": "2019-04-01 19:55:45"
          },
          {
              "id": 39,
              "from": 4,
              "to": 2,
              "read": true,
              "content": "Sit et voluptatem rerum facilis soluta iusto ut velit.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-04-16 18:11:23"
          },
          {
              "id": 44,
              "from": 4,
              "to": 2,
              "read": true,
              "content": "Occaecati commodi sapiente culpa rerum vero natus.",
              "created_at": "2019-03-28 12:53:04",
              "updated_at": "2019-04-16 18:11:23"
          }
      ]
  }
};

const getUsersStatic = () => {
    return {
        "users": [
            {
                "id":1,
                "name":"user1",
                "email":"email@email.com",
                "created_at":"2019-03-15 17:18:56",
                "updated_at":"2019-03-15 17:18:56"
            },
            {
                "id":2,
                "name":"Giles Cruickshank Jr.",
                "email":"zkreiger@example.net",
                "created_at":"2019-03-28 12:52:39",
                "updated_at":"2019-03-28 12:52:39"
            },
            {
                "id":3,
                "name":"Prof. Sterling Hintz",
                "email":"ubradtke@example.net",
                "created_at":"2019-03-28 12:52:39",
                "updated_at":"2019-03-28 12:52:39"
            },
            {
                "id":4,
                "name":"Tommie Langworth",
                "email":"valerie31@example.org",
                "created_at":"2019-03-28 12:52:39",
                "updated_at":"2019-03-28 12:52:39"
            },
            {
                "id":5,
                "name":"Eveline Stoltenberg",
                "email":"javon.johns@example.com",
                "created_at":"2019-03-28 12:52:39",
                "updated_at":"2019-03-28 12:52:39"
            },
            {
                "id":6,
                "name":"Cameron Nolan",
                "email":"myrtie25@example.net",
                "created_at":"2019-03-28 12:52:39",
                "updated_at":"2019-03-28 12:52:39"
            },
            {
                "id":7,
                "name":"Mr. Scot Franecki",
                "email":"ashton38@example.com",
                "created_at":"2019-03-28 12:52:39",
                "updated_at":"2019-03-28 12:52:39"
            },
            {
                "id":8,
                "name":"Florencio Swaniawski DVM",
                "email":"jedidiah.walter@example.net",
                "created_at":"2019-03-28 12:52:39",
                "updated_at":"2019-03-28 12:52:39"
            },
            {
                "id":9,
                "name":"Prof. Alfred Stamm Jr.",
                "email":"alva.block@example.com",
                "created_at":"2019-03-28 12:52:39",
                "updated_at":"2019-03-28 12:52:39"
            },
            {
                "id":10,
                "name":"Tad Windler",
                "email":"ugerhold@example.com",
                "created_at":"2019-03-28 12:52:39",
                "updated_at":"2019-03-28 12:52:39"
            },
            {
                "id":11,
                "name":"Kaela Kuphal III",
                "email":"vmcglynn@example.com",
                "created_at":"2019-03-28 12:52:39",
                "updated_at":"2019-03-28 12:52:39"
            }
        ]
    }
};
const getRandomUsers = () => {
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

const getCustomersStatic = () => {
    return {
        "customers": [
            {
                "id":1,
                "name":"Prof. Hermina Nader V",
                "email":"bschinner@example.net",
                "phone":"+1.687.468.1844",
                "website":"https:schmitt.comsint-vel-modi-aliquam-cum-reprehenderit-aut-tenetur-nesciunt.html",
                "created_at":"2019-04-19 17:00:36",
                "updated_at":"2019-04-19 17:00:36"
            },
            {
                "id":2,
                "name":"Dr. Ursula Renner",
                "email":"bulah.roob@example.com",
                "phone":"632-916-8320",
                "website":"http:www.mosciski.bizvel-a-possimus-natus-dolore-porro-iusto-consequatur-reiciendis",
                "created_at":"2019-04-19 17:00:36",
                "updated_at":"2019-04-19 17:00:36"
            },
            {
                "id":3,
                "name":"Britney Padberg",
                "email":"yessenia.nolan@example.net",
                "phone":"1-726-773-3419 x8101",
                "website":"https:anderson.comaut-sed-enim-repellat-molestias-adipisci-omnis.html",
                "created_at":"2019-04-19 17:00:36",
                "updated_at":"2019-04-19 17:00:36"
            },
            {
                "id":4,
                "name":"Vergie Schulist",
                "email":"tate69@example.org",
                "phone":"685.458.3087",
                "website":"http:smith.infomollitia-optio-ea-cumque.html",
                "created_at":"2019-04-19 17:00:36",
                "updated_at":"2019-04-19 17:00:36"
            },
            {
                "id":5,
                "name":"Olin Kirlin",
                "email":"yundt.waldo@example.com",
                "phone":"+1-960-274-4922",
                "website":"http:daugherty.infodicta-qui-dolorum-recusandae-tenetur-iste",
                "created_at":"2019-04-19 17:00:36",
                "updated_at":"2019-04-19 17:00:36"
            },
            {
                "id":6,
                "name":"Clarissa Corwin I",
                "email":"murphy.verner@example.net",
                "phone":"336-741-4579",
                "website":"https:www.williamson.commaxime-dolorem-enim-ea-ab-ut-perspiciatis-eos",
                "created_at":"2019-04-19 17:00:36",
                "updated_at":"2019-04-19 17:00:36"
            },
            {
                "id":7,
                "name":"Fred Bartoletti",
                "email":"wisozk.marjorie@example.net",
                "phone":"(749) 898-3772",
                "website":"http:www.klein.bizoptio-modi-error-quo.html",
                "created_at":"2019-04-19 17:00:36",
                "updated_at":"2019-04-19 17:00:36"
            },
            {
                "id":8,
                "name":"Tia Hegmann",
                "email":"itrantow@example.net",
                "phone":"+1-446-684-5397",
                "website":"https:schimmel.bizdolorem-et-quo-eos-non-laudantium-consequatur-tempore.html",
                "created_at":"2019-04-19 17:00:36",
                "updated_at":"2019-04-19 17:00:36"
            },
            {
                "id":9,
                "name":"Tia Grant",
                "email":"hammes.amara@example.org",
                "phone":"(750) 660-8706 x0221",
                "website":"https:vandervort.bizest-quos-a-magnam-sit.html",
                "created_at":"2019-04-19 17:00:36",
                "updated_at":"2019-04-19 17:00:36"
            },
            {
                "id":10,
                "name":"Ronny Klocko",
                "email":"baylee10@example.com",
                "phone":"1-497-721-8967",
                "website":"http:lueilwitz.com",
                "created_at":"2019-04-19 17:00:36",
                "updated_at":"2019-04-19 17:00:36"
            },
            {
                "id":11,
                "name":"Lelia Murazik",
                "email":"smuller@example.com",
                "phone":"1-276-875-4110 x08517",
                "website":"https:paucek.comsed-laudantium-ut-consequatur-ut-ut-cum-est.html",
                "created_at":"2019-04-19 19:47:09",
                "updated_at":"2019-04-19 19:47:09"
            },
            {
                "id":12,
                "name":"Miss Retta Pfeffer MD",
                "email":"schaefer.tyrique@example.com",
                "phone":"243-417-9458 x95734",
                "website":"http:www.reilly.comtotam-ad-consequatur-expedita-eveniet-sequi-et.html",
                "created_at":"2019-04-19 19:47:09",
                "updated_at":"2019-04-19 19:47:09"
            },
            {
                "id":13,
                "name":"Dr. Zane Bergstrom",
                "email":"brekke.elvera@example.com",
                "phone":"794.206.9189 x554",
                "website":"http:www.considine.com",
                "created_at":"2019-04-19 19:47:09",
                "updated_at":"2019-04-19 19:47:09"
            },
            {
                "id":14,
                "name":"Prudence Cassin",
                "email":"ukreiger@example.com",
                "phone":"1-334-446-0873 x007",
                "website":"http:klocko.comab-velit-saepe-blanditiis-voluptatibus.html",
                "created_at":"2019-04-19 19:47:09",
                "updated_at":"2019-04-19 19:47:09"
            },
            {
                "id":15,
                "name":"Aleen Stokes",
                "email":"kendra.feest@example.org",
                "phone":"686.302.5237 x66028",
                "website":"https:www.lesch.netest-ut-ut-et-amet-esse",
                "created_at":"2019-04-19 19:47:09",
                "updated_at":"2019-04-19 19:47:09"
            },
            {
                "id":16,
                "name":"Prof. Quincy Pollich",
                "email":"robert.fisher@example.org",
                "phone":"636.276.0078",
                "website":"http:cronin.bizsit-iusto-laborum-impedit-sequi-natus-ipsa",
                "created_at":"2019-04-19 19:47:09",
                "updated_at":"2019-04-19 19:47:09"
            },
            {
                "id":17,
                "name":"Lula Ruecker",
                "email":"wilbert.king@example.org",
                "phone":"(924) 501-6291 x35408",
                "website":"https:hahn.comid-consequatur-dolorem-deserunt-nobis-voluptate.html",
                "created_at":"2019-04-19 19:47:09",
                "updated_at":"2019-04-19 19:47:09"
            },
            {
                "id":18,
                "name":"Agnes Klein",
                "email":"lehner.billie@example.org",
                "phone":"(443) 738-8989 x54141",
                "website":"http:www.marks.infoveritatis-excepturi-voluptas-autem-dolor-vero-libero",
                "created_at":"2019-04-19 19:47:09",
                "updated_at":"2019-04-19 19:47:09"
            },
            {
                "id":19,
                "name":"Lowell Stracke",
                "email":"arath@example.com",
                "phone":"607-540-8425 x1484",
                "website":"http:www.runolfsson.netsequi-vel-deleniti-cupiditate-molestiae-est",
                "created_at":"2019-04-19 19:47:10",
                "updated_at":"2019-04-19 19:47:10"
            },
            {
                "id":20,
                "name":"Mario Kunze PhD",
                "email":"ywehner@example.net",
                "phone":"+1-634-338-7016",
                "website":"http:vonrueden.infocumque-quia-eaque-nihil-et-aut",
                "created_at":"2019-04-19 19:47:10",
                "updated_at":"2019-04-19 19:47:10"
            }
        ]
    }
};

module.exports = {
    getRandomUsers,
    getAllMessages,
    getConversationMessages,
    getUsersStatic,
    getCustomersStatic,
};