const sql = require("./db/connection")
const fs = require("fs")

function arrayify(q) {
    return q.replace(/[\r\n]/g, "").split(";").filter(x => x !== "").map(x => x + ";")
}

async function main() {
    const toprocess = [fs.readFileSync("db/schema.sql").toString(), fs.readFileSync("db/seed.sql").toString()]

    for (const item of toprocess) {
        for (const x of arrayify(item)) {
            await sql.promise().query(x)
        }
    }
    
    process.exit(0)
}

main()