const readline = require ('readline-sync')
function start() {
const content = {}

content.searchTerm = askAndReturnSearchTerm()

function askAndReturnSearchTerm () {
    return readline.question('digite o termo da wikipedia: ')
}
console.log(content)
}
start()