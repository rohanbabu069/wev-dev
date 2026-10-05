function SetUsername(username){
    //complex DB calls
    this.username=username
}

function Createuser(username,email,password){

        SetUsername.call(this,username) /*here .call use to call the SetUsername method explicitly brna without .call ye valure return nahi krega and with .call we use 'this' example SetUsername.call(this,username)(vdo 44, time 12:00 min)  */
    this.email=email
    this.password=password
}

const rohan = new Createuser('rohan','rohan@123.gmail.com','2343')
console.log(rohan)