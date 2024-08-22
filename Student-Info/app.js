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
const showStudentModal = document.getElementById("show-student");
const closeShowBtn = document.getElementById("close-show-modal");

const renderItems = (renderArray = students) => {
  ul.innerHTML = "";
  renderArray.map((element) => {
    const li = document.createElement("li");
    const left = document.createElement("span");
    const right = document.createElement("span");
    left.textContent = `${element.name} ${element.surname}`;
    right.textContent = ` ${element.index}`;
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
    input.value = "";
  } else {
    alert("Student not found!!");
    input.value = "";
  }
};

const addStudentHandler = () => {
  const studentCourses = [...inputs[4].value.split(",")];
  const studentGrades = [...inputs[3].value.split(",")];
  const coursesAndGrades = {};
  studentCourses.forEach((el, index) => {
    coursesAndGrades[el] = studentGrades[index];
  });
  if (
    inputs[0].value !== "" &&
    inputs[1].value !== "" &&
    inputs[2].value !== "" &&
    inputs[3].value !== "" &&
    inputs[4].value !== "" &&
    inputs[5].value !== ""
  ) {
    const newStudent = {
      name: inputs[0].value,
      surname: inputs[1].value,
      index: inputs[2].value,
      grades: { ...coursesAndGrades },
      courses: studentCourses,
      department: inputs[5].value,
    };
    students.push(newStudent);
    renderItems(students);
    inputs.forEach((el) => (el.value = ""));
    blackDrop.classList.toggle("visible");
    addStudent.classList.toggle("visible");
  } else {
    alert("Invalid data, enter again!");
  }
};

const showStudentHandler = (event) => {
  const showName = showStudentModal.children[1];
  const showIndex = showStudentModal.children[2];
  const showGrades = showStudentModal.children[3];
  const showCourses = showStudentModal.children[4];
  const showDepartment = showStudentModal.children[5];
  const showAverage = showStudentModal.children[6];

  let clickedElement = event.target;

  if (clickedElement.tagName === "SPAN") {
    clickedElement = clickedElement.closest("li");
  }
  if (clickedElement.tagName === "LI") {
    const indexOfEl = clickedElement.children[1].textContent;

    const showStudent = students.find(
      (el) => indexOfEl.trim() === el.index.trim()
    );
    let entries = Object.entries(showStudent.grades).map(
      ([key, value]) => `${key}: ${value}`
    );
    let sum = Object.values(showStudent.grades).reduce(
      (accumulator, currentValue) => {
        let number = parseInt(currentValue);
        return accumulator + number;
      },
      0
    );
    console.log(sum);
    sum = sum / 3;

    showName.textContent = showStudent.name + " " + showStudent.surname;
    showIndex.textContent = showStudent.index;
    showGrades.textContent = entries.join(" ");
    showCourses.textContent = `${showStudent.courses[0]}, ${showStudent.courses[1]}, ${showStudent.courses[2]}`;
    showDepartment.textContent = showStudent.department;
    showAverage.textContent = sum.toFixed(2);
    blackDrop.classList.toggle("visible");
    showStudentModal.classList.toggle("visible");
  }
};

searchBtn.addEventListener("click", searchStudentHandler);
addStudentBtn.addEventListener("click", addStudentHandler);
addBtn.addEventListener("click", () => {
  blackDrop.classList.toggle("visible");
  addStudent.classList.toggle("visible");
});
h1.addEventListener("click", () => {
  renderItems(students);
});
closeShowBtn.addEventListener("click", () => {
  blackDrop.classList.toggle("visible");
  showStudentModal.classList.toggle("visible");
});

ul.addEventListener("click", showStudentHandler);
