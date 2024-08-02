
let calendarScreen = document.querySelector('.calendar-screen') // Екран календаря
let taskScreen = document.querySelector('.task-screen') // Екран завдань
let addTaskScreen = document.querySelector('.add-task-screen') // Екран додавання завдань
let datePicker = document.querySelector('.date-picker') // Поле вибору дати
let selectDateButton = document.querySelector('.select-date') // Кнопка вибору дати
let selectedDateSpan = document.querySelector('.selected-date') // Елемент для відображення вибраної дати
let taskDateSpan = document.querySelector('.task-date') // Елемент для відображення дати завдання
let taskList = document.querySelector('.task-list') // Список завдань
let addTaskButton = document.querySelector('.add-task') // Кнопка додавання завдання
let backToCalendarButton = document.querySelector('.back-to-calendar') // Кнопка повернення до календаря
let cancelAddTaskButton = document.querySelector('.cancel-add-task') // Кнопка скасування додавання завдання
let taskForm = document.querySelector('.task-form') // Форма додавання завдання
let taskInput = document.querySelector('.task-input') // Поле введення тексту завдання


// Ініціалізація порожнього об'єкта для зберігання завдань
let tasks = {}


function showScreen(name){
    calendarScreen.style.display = "none"
    taskScreen.style.display = "none"
    addTaskScreen.style.display = "none"
    name.style.display = "block"
}


selectDateButton.addEventListener("click", function(){
    let choosedDate = datePicker.value
    if(!choosedDate){
        alert("Оберіть дату")
        return
    }
    selectedDateSpan.innerHTML = choosedDate
    taskDateSpan.innerHTML  = choosedDate
    showScreen(taskScreen)
    renderTasks(choosedDate)
})


function renderTasks(date){
    taskList.innerHTML = ""
    if(tasks[date]){ //якщо є завдання на обрану дату
        tasks[date].forEach(function(task) {
            let li = document.createElement('li') // Створити елемент списку
            li.textContent = task
            let deleteBtn = document.createElement('button') // Створити кнопку видалення
            deleteBtn.textContent = 'Видалити'
            deleteBtn.classList.add('delete')
            li.appendChild(deleteBtn) // Додати кнопку до елементу списку
            taskList.appendChild(li) // Додати елемент списку до DOM
        })
    }
}


