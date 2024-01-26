import util from "util"

console.info(util.format("Nama : %s", "Andra"))

const person = {
    firstName: "Andra",
    lastName: "Fahreza"
}

console.info(util.format("Person: %j", person))