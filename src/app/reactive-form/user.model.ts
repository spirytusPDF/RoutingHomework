export interface User{
    Name:string,
    Email:string,
    Password:string,
    ConfirmPassword:string,
    Degree:string,
    Adress: string,
    Hobbies?:string[],
    PictureLink?:any,
    IsConfirmed:boolean 
}