const { writeFileSync } = require("fs")

function writeFile(data) {
    writeFileSync("leaderboard.json", JSON.stringify(data))
}

module.exports = { writeFile }