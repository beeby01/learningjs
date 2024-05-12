let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {
  let dob = new Date(userInput.value);

  let d1 = dob.getDate();
  let m1 = dob.getMonth() + 1;
  let y1 = dob.getFullYear();

  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let d3, m3, y3;
  y3 = y2 - y1;

  if(m2 >= m1){
    m3 = m2 - m1;
  }else{
    y3--;
    m3 = 12 + m2 -m1;
  }

  if(d2 >= d1){
    d3 = d2 - d1;
  }else{
    m3--;
    m3 = 12 + m2 -m1;
  }
}
function getDayInMonth(year, month){
    return new Date(year, month, 0).getDate();
}