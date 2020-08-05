var idglobal = 0;
var question = [
    {
        id: 1,
        question: "JavaScript is a ... ?",
        answer: ["SOAP and TCP/IP", "TCP/IP and UDP", "UDP and XML", "XML and SOAP"],
        result: "D",
        selected_answer: ""
    },
    {
        id: 2,
        question: "________is .NET equivalent of Java Virtual Machine (JVM).",
        answer: ["CLS", "CTS", "CLR", "Base Class Library"],
        result: "C",
        selected_answer: ""
    },
    {
        id: 3,
        question: "How many times are .NET programs compiled?",
        answer: ["1", "2", "3", "4"],
        result: "B",
        selected_answer: ""
    },
    {
        id: 4,
        question: "Which method of the Control class conceals the control from the user?",
        answer: ["Hide", "Visible", "Dispose", "Close"],
        result: "B",
        selected_answer: ""
    },
    {
        id: 5,
        question: "Validity of a page can be checked using the ... property.",
        answer: ["ValidateControl", "ControlToValidate", "IsValidControl", "IsValid"],
        result: "D",
        selected_answer: ""
    },
    {
        id: 6,
        question: "Unlike const however, read-only fields are NOT______.",
        answer: ["explicitly internal", "explicitly static", "implicitly static", "implicitly internal"],
        result: "C",
        selected_answer: ""
    },
];

function show(id) {
    document.getElementById("stt").innerHTML = id + 1;
    document.getElementById("questions").innerHTML = question[id].question;
    document.getElementById("A").innerHTML = question[id].answer[0];
    document.getElementById("B").innerHTML = question[id].answer[1];
    document.getElementById("C").innerHTML = question[id].answer[2];
    document.getElementById("D").innerHTML = question[id].answer[3];

}
show(idglobal);
document.getElementById("pre").style.display = "none";
document.getElementById("out").innerHTML = idglobal + 1;
document.getElementById("of").innerHTML = question.length;

var getValue = document.querySelectorAll("#as");

function save_answer(idglobal){
    for(let i = 0 ; i < getValue.length; i++){
        if(getValue[i].checked) question[idglobal].selected_answer=getValue[i].value;
    }
}

function Mark(){
    var count =0;    
    for(let i = 0 ; i < question.length; i++){
        if(question[i].result==question[i].selected_answer) count++;
    }
    return count;
}

function moveon() {
    save_answer(idglobal);
    
    if(document.getElementById("next").innerHTML=="submit"){        
        alert("You get " + Mark() + " point");
        for(let i = 0 ; i < question.length; i++){
            question[i].selected_answer="";
            idglobal=-1;
        }
    }
    
    idglobal++;
    holdResult();
    console.log(question[idglobal]);


    if (idglobal == question.length) idglobal = 0;
    show(idglobal);
    if(idglobal==0){
        document.getElementById("pre").style.display = "none";
    }else{
        document.getElementById("pre").style.display = "block";
    }
    
    if (idglobal == question.length-1) {
        document.getElementById("next").innerHTML="submit";
    }else{
        document.getElementById("next").innerHTML="next question";
    }

    document.getElementById("out").innerHTML = idglobal + 1;
    document.getElementById("of").innerHTML = question.length;

}
function movedown() {
    
    save_answer(idglobal);
    
    idglobal--;
    holdResult();
    console.log(question[idglobal]);
    show(idglobal);

    document.getElementById("next").innerHTML="next question";
    if (idglobal == 0) {
        document.getElementById("pre").style.display = "none";
    }

    document.getElementById("out").innerHTML = idglobal + 1;
    document.getElementById("of").innerHTML = question.length;;

    
    
}
document.getElementById("next").addEventListener("click", moveon);
document.getElementById("pre").addEventListener("click", movedown);


function holdResult(){
   
    if(question[idglobal].selected_answer==""){
        for(let i = 0 ; i < getValue.length; i++){
            getValue[i].checked=false;
        }
    }else if (question[idglobal].selected_answer != ""){
        for(let i = 0; i < getValue.length; i++){
            if(getValue[i].value==question[idglobal].selected_answer) {
                console.log(getValue[i].value);
                getValue[i].checked = true;
            }
        }
    }
    
}