const LATENCY = 16

export function createMessage({ text }, callback) {
    const timestamp = Date.now()
    const id = 'm_' + timestamp
    const nickname = 'LI HAO'
    const message = {
        id,
        text,
        timestamp,
        nickname
    }
    console.log("message: " + message)
    setTimeout(function() {
        callback(message)
    }, LATENCY)
}