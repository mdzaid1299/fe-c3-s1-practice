//Define User class
class User {
//Field declartions
private username : string;
private password : string;
private contact : number;
private email : string;
private address : string;
//constuctor 
constructor(username : string,password : string,contact : number,email : string,address :string){
    this.username= username;
    this.password = password;
    this.contact = contact;
    this.email = email;
    this.address = address;
    }

}

//Fetch form values using Object.fromentries()
const submitUser = (formData: any) => {

    //call registerUser method with the constructed User object
}
function saveData(){
    let form : any = document.querySelector("#reg-form")
    let formdata:any = new FormData(form)
    let user45 = new User(formdata.get("username"),formdata.get("password"),formdata.get("contact"),formdata.get("email"),formdata.get("address"));
    registerUser(user45)
    return false
}
function registerUser(user: User) {
    fetch("http://localhost:3000/users",{
        method:"post",
        body:JSON.stringify(user),
        headers:{
            "content-type": "application/json;charset=UTF-8"
        }
    }).then(response => response.json()).then(json=> console.log(json))
    //Dispay welcome message after successful registration
    alert("successful registration");
    return false;
}