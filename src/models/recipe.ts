export class Recipe {
    id: number;
    name: String;
    instructions: Array<String>;

    constructor( id: number, name: string, insttructions:Array<string>) {
        this.name = name;
        this.id = id;
        this.instructions=insttructions;
    }
}