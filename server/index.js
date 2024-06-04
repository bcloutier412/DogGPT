const app = require('./app')
const config = require('./utils/config')
const logger = require('./utils/logger.js')

app.listen(config.PORT, () => {
    logger.info('Sever live on PORT ', config.PORT);
})