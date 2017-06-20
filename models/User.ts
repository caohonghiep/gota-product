import {Model} from "./Model";
export class User implements Model{
    _id: string;
    memberId: string;
    username: string;
    phone: string;
    email: string;
    birthday: Date;
    identityNumber: string;
    identityIssueDate: Date;
    identityIssuedBy: string;
    permanentAddress: string;
    temporaryAddress: string;
    treeIds: Array<string>
    bankName: string
    bankBranchName: string;
    bankAccountNumber: string;
    bankAccountName: string;
    createdDate: Date;
    updatedDate: Date;
}
