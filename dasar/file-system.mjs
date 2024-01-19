import fs from "fs/promises"

const buffer = await fs.readFile("dasar/file-system.mjs")

console.info(buffer.toString());

await fs.writeFile("temp.txt", "Hello World")