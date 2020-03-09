class Admin {
  //  constructor(){
  //      let students = [];
  //    localStorage.setItem('Students', JSON.stringify(Array.from(students))); 
  //  }
  addStudent(student) {
    let stuID = localStorage.getItem('key');
    let students = new Map(JSON.parse(localStorage.getItem('Students')));
    console.log(students);
    students.set(stuID, student);
    stuID++;
    localStorage.setItem('key', stuID);
    localStorage.setItem('Students', JSON.stringify(Array.from(students)));
    console.log(students);
    return students;
  }

  getstudent() {
    let students = new Map(JSON.parse(localStorage.getItem('Students')));
    return students;
  }

}
