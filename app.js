

function calculateResult(){
  var para_1 = document.querySelector(".para_1");
  var para_2 = document.querySelector(".para_2");
  var para_3 = document.querySelector(".para_3");
  var computer = parseInt(document.querySelector("#computer").value || 0);
  var islamiyat = parseInt(document.querySelector("#islamiyat").value || 0);
  var urdu = parseInt(document.querySelector("#urdu").value || 0);
  var english = parseInt(document.querySelector("#english").value || 0);
  var math = parseInt(document.querySelector("#math").value || 0);


  

  var totalObtainedMarks = computer + islamiyat + urdu + english + math;
  var percentage = (totalObtainedMarks / 500) * 100;

  // -----------------------------------------------------------------------------------------------------

  if (totalObtainedMarks <= 500 && computer <= 100 && islamiyat <= 100 && urdu <= 100 && english <= 100 && math <= 100) {
    document.querySelector("#totalMarks").innerHTML = totalObtainedMarks;
  } else {
    document.querySelector("#totalMarks").innerHTML = "Enter Valid Number";
    para_1.style.color = "red"
  }

  // -----------------------------------------------------------------------------------------------------

  if (percentage <= 100 && computer <= 100 && islamiyat <= 100 && urdu <= 100 && english <= 100 && math <= 100) {
    document.querySelector("#percentage").innerHTML = percentage + "%";


  }else {
    document.querySelector("#percentage").innerHTML = "Enter Valid Number";
    para_2.style.color = "red";
  }

  // -----------------------------------------------------------------------------------------------------

  if (
    percentage >= 90 &&
    computer >= 33 &&
    islamiyat >= 33 &&
    urdu >= 33 &&
    english >= 33 &&
    math >= 33 &&
    computer <= 100 &&
    islamiyat <= 100 &&
    urdu <= 100 &&
    english <= 100 &&
    math <= 100
  ) {
    document.querySelector("#grade").innerHTML = "A+1";


  } else if (
    percentage >= 80 &&
    computer >= 33 &&
    islamiyat >= 33 &&
    urdu >= 33 &&
    english >= 33 &&
    math >= 33 &&
    computer <= 100 &&
    islamiyat <= 100 &&
    urdu <= 100 &&
    english <= 100 &&
    math <= 100
  ) {
    document.querySelector("#grade").innerHTML = "A1";


  } else if (
    percentage >= 70 &&
    computer >= 33 &&
    islamiyat >= 33 &&
    urdu >= 33 &&
    english >= 33 &&
    math >= 33 &&
    computer <= 100 &&
    islamiyat <= 100 &&
    urdu <= 100 &&
    english <= 100 &&
    math <= 100
  ) {
    document.querySelector("#grade").innerHTML = "A";


  } else if (
    percentage >= 60 &&
    computer >= 33 &&
    islamiyat >= 33 &&
    urdu >= 33 &&
    english >= 33 &&
    math >= 33 &&
    computer <= 100 &&
    islamiyat <= 100 &&
    urdu <= 100 &&
    english <= 100 &&
    math <= 100
  ) {
    document.querySelector("#grade").innerHTML = "B";


  } else if (
    percentage >= 50 &&
    computer >= 33 &&
    islamiyat >= 33 &&
    urdu >= 33 &&
    english >= 33 &&
    math >= 33 &&
    computer <= 100 &&
    islamiyat <= 100 &&
    urdu <= 100 &&
    english <= 100 &&
    math <= 100
  ) {
    document.querySelector("#grade").innerHTML = "C";


  } else if (
    percentage >= 40 &&
    computer >= 33 &&
    islamiyat >= 33 &&
    urdu >= 33 &&
    english >= 33 &&
    math >= 33 &&
    computer <= 100 &&
    islamiyat <= 100 &&
    urdu <= 100 &&
    english <= 100 &&
    math <= 100
  ) {
    document.querySelector("#grade").innerHTML = "D";


  } else if (
    percentage >= 33 &&
    computer >= 33 &&
    islamiyat >= 33 &&
    urdu >= 33 &&
    english >= 33 &&
    math >= 33 &&
    computer <= 100 &&
    islamiyat <= 100 &&
    urdu <= 100 &&
    english <= 100 &&
    math <= 100
  ) {
    document.querySelector("#grade").innerHTML = "E";


  } else if (percentage <= 33 || computer <= 33 || islamiyat <= 33 || urdu <= 33 || english <= 33 || math <= 33
  ) {
    document.querySelector("#grade").innerHTML = "Fail";
    para_3.style.color = "red";
    
  }else {
    document.querySelector("#grade").innerHTML = "Enter Valid Number";
    para_3.style.color = "red";
  }
}