var students = [
    {
        name: 'Ajin',
        age: 23,
        class: 12,
        marks: {
            'english': 80,
            'tamil': 20,
            'maths': 30,
            'science': 44,
            'social': 55
        }
    },
    {
        name: 'Mukesh',
        age: 23,
        class: 12,
        marks: {
            'english': 80,
            'tamil': 20,
            'maths': 30,
            'science': 44,
            'social': 55
        }
    },
    {
        name: 'shagar',
        age: 23,
        class: 12,
        marks: {
            'english': 80,
            'tamil': 20,
            'maths': 30,
            'science': 44,
            'social': 55
        }
    },
    {
        name: 'sreeju',
        age: 23,
        class: 12,
        marks: {
            'english': 80,
            'tamil': 20,
            'maths': 30,
            'science': 44,
            'social': 55
        }
    }
]

// write a function to calculate total marks, average marks, total no of passes, total no of fails for each student


function calculate(students) {

    for (let i = 0; i < students.length; i++) {

        let student = students[i];
        let marks = student.marks

        let totalMarks = marks.english + marks.tamil + marks.maths + marks.science + marks.social
        let average = totalMarks/5
        let fails = 0
        let passes = 0


        if(marks.english>35){
            passes++
        }else{
            fails++
        }

        if(marks.tamil>35){
            passes++
        }else{
            fails++
        }
        if(marks.maths>35){
            passes++
        }else{
            fails++
        }
        if(marks.science>35){
            passes++
        }else{
            fails++
        }
        if(marks.social>35){
            passes++
        }else{
            fails++
        }

        console.log('name ', student.name)
        console.log('average ', average)
        console.log('passes ', passes)
        console.log('fails ',fails)
        

    }

}

calculate(students)