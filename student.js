class Student {

    addCerti(id,certification) {
        let std = new Map(JSON.parse(localStorage.getItem('map')));
        let temp=std.get(id);
        temp.Certification.push(certification);
        std.set(id,temp)
        localStorage.setItem('map',JSON.stringify(Array.from(std)));
       }

    addSA(id,SA) {
        let std = new Map(JSON.parse(localStorage.getItem('map')));
        let temp=std.get(id);
        temp.SpecialAchievements.push(SA);
        std.set(id,temp)
        localStorage.setItem('map',JSON.stringify(Array.from(std)));

    }
    addAddr(id,addr) {
        let std = new Map(JSON.parse(localStorage.getItem('map')));
        let temp=std.get(id);
        temp.StudentAddr= addr;
        std.set(id,temp)
        localStorage.setItem('map',JSON.stringify(Array.from(std)));
    }
    

    getstudent(id){
        let std = new Map(JSON.parse(localStorage.getItem('map')));
        return std.get(id);
    }

    stdlogin(id,pass){
        let std = new Map(JSON.parse(localStorage.getItem('map')));
        let temp = std.get(id);
        if(temp !== undefined && temp.Password==pass){
            sessionStorage.setItem('id',id);
            return true;
        }else{
            return false;
        }
    }
}