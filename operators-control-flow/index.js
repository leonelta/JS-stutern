//Auestion 3

const Science_subjects = ["Physics", "Chemistry", "Biology", "technical Drawing"];
const Arts_subjects = ["Government", "Literature", "Economics", "History"];
const Social_subjects = ["Accounting", "Commerce", "Marketing", "Geography"];
const General_subjects = ["English", "Mathematics"];


let class_group = Arts_subjects;


if (class_group === Science_subjects){
    console.log(Science_subjects);
}

else if(class_group === Social_subjects){
    console.log(Social_subjects);
}

else if(class_group === Arts_subjects){
    console.log(Arts_subjects);
}

else{
    console.log(General_subjects);
}