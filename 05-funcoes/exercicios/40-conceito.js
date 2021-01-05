let studentsNotes = [9, 2.7, 7.2, 5, 10]
let students = ['Jackson', 'Beto', 'André', 'Bruner', 'Rodrigo']

function concepts(notes, names)
{    

    for(let i = 0; i < studentsNotes.length; i++){
        

        if(notes[i] >= 0 && notes[i] < 5)
        {

            console.log(`Aluno: ${names[i]}; Conceito: D`)

        }else if(notes[i] >= 5 && notes[i] < 6.9)
        {

            console.log(`Aluno: ${names[i]}; Conceito: C`)

        }else if(notes[i]>= 7 && notes[i] < 8.9)
        {

            console.log(`Aluno: ${names[i]}; Conceito: B`)

        }else if(notes[i] >= 9)
        {

            console.log(`Aluno: ${names[i]}; Conceito: A`)

        }
    }
    
}

concepts(studentsNotes, students)