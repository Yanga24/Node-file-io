const fs = require('fs');
global.counter = 0;

class Visitor {
    constructor(fullName, age, dateofVisit, timeofVisit, comments, visitorAssitor) {
        this.fullName = fullName;
        this.age = age;
        this.dateofVisit = dateofVisit;
        this.timeofVisit = timeofVisit;
        this.comments = comments;
        this.visitorAssitor = visitorAssitor;
        counter++;
        this.number = counter;
    }


save () {
    let data = JSON.stringify(this);
    let num = this.number;
    try {

    } catch (error) {

    } 
    fs.writeFileSync('visitor_' + num + '.json', data);

    return "file has been created."
}

load () {
    let data = JSON.stringify(this)
    try {
        fs.readFileSync(path, data)
    } catch (err) {

        return data
    }

    }
}

let visitor_1 = new Visitor('Yanga Kanzi',25, "20/03/2020", "2hr30", 'attentive', 'Yasta');
let visitor_2 = new Visitor('Nonelela Sobutyu',30, "25/03/2020", "4hr00", 'has potential', 'Nonie');

console.log(visitor_1.save())
console.log(visitor_2.save())
console.log(visitor_1.load())
console.log(visitor_2.load())


module.exports = Visitor;
