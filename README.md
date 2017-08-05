# NightPlus_ChatRobot
NIGHT+ | 带领年轻人探索新潮夜生活的互动体验平台

# Environment Setup

```
npm install
npm install -g typings

```

# How to run

```
tsc
node src/index.js
### express server
```

----

#### Using

- install [mongoDB](https://github.com/mongodb/mongo)

```shell
$ cd NightPlus_ChatRobot
$ npm install
$ npm run build-ts
$ npm run dev
```

- get token
```
curl --request POST \
  --url http://localhost:3000/token \
  --header 'authorization: ' \
  --header 'content-type: application/json' \
  --data '{\n	"username": "airplake",\n	"password": "123"\n}'
```

- Books RESTful api