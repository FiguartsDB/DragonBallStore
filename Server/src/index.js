import os from 'os'
import getIp from './utils/getIpAddress'
import App from './app'
import models from './database'

// Run server
const Init = async (ifAddress) => { 
    const addrs = getIp(ifAddress)
    await App.listen(App.get('port'))
    await models.sequelize.sync()
    console.log(
        `🖥  server run on ${addrs.localIp}:${App.get('port')}\n🌎 server run on ${addrs.publicIp}:${App.get('port')}`
    )
}

Init(os.networkInterfaces())
