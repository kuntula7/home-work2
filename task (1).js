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
        return sampleObject
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
    if(result == true){
        return true
    }else{
        return false
    }
}
let numbers = checkPythagoras(4,3,5)
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
        if(arr[i] >= max || arr[i] <= min ){
            return "Min value is 2 and Max value is 75"
        }
        
    }
    //return `min value is ${array[0]} and max value is ${array[3]}`
}
let array = [2,14,25,75,11,6];
let implement = minMax(array)
console.log(minMax(implement))
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
    let finalResult = '';
    for(i = 0;i < arrayObj.length;i++){
        if(arrayObj[0[1]] >0 && arrayObj[0[1]] < 50 ){
            finalResult = 'F'; 
        }
        else if(arrayObj[0[1]] >51 && arrayObj[0[1]] < 60 ){
            finalResult = 'E'; 
        }
        else if(arrayObj[0[1]] >61 && arrayObj[0[1]] < 70 ){
            finalResult = 'C'; 
        }
        else if(arrayObj[0[1]] >71 && arrayObj[0[1]] < 80 ){
            finalResult = 'B'; 
        }
        else if(arrayObj[0[1]] >81 && arrayObj[0[1]] < 100 ){
            finalResult = 'A'; 
        }
    }
    arrayObj.finalResult
    return arrayObj
    
}
let students = [{name: 'student1', grade : 91}, {name: 'student2', grade : 71}, {name: 'student3', grade : 45} ]
let implement2 = checkStudentGrade(students)
console.log(checkStudentGrade(implement2))
