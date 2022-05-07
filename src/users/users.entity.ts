export class User{
 email:string
 password:string;
 isApproved:boolean=false
 constructor(e:string,p:string){
this.email = e,
this.password = p
 }
}


export const users = [new User('kanishkanaik97@gmail.com','Kansihka'),new User('kanishkabc123@gmail.com','Kansihkanaik')]