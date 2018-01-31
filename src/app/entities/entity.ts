export class Entity {
    constructor() { }

    id: string;

    clone(): Entity {
        let temp = new Entity();
        for (const key in this) {
            if (this.hasOwnProperty(key)) {
                temp[key] = this[key];
            }
        }
        return temp;
    }
}
