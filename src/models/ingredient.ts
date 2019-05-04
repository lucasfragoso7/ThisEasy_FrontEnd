
export class Ingredient {
    id: number;
    name: String;
    isChecked?:Boolean = false;

    constructor( id: number, name: string) {
        this.name = name;
        this.id = id;
    }
}