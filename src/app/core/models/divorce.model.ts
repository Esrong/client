import { Civil } from "./civil.model";

export class Divorce{
    constructor(
        public id: string,
        public reason: string,
        public place: string,
        public religion: string,
        public divorceInfo:string,
        public divorceDate: Date, 
        public region:string,    
        // public malePartner: Civil[],
        // public femalePartner: Civil[],
        // public countDivorce:number, 
        // public registrationDate:Date,
    ){}
}