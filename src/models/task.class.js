import { Levels } from "./levels.enum";

export class Task{
    name=" ";
    description=" ";
    complete=false;
    level=Levels.NORMAL

    constructor(name,description,complete,level){
        this.name=name;
        this.description=description;
        this.complete=complete;
        this.level=level
    }
}