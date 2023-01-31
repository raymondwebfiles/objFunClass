let cp = {
    brand:"Samsung",
    year:"2018",
    color:"Rose-Gold",
}

document.write("Brand name: "+cp.brand+"<br>")
document.write("year: "+cp.year+"<br>")
document.write("color: "+cp.color+"<br><hr>")

cp.brand = "Oppo";
cp.year = "2020";
cp.color = "white";

document.write("Brand name: "+cp.brand+"<br>")
document.write("year: "+cp.year+"<br>")
document.write("color: "+cp['color']+"<br><hr>")

cp['brand'] = "Vivo";
cp['year'] = "2022";
cp[['color']] = "silver";

let c; //yung brand,year and color si variable c ang hahawak, si cp naman ang content
for(c in cp){
    document.write("Cellphone "+c+": "+cp[c]+"<br>");
}

document.write("<hr><br><h1>Function javascript</h1><br>");
//-------------------------------------------------------
let student = [
    'Roy',
    'Ace',
    'Bob',
    'Ken',
    'Ivan',
    'Aj',
];

function array(arg){
    for(let a=0; a<arg.length; a++ ){
        document.write("Array content: "+arg[a]+"<br>");
    }
}
array(student);
document.write("<hr>");
//--------------------------------------------------------
let anotherFuction = function(arg){
    for(let a=0; a<arg.length; a++ ){
        document.write("Array content: "+arg[a]+"<br>");
    }
}
anotherFuction(student);
//--------------------------------------------------------
document.write("<hr>");
let newFunction = (arg)=>{
    for(let a=0; a<arg.length; a++ ){
        document.write("Array content: "+arg[a]+"<br>");
    }
}
newFunction(student);
//--------------------------------------------------------

document.write("<hr><br><h1>Class javascript</h1><br>");

//--------------------------------------------------------
let employees=['Ana','Lisa','Neng','Mike','Mon','Tues',];
let employees2=['one','two','bob','joe','tes','max',];
class Employee {
    constructor(emp) {
        this.data = emp;
    }

    list(){
        let empData = this.data;
        for(let a=0; a<empData.length; a++ ){
            document.write("Array content "+a+" : "+empData[a]+"<br>");
        }   
    }

    add(newEmp){ //new variable newEmp
        this.data.push(newEmp);
    }
    
    del(employees){ // exsisting array
        this.data.splice(employees, 1); // bilang ng gustong iremove sa array
    }
}
let employee = new Employee(employees);

employee.data = employees2; // update lahat ng laman ng array

employee.add("Toni");
employee.add("Raymond");
employee.del(1); // index ng array na aalisin
employee.list();

//-------------------------------------------------------
document.write("<hr>");


