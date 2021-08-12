export class Civil{
    constructor(

        public id: string,
        public name: string,
        public fname: string,
        public gname: string,
        public gender: string,
        public image:string,
        public birthDate: Date,
        public age:Number,
        public birthPlace: string,
        public citizenship: string,
        public ethnicOrigin: string,
        public religion: string,  
        public region:string,
        public zone:string,
        public wereda: string,  
        public kebele:string,
        public marriage:string,
        public divorce:string,

       
        public countCivil:number,
        // public motherInfo:String,
        // public otherThanParent:string,
  
    ){}
}
export interface SearchResult {
    civils: Civil[];
    total: number;
}