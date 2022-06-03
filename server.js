const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage': {
        'age': 29,
        'birthname': "Sheyaa Joseph",
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 29,
        'birthname': `Chancellor Bennett`,
        'birthLocation': 'London, England'
    },
    'unknown': {
        'age': 0,
        'birthname': `unknown`,
        'birth location': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase()
    if( rappers[rapperName] ){
        response.json(rappers[rapperName])
    } else {
        response.json(rappers.unknown)
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}. Wheeeee`)
})