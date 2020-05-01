function getIP(interfaces) {
    function reduceAddr(addresses, ifname) {
        // Get all Networks ipv4
        const ipAddr = interfaces[ifname].filter(ifaddr => ifaddr.family === 'IPv4')
        if (ipAddr.length > 0) addresses.push(ipAddr[0])
        return addresses
    }

    const Addrs = Object.keys(interfaces).reduce(reduceAddr, [])
    
    return {
        localIp: Addrs[0].address,
        publicIp: Addrs[1].address
    }
}

export default getIP
