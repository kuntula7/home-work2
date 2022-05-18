//Task 1
/*
    შექმენით ფუნქცია რომელსაც აქვს ერთი პარამეტრი . 
    ფუნქციას გადაეცით ობიექტი არგუმეტნად 
    
    let sampleObject = {
        isItarable : false,
        sampleArray : [12,63,21,34,98,57]
    }
    თუ მიღებული არგუმენტის isItarable მნიშვნელობა არის ჭეშმარიტი მაშინ დალოგეთ თითოეული ელემენტი
    თუ არ არის ჭეშმარიტი გამოიტანეთ წინადადება "provided array isn't itarable"

*/
function checkIfItarable(obj){
    if(obj.isItarable == 0 ){
        for(var key in obj){
            console.log(key)
        }
    }else{
        return "provided array isn't itarable"
    }
}
let sampleObject = {
    isItarable : false,
    sampleArray : [12,63,21,34,98,57],
}
let check = checkIfItarable(sampleObject)
console.log(check)
//Task 2
/*
    შექმენით ფუნქცია checkPythagoras რომელიც მიიღებს სამ პარამეტრს x,y,z .
    ფუნქციამ უნდა შეამოწმოს თუ აღნიშნული რიცხვების რომელიმე კომბინაცია მაინც
    აკმაყოფილებს პითაგორას თეორემის პირობას a^2 + b^2 = c^2;
    თუ კი ეს პირობა დაკმაყოფილდა ფუნქციამ უნდა დააბრუნოს true 
    წინააღმდეგ შემთხვევაში false
    
*/
function checkPythagoras(x,y,z){
    let a = x;
    let b = y;
    let c = z;
    let result = a*a + b*b == c*c
    let result2 = a*a + c*c == b*b
    let result3 =  b*b + c*c == a*a
    if(result == true || result2 == true || result3 ==true){
        return true
    }else{
        return false
    }
}
let numbers = checkPythagoras(5,3,4)
console.log(numbers)
//Task 3
/*
    დაწერეთ ფუნქცია minMax რომელიც იღებს 1 მასივის ტიპის პარამეტრს 
    და დააბრუნებს მასივის ელემენტებს შორის მაქსიმალურს და მინიმალურს ელემენტს .
    მაგ : [2,14,25,75,11,6] თუ კი ამ მასივს გადავცემთ არგუმენტის სახით ფუნქციამ უნდა
    დააბრუნოს "Min value is 2 and Max value is 75"
*/
function minMax(arr){
    let max = arr[0];
    let min = arr[0];
    for(let i = 0; i < arr.length;i++){
        if(arr[i] > max){
            max = arr[i]
        } 
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return 'min is ' + min + 'max is' + max
}
let array = [2,14,25,75,11,6];
console.log(minMax(array))
//Task 4

/*
დაწერეთ ფუნქცია რომელმაც გადაცემული კუთხის მნიშვნელობით უნდა დააბრუნოს
თუ რა ტიპის კუთხეა . 
კუთხის სახეები:
Acute angle: An angle between 0 and 90 degrees.
Right angle: An 90 degree angle.
Obtuse angle: An angle between 90 and 180 degrees.
Straight angle: A 180 degree angle.

*/
function angle(degree){
    let gradusi = degree;
    if(gradusi > 0 && gradusi <90){
        return 'Acute angles'
    }else if(gradusi == 90){
        return 'Right angle.'
    }else if(gradusi > 90 && gradusi < 180){
        return 'Obtuse angl'
    }else if(gradusi == 180){
        return 'Straight angle'
    }
}
console.log(angle(170))

//Task 5
/*
    დაწერეთ ფუნქცია checkStudentGrade რომელიც მიიღებს ობიექტების მასივს. 
    მაგალითად [{name: student1; grade : 91}, {name: student2; grade : 71}, {name: student3; grade : 45} ]
    ფუნქციამ სტუდენტის ქულის მიხედვით უნდა განსაზღვროს საფინალო შედეგი finalResult 
    ქვემოთ არსებული ცხრილის მიხედვით და ელემენტის ობიექტში დაამატოს propertyს სახით
    მიღებული მასივი დააბრუნებინეთ ფუნქციას .

    0-50 = F
    51-60 = E
    61-70 = D
    71-80 = C
    81-100 = A

    საორიენტაციოდ შედეგი აღნიშNული მაგალითის მიხედვით უნდა იყოს
    [{name: student1; grade : 91 ; finalResult : 'A'}, {name: student2; grade : 71,finalResult : 'C'}, {name: student3; grade : 45, finalResult : 'F'} ]


*/
function checkStudentGrade(arrayObj){
    for(i = 0;i < arrayObj.length;i++){
        let grade = students[i].grade;
        if(grade >0 && grade < 50 ){
            students[i].finalResult = 'F'
        }
        else if(grade >51 && grade < 60 ){ 
            students[i].finalResult = 'E';
        }
        else if(grade >61 && grade < 70 ){
            students[i].finalResult = 'C'; 
        }
        else if(grade >=71 && grade < 80 ){
            students[i].finalResult = 'B';
        }
        else if(grade >81 && grade < 100 ){
            students[i].finalResult = 'A'
        }
    }
    return students
    
}
let students = [{name: 'student1', grade : 91}, {name: 'student2', grade : 71}, {name: 'student3', grade : 45} ]
console.log(checkStudentGrade(students))
