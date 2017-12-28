export class Message {
    public readonly text: string;
    public readonly from: string;
    public readonly created?: string;

    private constructor(text: string, from: string, created: string) {
        this.text = text;
        this.from = from;
        this.created = created;
    }

    static from(text: string, from: string, created = new Date().toLocaleTimeString()) {
        const arr = created.split(":");
        return new Message(text, from, `${arr[0]}:${arr[1]}`);
    }
}
