let projectName = process.argv[2]
let fs = require('fs')

console.log(projectName)

fs.writeFileSync('./config/project.js', `exports.name = '${projectName}'`)

let exec = require('child_process').execSync
exec('npm run dev', { stdio: 'inherit' })
