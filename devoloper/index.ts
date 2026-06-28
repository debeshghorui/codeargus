export function consoleLog(from: string, message: string, data?: any, ...args: any[]) {
    if (process.env.NODE_ENV === "development") {
        console.log(`---------------${from}-----------------`);
        console.log(`[${from}] ${message}`);
        if (data) {
            console.log(data);
        }
        if (args.length > 0) {
            console.log(args);
        }
        console.log("-----------------------------------------");
    } else {
        return;
    }
}