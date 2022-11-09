import { create } from '@open-wa/wa-automate'
import options from './util/options.js'
import { msgHandler } from './handler/message/index.js'

const startServer = () => {
    create(options(true))
        .then((client) => {
            console.log('[CLIENT] CLIENT Started!')

            // Force it to keep the current session
            client.onStateChanged((state) => {
                console.log('[Client State]', state)
                if (state === 'CONFLICT' || state === 'UNLAUNCHED') client.forceRefocus()
            })

            // listening on message
            client.onMessage((message) => {
                // Message Handler
                msgHandler(client, message)
            })
        })
        .catch((err) => new Error(err))
}
startServer()