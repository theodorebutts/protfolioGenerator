const fs = require('fs') 

const generatePage = require('./src/pageTemplate.js')

const profileDataArgs = process.argv.slice(2)

const [name, github] = profileDataArgs

fs.writeFile('./index.html', generatePage(name, github), err => {
    if (err) throw new Error(err)

    console.log('Portfolio Complete! Check out index.html to see the output')
})