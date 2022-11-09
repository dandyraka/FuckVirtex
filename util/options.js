export default (headless) => {
    return {
        sessionId: 'NOVIRTEX',
        multiDevice: true,
        blockCrashLogs: true,
        logConsole: false,
        headless: headless,
        qrTimeout: 0,
        authTimeout: 60,
        autoRefresh: false,
        useChrome: true,
        disableSpins: true,
        popup: true,
        waitForRipeSession: true,
        killProcessOnBrowserClose: true,
    };
}
