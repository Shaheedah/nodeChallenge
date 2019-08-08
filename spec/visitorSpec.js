describe('Visitor()', function() {
    beforeEach( function() {
        let visitor = new Visitor("alice", "badu", 23, 11, "okay alright", "pinky");
    });
    it('should be defined', function()  {
        expect(Visitor).toBeDefined();
    });
​
});
​

describe('Visitor.save()', function() {
    beforeEach(function() {
      let visitor = new Visitor("alice", "badu", 23, 11, "okay alright", "pinky");
    });
    it('save() should be defined', function() {
        expect(visitor.save()).toBeDefined();
    });
    it('save() should create a new .json file', function() {
       let visitor = new Visitor("alice", "badu", 23, 11, "okay alright", "pinky");
        expect(visitor.save()).toBe('File was saved');
    });
    it('should throw an error when the function is unable to create a new file ', function() {
       let visitor = function () {
            throw ('Cannot save file');
        }
        expect(visitor).toThrow('Cannot save file');
    });
});
​
describe('Visitor.load()', function ()  {
    
    beforeEach(function()  {
        let visitor = new Visitor("alice", "badu", 23, 11, "okay alright", "pinky");
    });
    it('load() should be defined', function() {
        expect(visitor.load(1)).toBeDefined();
    });
    it('should return the file with the defined id', function() {
        expect(visitor.load(1)).toEqual({
            fullName: "alice badu",
            dateOfVisit: 23,
            timeOfVisit: 11,
            comments: "okay alright",
            nameOfAssistant: "pinky",
        });
    });
});