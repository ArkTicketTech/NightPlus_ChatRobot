# NightPlus_ChatRobot
NIGHT+ | 带领年轻人探索新潮夜生活的互动体验平台

# Using

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


# datebase schema

```
 userSchema = new Schema({
     name: String,
     region: String,
     info: {}
 })
```

```
 roomSchema = new Schema({
     name: String,
     region: String,
     userIds: []
 })
```

```
 msgSchema = new Schema({
     from: {
         userId: String
     },
     room: String,
     content: String
 })
```

```
keywordSchema = new Schema({
    keyword: String,
    responseId: Number
})
```

```
 ruleSchema = new Schema({
     name: String,
     query: String,
     responseId: String
 })
```

```
 responseResourceSchema = new Schema({
     response: []
 })
```
