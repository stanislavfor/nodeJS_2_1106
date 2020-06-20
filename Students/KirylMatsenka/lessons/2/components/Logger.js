module.exports = class Logger {
    constructor(file, fs) {
        this.file = file
        this.fs = fs
    }

    log(message) {
        this.fs.appendFile(this.file, this.template(message), 'utf-8', (error) => {
            if (error) {
                console.log(error)
            }
        })
    }

    template(message) {
        return `/////////////////////////////////////\n
        ${message}
        /////////////////////////////////////\n
        `
    }
}