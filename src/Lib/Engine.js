export class Engine
{
    constructor(message)
    {
        this.message = message
    }

    getInvertedMessage() {
        return this.message.split('').reverse().join('')
    }
}