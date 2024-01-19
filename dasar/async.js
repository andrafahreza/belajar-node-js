function samplePromise() {
    return Promise.resolve("Andra")
}

async function run() {
    const name = await samplePromise()
    console.info(name)
}

run()