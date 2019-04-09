const {exec} = require('child_process');
const fs = require('fs')
const pkg = require('./package.json')

let content = fs.readFileSync('./README.md').toString()

content = content.replace(/\sv([\w|.])*\n/, ` v${pkg.version}\n`)

fs.writeFileSync('./README.md', content)

exec('npm publish', (err, stdout, stderr) => {
    if (err) {
        return console.error(stderr)
    }

    console.log(stdout)
})