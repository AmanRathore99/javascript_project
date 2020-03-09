class Admin{

    //  constructor(){
    //      let students = [];
    //    localStorage.setItem('Students', JSON.stringify(Array.from(students))); 
    //  }
     addStudent(student){


        var id= NaN;
        if(localStorage.getItem('ID') == null){
            id = 1;
        }else{
            id = parseInt(localStorage.getItem('ID')) + 1;
        }
        localStorage.setItem('ID', id);        
        let students = new Map(JSON.parse(localStorage.getItem('map')));
        students.set(id.toString(),student);
        localStorage.setItem('map', JSON.stringify(Array.from(students)));
        return students;
    }


getstudent(){

    let students = new Map(JSON.parse(localStorage.getItem('map')));
    return students;
}

deletestudent(id){

    let students = new Map(JSON.parse(localStorage.getItem('map')));
    students.delete(id.toString());
    localStorage.setItem('map', JSON.stringify(Array.from(students)));
    return students;

}
searchstudent(srch){
 // debugger;
 let j= [];
    let students = new Map(JSON.parse(localStorage.getItem('map')));
     students.forEach((n,i) =>{
        for(let x=0 ; x < n.Certification.length || x <n.SpecialAchievements.length ; x++){
            if(n.Certification[x] == srch || n.SpecialAchievements[x] == srch ){
                console.log(n.Certification[x]);
                j.push(i);
            }
        }   
                   
     }); return j;
    

    }
 }

