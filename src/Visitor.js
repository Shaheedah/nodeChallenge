var fs = require('fs');
var count = 0
class Visitor {
   constructor ( firstName, secondName, dateOfVisit, timeOfVisit, comments, nameOfAssistant ){
       this.fullname = firstName + " " + secondName;
       this.dateOfVisit = dateOfVisit;
       this.timeOfVisit = timeOfVisit;
       this.comments = comments; 
       this.nameOfAssistant = nameOfAssistant;
       this.count = 0;
   }
   
    increaseCount() {
       count += 1;
    
   }
  
   save() {
       this.increaseCount();
       var path = "visitor_" + count + ".json";
       var data = "Fullname: " + this.fullname +"\n"+ " Date of Visit: " + this.dateOfVisit +"\n"+ " Time of Visit: " + this.timeOfVisit + "\n"+ " Comment: " + this.comments + "\n" + " Assisstant: " + this.nameOfAssistant + "\n";
       fs.writeFileSync(path, data);
       console.log(count);
       
    
   }
   load(i) {
    fs.readFile("./visitor_" + i+".json", "utf8",(err, file) => {
     if (err) throw err;
     console.log(file);
   });
}
 
}
var alice = new Visitor( "alice", "badu", 23, 11, "okay alright", "pinky" );
var bob = new Visitor( "bob", "sika", 2, 4, "good", "weby");
var charlie = new Visitor("charlie", "sika", 11, 7, "good", "wonder");

alice.save();
bob.save();
charlie.save();

alice.load(1);
bob.load(2);
charlie.load(3);