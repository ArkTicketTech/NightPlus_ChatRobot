import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as expressJwt from 'express-jwt'
import { APIOutputMiddleware } from './middlewares/APIOutputMiddleware'
import { UnauthorizedError } from './middlewares/UnauthorizedError'
import { router } from './router'
import * as config from 'config'

const app = express()

app.use(bodyParser.json())
app.use(expressJwt({secret: config.get('jwt.secret')}).unless({path: ["/token"]}))
app.use(APIOutputMiddleware)
app.use(router)
app.use(UnauthorizedError)

app.listen(config.get('app.port') || 3000)