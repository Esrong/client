import { Civil } from "./civil.model";
export class Birth{
    constructor(
        public id: string,
        public name: string,
        public fname: string,
        public gname: string,
        public gender: string,
        public birthDate: Date,
        public age:Number,
        public birthPlace: string,
        public birthType: string,
        public birthAid: string,
        public ethnicOrigin: string,
        public citizenship: string,
        public region:string,
        public zone:string,
        public wereda: string,        
        public kebele:string,
        public marriage:string,
        public divorce:string,
        public countBirth?:string,
        // public fatherInfo?: Civil[],
        // public motherInfo?: Civil[],
        // public otherThanParent?: Civil[],
    ){}
}