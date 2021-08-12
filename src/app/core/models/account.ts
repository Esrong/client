import { Role } from './role';

// export class Account {
//     id: String;
//    phone: number;
//    region: String;
//    zone: String;
//    wereda: String;
//    kebele: String;
//    firstName: String;
//    lastName: String;
//    email: String;
//    role: Role;
//    date: Date;
//    gender:String;
//    jwtToken?: any;
// }
export class Account{
    constructor(
        public id: string,
        public phone: number,
        public region: string,
        public zone: string,
        public wereda: string,
        public kebele: string,
        public firstName: string,
        public lastName: string,
        public email: string,
        public role: Role,
        public gender: string,
        public age: number,
        public citizenship:string,
        public jwtToken?: any,
        


    ){}
}