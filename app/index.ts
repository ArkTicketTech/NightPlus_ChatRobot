import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as expressJwt from 'express-jwt'
import * as APIOutputMiddleware from './middlewares/APIOutputMiddleware'
import * as router from './router'
import * as config from 'config'

const app = express()

app.use(bodyParser.json())
app.use(expressJwt({secret: config.get('jwt.secret')}).unless({path: ["/token"]}))
// investigation: how to simplify export! :(
app.use(APIOutputMiddleware.APIOutputMiddleware)
app.use(router.router)

app.listen(config.get('app.port') || 3000)