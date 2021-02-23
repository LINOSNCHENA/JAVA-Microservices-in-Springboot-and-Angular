// export class WorkerX {
//     id:any;
//     name!: String;
//     dept!: String;
//     post!: String;
//     salary!: Number;  
//     status!: String;
//     createdat!: Date; 
// }

export class Worker1 {

    id!: Number;
    name!: String;
    dept!: String;
    post!: String;
    salary!: Number;
    published!: false;

}


export class Worker {

    id!: Number;
    name!: String;
    dept!: String;
    post!: String;
    salary!: Number;  
    status!: String;
    createdat=new Date(); 
}