import moment from 'moment-timezone'

moment.tz.setDefault('Asia/Jakarta').locale('id')

const msgHandler = async (client, message) => {
    try {
        const { type, id, from, sender } = message
        let { pushname, verifiedName, formattedName } = sender
        pushname = pushname || verifiedName || formattedName
        const pengirim = sender.id;

        if(type == "product" && message.description?.length > 10000){
            console.log(`[!] VIRTEX DETECTED!!! from ${pushname} (${pengirim})`)
            await client.deleteMessage(from, id)
            console.log("[-] Message deleted!")
            await client.clearChat(from)
            console.log("[-] Chat cleared")
            await client.contactBlock(from)
            console.log("[-] Contact blocked")
            await client.deleteChat(from)
            console.log("[-] Chat deleted")
            console.log("[✓] Job done!")
        }
    } catch (err) {
        console.log('[ERROR]', err)
    }
}
export { msgHandler }