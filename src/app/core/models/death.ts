import { Civil } from "./civil.model";

export class Death{
    constructor(
        public id: string,
        public reason: string, 
        public place: string,
        public evidance: string,
        public region:string,
        // public countDeath:number,
        public deathDate: Date,
        // public details: Civil[],
        public registrationDate:Date,
    ){}
}