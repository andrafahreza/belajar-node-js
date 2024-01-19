function samplePromise() {
    return Promise.resolve("Andra")
}

const name = await samplePromise()
console.info(name)