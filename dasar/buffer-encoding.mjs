const buffer = Buffer.from("Andra Fahreza", "utf8")

console.info(buffer.toString())
console.info(buffer.toString("hex"))
console.info(buffer.toString("base64"))

const bufferBase64 = Buffer.from("QW5kcmEgRmFocmV6YQ==", "base64")
console.info(bufferBase64.toString("utf8"))