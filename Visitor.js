var fs = require('fs');
var count = 0
class Visitor {
   constructor ( firstName, secondName, dateOfVisit, timeOfVisit, nameOfAssistant, comments ){
       this.fullname = firstName + " " + secondName;
       this.dateOfVisit = dateOfVisit;
       this.timeOfVisit = timeOfVisit;
       this.nameOfAssistant = nameOfAssistant;
       this.comments = comments;
       this.count = 0;
   }
   get() {
   
       console.log(this.fullname);
   }
    increaseCount() {
       count += 1;
      // console.log(this.count);
   }
   getCount() {
       console.log(count);
       return count;
   }
   save() {
       this.increaseCount();
       this.getCount();
       var path = "visitor_" + count + ".txt";
       var data = "Fullname: " + this.fullname + " Date of Visit: " + this.dateOfVisit + " Time of Visit: " + this.timeOfVisit + " Comment " + this.comments + " Assisstant " + this.nameOfAssistant + ".\n";
       fs.writeFileSync(path, data)
       console.log(count);
   }
   load(index) {
       if(index <= 0) {
           console.log("File doesn't exist");
       }
       var path = "visitor_" + index;
       var data =  fs.readFileSync(path);
       console.log(data);
   }
}
var alice = new Visitor( "alice", "badu", 23/07, 11, "okay alright", "pinky" );
var bob = new Visitor( "bob", "sika", 2/11, 4, "good", "somy");
alice.get();
alice.save();
bob.save();
bob.get();
alice.load(1);
bob.load(2);