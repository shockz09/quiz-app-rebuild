import {useState} from 'react'

   const Content = () => {
    let count = 1;
const [buttonText,setButtonText] = useState('Start Quiz')
    const startquizfun = () => {
      if( document.getElementById('button-primary').innerHTML==='Start Quiz') {
        const buttonsecondary = document.querySelector('.selector-2nd')
        buttonsecondary.classList.remove('container-btn');
        count++
    setButtonText("Next Question")
      
    }
   if(document.getElementById('button-primary').innerHTML==="Next Question") {
   console.log("u suck")
   }
}
const questions = [
    {
        question: 'What is the capital of India?',
        answers: [
            { text: 'Mumbai', correct: false },
            { text: 'Delhi', correct: true },
            { text: 'Lucknow', correct: false },
            { text: 'Kolkata', correct: false },
        ]
    },
    {
        question: 'whats the SI Unit of resistance?',
        answers: [
            { text: 'ohm metre', correct: false },
            { text: 'ampere', correct: false },
            { text: 'ohm', correct: true },
            { text: 'joule', correct: false },
        ]
    },
    {
        question: 'What is the vascular bundle for transport of water in plants?',
        answers: [
            { text: 'phloem', correct: false },
            { text: 'stomata', correct: false },
            { text: 'roots', correct: false },
            { text: 'xylem', correct: true },
        ]
    },
    {
        question: 'What type of bond is formed between hydrogen and chlorine(HCl)?',
        answers: [
            { text: 'ionic', correct: false },
            { text: 'covalent', correct: true },
            { text: 'coordinate', correct: false },
            { text: 'polar covalent', correct: false },
        ]
    },
    {
        question: 'When are the roots of a quadratic equation irrational (where D is discriminant and a is the coefficient of x sqaured)?',
        answers: [
            { text: 'D>0', correct: false },
            { text: 'D<0', correct: true },
            { text: 'D=0', correct: false },
            { text: 'a<0', correct: false },
        ]
    },
    {
        question: 'The roots of a quadratic equation are given by its interception on:',
        answers: [
            { text: 'y axis', correct: false },
            { text: 'z-axis', correct: false },
            { text: 'x-axis', correct: true },
            { text: 'Roots are not on interception', correct: false },
        ]
    }
]
    return (
        <div className="content">
            <div className="container-btn selector-2nd">
                <button className="btn-secondary ">Option 1</button>
                <button className="btn-secondary">Option 2 </button>
                <button className="btn-secondary ">Option 3 </button>
                <button className="btn-secondary">Option 4 </button>
            </div>
            <button id="button-primary" onClick={startquizfun}>{buttonText}</button>
        </div>
    )
}

export default Content;