const readline = require ('readline-sync')
const robots = {
   text: require('./robots/text.js')
}
function start() {
const content = {}

content.searchTerm = askAndReturnSearchTerm()
content.prefix = askAndReturnPrefix()

robots.text(content)

function askAndReturnSearchTerm () {
    return readline.question('digite o termo da wikipedia: ')
}

function askAndReturnPrefix(){
    const prefixes = ['Quem eh', 'O que eh','A Historia de ']
    const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Escolha uma option: ')
    const selectedPrefixText = prefixes[selectedPrefixIndex]
    
    return (selectedPrefixText)

 }  
   

console.log(content)
}
start()