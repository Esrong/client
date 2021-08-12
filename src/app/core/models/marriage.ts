import { Civil } from "./civil.model";
import { Birth } from "./birth.model";
export class Marriage{
    constructor(
        public id: string,
        public place: string,
        public marriageDate: Date,
        public marriageForm: string,
        public region:string,
        // public groom: Civil[],
        // public bride: Civil[],
        public child: Birth[],
        public brideWitnessOne:Civil[],
        public brideWitnessTwo:Civil[],
        public groomWitnessOne:Civil[],
        public groomWitnessTwo:Civil[],
        public countMarriage?:string,

  
    ){}
}