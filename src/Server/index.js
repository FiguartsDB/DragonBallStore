const os = require('os')
const getIp = require('./utils/getIpAddress')
const App = require('./app')

// Run server
const Init = async (ifAddress) => { 
    const addrs = getIp(ifAddress)
    await App.listen(App.get('port'))
    console.log(
        `🖥  server run on ${addrs.localIp}:${App.get('port')}\n🌎 server run on ${addrs.publicIp}:${App.get('port')}`
    )
}

Init(os.networkInterfaces())