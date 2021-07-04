export class NumberState{
    id: Number;
    checkedOut: Boolean;

    constructor(id, isChecked){
        this.id = id;
        this.checkedOut = isChecked;
    }
}