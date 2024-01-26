import fs, { read } from "fs"

const writer = fs.createWriteStream("target.loc")

writer.write("Mhd\n")
writer.write("Andra\n")
writer.write("Fahreza\n")
writer.end()

const reader = fs.createReadStream("target.loc")
reader.addListener("data", (data) => {
    console.info(data.toString())
})