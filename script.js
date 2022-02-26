//will show current date in the header
document.getElementById('currentDay').innerHTML = moment().format('dddd, MMMM Do, YYYY');
//***** store current date as local storage; everytime page is loaded, check current date with date in local storage. if it's different, then clear local storage
let timestamps = ['9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm']

//when I click the save button, the text for that event is saved into local storage and will persist even when I refresh
//$('#saveBtn').on('click', function () {


btns = document.getElementsByClassName("saveBtn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    //Add function here
    console.log(this)
    //grabs the event description of the corresponding time
    let eventText = this.previousElementSibling.value;
    console.log(eventText);
    let ident = this.previousElementSibling.id;
    console.log(ident)
    //local storage
    localStorage.setItem(ident, eventText);
  });
}
//refers to the corresponding unordered list
document.getElementById('9am').value = localStorage.getItem('9am');
document.getElementById('10am').value = localStorage.getItem('10am');
document.getElementById('11am').value = localStorage.getItem('11am');
document.getElementById('12pm').value = localStorage.getItem('12pm');
document.getElementById('1pm').value = localStorage.getItem('1pm');
document.getElementById('2pm').value = localStorage.getItem('2pm');
document.getElementById('3pm').value = localStorage.getItem('3pm');
document.getElementById('4pm').value = localStorage.getItem('4pm');
document.getElementById('5pm').value = localStorage.getItem('5pm');
