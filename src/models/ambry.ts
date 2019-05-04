export class Ambry {
    id: number;
    name: String;
    instructions: Array<string>;
    isChecked?:Boolean = false;

    constructor( id: number, name: string, instructions: Array<string> ) {
        this.name = name;
        this.id = id;
        this.instructions = instructions;
    }
}