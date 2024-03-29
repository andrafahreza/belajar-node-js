import process from "process"

process.addListener("exit", function (exitCode) {
    console.info(`NodeJS exit with code ${exitCode}`)
})

console.info(process.version)
console.table(process.report)
console.table(process.argv)
console.table(process.env)

process.exit(1)

console.info("tidak terpanggil karena process exit")