class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
    }
/*     login(){
        console.log(this.email, 'just logged in');
        return this;
    }
    logout(){
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    } */
}

User.prototype.login = (){
    this.online = true;
    console.log(this.email, 'just logged in');
}
User.prototype.logout = (){
    this.online = false;
    console.log(this.email, 'just logged out');
}
User.prototype.updateScore = (){
    this.score++;
    console.log(this.email, 'score is now', this.score);
}

class Admin extends User {
    deleteUser(User){
        users = users.filter(u => {
            return u.email != user.email;
        })
    }
}

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariocorp.com', 'Yoshi');
var admin = new Admin('noreply@admin.com', 'Admin');

var users = [userOne, userTwo, admin];
admin.deleteUser(userTwo);
console.log(users);