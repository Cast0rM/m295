function simuliereVerzoegerung(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
    })
    // setTimeout(() => {
    //     console.log("Fertig")
    // }, ms);
}
async function addiereNachVerzoegerung(a, b, ms) {
    await simuliereVerzoegerung(1000)
    console.log(a + b);
}

addiereNachVerzoegerung(3, 7, 2000)