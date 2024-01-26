import { URL } from "url";

const web = new URL("https://mhdandra.com/protocol")

console.info(web.toString())
console.info(web.protocol)
console.info(web.host)
console.info(web.pathname)
console.info(web.searchParams)

// Mengubah URL
web.host = "www.diubah.com"
const searchParams = web.searchParams
searchParams.append("status", "premium")

console.info(web.toString())