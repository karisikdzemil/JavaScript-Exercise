const ul = document.querySelector("ul");
const input = document.querySelector("#search-input");
const searchBtn = document.getElementById("input-btn-search");
const addBtn = document.getElementById("input-btn-add");
const h1 = document.getElementById("NameApp");
const blackDrop = document.getElementById("black-drop");
const addStudent = document.getElementById("add-student");
const addStudentBtn = document.getElementById("add-student-btn");
const addStudentModal = document.getElementById("add-student");
const inputs = addStudentModal.querySelectorAll("input");

const renderItems = (renderArray = students) => {
  ul.innerHTML = "";
  renderArray.map((element) => {
    const li = document.createElement("li");
    const left = document.createElement("span");
    const right = document.createElement("span");
    left.textContent = `${element.name} ${element.surname} `
    right.textContent = ` ${element.department}`;
    li.append(left, right);
    ul.append(li);
  });
};
renderItems(students);

const searchStudentHandler = () => {
  const searchValue = input.value.toUpperCase().replace(/\s+/g, "");
  console.log(searchValue);
  const filteredArr = students.filter((el) => {
    if (
      searchValue === el.name.toUpperCase() ||
      searchValue === el.surname.toUpperCase() ||
      searchValue === el.name.toUpperCase() + el.surname.toUpperCase() ||
      searchValue === el.department.toUpperCase()
    ) {
      return el;
    }
  });
  if (filteredArr.length > 0) {
    ul.innerHTML = "";
    renderItems(filteredArr);
    input.value = '';
  } else {
    alert("Student not found!!");
    input.value = '';
  }
};

const addStudentHandler = () =>{
  const studentCourses = [...inputs[4].value.split(",")];
  const studentGrades = [...inputs[3].value.split(",")];
  const coursesAndGrades = {}
  studentCourses.forEach((el, index)=>{
    coursesAndGrades[el] = studentGrades[index];
  })
  const newStudent = {
    name: inputs[0].value,
    surname: inputs[1].value,
    index: inputs[2].value, 
    grades: {...coursesAndGrades},
    courses: studentCourses,
    department: inputs[5].value
  }
    students.push(newStudent);
    renderItems(students);
    blackDrop.classList.toggle("visible");
    addStudent.classList.toggle("visible");
}

searchBtn.addEventListener("click", searchStudentHandler);
addStudentBtn.addEventListener("click", addStudentHandler);
addBtn.addEventListener("click", ()=>{
    blackDrop.classList.toggle("visible");
    addStudent.classList.toggle("visible");
})
h1.addEventListener("click", () => {
  renderItems(students);
});

