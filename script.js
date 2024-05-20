var root = document.querySelector(':root')
var container = document.querySelector('.container');
var newTaskInput = document.getElementById('new_task_input')
var taskform = document.getElementById('new_task_form')
var tasksList = document.getElementById('tasksList')
var taskBtns = document.querySelectorAll('.task_check_btn');
var themeBtn = document.querySelector('.theme_toogle_btn');

taskform.addEventListener('submit', function (e) {

    e.preventDefault();
    addTask(newTaskInput.value)

    newTaskInput.value = '';
    container.classList.remove('task_list_empty')
})
 
function addTask(newTask){
    const newTaskItem = document.createElement('li');
    newTaskItem.setAttribute('class','task_item');

    const newCheckbtn = document.createElement('div')
    newCheckbtn.setAttribute('class','task_check_btn')

    const newTaskBio = document.createElement('span')
    newTaskBio.setAttribute('class','task_bio')

    newTaskBio.innerText = newTask
    
    tasksList.appendChild(newTaskItem)
    newTaskItem.appendChild(newCheckbtn)
    newTaskItem.appendChild(newTaskBio)

    onTaskComplete(newCheckbtn)
}

function onTaskComplete(btns) {
    btns.addEventListener('click',function (e) {
        var parent = e.target.parentElement;
        parent.classList.add('task_completed')

        setTimeout(() => {
            parent.remove();
        }, 400)

        if (tasksList.childNodes.length == 1) {
            setTimeout(() => {
                container.classList.add('task_list_empty')
            },800)
        }
    })
}

themeBtn.addEventListener('click', function () {


    var darkTheme = themeBtn.classList.toggle('dark')

    if (darkTheme) {

        root.style.setProperty('--theme-transition', '1s')
        root.style.setProperty('--primary-color', '#1E1E1E')
        root.style.setProperty('--secondary-color', '#3B3B3B')
        root.style.setProperty('--text-color', '#EAEAEA')
        root.style.setProperty('--task-color', '#3B3B3B')
        root.style.setProperty('--footer-color', '#1E1E1E')
        root.style.setProperty('--theme-btn', `url('assets/Light-theme-btn.svg')`)
        root.style.setProperty('--container-bg', `url('./assets/Dark-empty.svg')`)
        root.style.setProperty('--filter', 'invert()')

    } else {
        root.style.setProperty('transition', '1s')
        root.style.setProperty('--primary-color', 'white')
        root.style.setProperty('--secondary-color', '#1E1E1E')
        root.style.setProperty('--text-color', 'black')
        root.style.setProperty('--task-color', 'white')
        root.style.setProperty('--footer-color', '#1E1E1E')
        root.style.setProperty('--theme-btn', `url('assets/Dark-theme-btn.svg')`)
        root.style.setProperty('--container-bg', `url('./assets/Light-empty.svg')`)
    }
})