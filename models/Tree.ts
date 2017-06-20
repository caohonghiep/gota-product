import {Model} from "./Model";
export class Tree implements Model{
    _id: string;
    userId: string;
    childrenIds:Array<string>;
    directChildrenIds:Array<string>;
    createdDate: Date;
    updatedDate: Date;
}