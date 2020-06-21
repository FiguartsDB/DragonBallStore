const BASE_URI = process.env.API.split('/api')[0]

const login = async (userLogin) => { 
    try { 
        const config = { 
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userLogin)
        }
        
        const result = await fetch(`${BASE_URI}/auth/login`, config)
        const data = await result.json()
        if (data.error)
            throw Error(data.error)
        
        return data
    } catch (error) { 
        throw Error(error)
    }
}

const singup = async (userSingup) => { 
    try { 
        const config = { 
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userSingup)
        }
        const result = await fetch(`${BASE_URI}/auth/singup`, config)
        const data = await result.json()
        if (data.error)
            throw Error(data.error)
        
        return data
    } catch (error) {
        console.warn(error, 'errror :C')
        throw Error(error)
    }
}

export {
    login,
    singup
}