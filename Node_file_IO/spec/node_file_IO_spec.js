let Visitor = require("../src/node_file_IO");

describe("save method", () => {


    beforeEach(function () {
        var Visitor;
        Visitor = require('../main');
        Visitor = new Visitor('Kanzi', 25, "20/03/2020", 'attentive', 'Yasta');

    });

    it ("should check if save method is defined", () => {
        // let result = 'File has been created'
        expect(visitor.save()).toBe(result);
    });
});

describe("Load method", () => {
    beforeEach(function () {
    var Visitor;
    Visitor = require('../main');
    visitor = new Visitor('Kanzi', 25, "20/03/2020", "2hr30", 'attentive', 'Yasta');
    });
    
    it("should check if the load method is defined.", () => {
    expect(visitor.load(1)).toBeDefined();
    });
    
    it("should take in a number and load a visitor object file", () => {
    
    let result = JSON.stringify(visitor)
    expect(visitor.load(1)).toEqual(result);
    });
    });
    
    describe("visitor count", () => {
    it("should assign every instance of a visitor a number", () => {
    var Visitor;
    Visitor = require('../src');
    visitor = new Visitor('Kanzi', 30, "25/03/2020", "2hr30", 'attentive', 'Yasta');
    global.count = 0
    let result = counter++
    expect(result).toBeGreaterThan(0)
    });
    });
    