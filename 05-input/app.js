const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const minutesInput = document.getElementById('minutes-input');
const submitBtn = document.getElementById('submit-btn');
const taskList = document.getElementById('task-list');
const toast = document.getElementById('toast');
const previewText = document.getElementById('preview-text');

function isFormValid() {
    const taskText = taskInput.value.trim();
    const minutesValue = parseInt(minutesInput.value, 10);
    const hasValidMinutes = Number.isFinite(minutesValue) && minutesValue > 0;

    return taskText !== '' && hasValidMinutes;
};

function updateSubmitState() {
    submitBtn.disabled = !siFormValid();
};

taskInput.addEventListener('input', (e) => {
    const currentText = e.target.value;
    previewText.textContent = currentText || '...';

    updateSubmitState();
});

minutesInput.addEventListener('input', ()=>{
    updateSubmitState();
});

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const taskText = taskInput.value.trim();
    const minutesValue = parseInt(minutesInput.value, 10);
    const hasValidMinutes = 
        Number.isFinite(minutesValue) && minutesValue > 0
        ? minutesValue: 0;
    
    if (taskText) {
        const li = document.createElement('li');
        li.className = 'task-item';

        const taskTitle = document.createElement('span');
        taskTitle.className = 'task-title';
        taskTitle.textContent = taskText;

        const taskTimer = document.createElement('span');
        taskTitle.className = 'task-timer';
        taskTitle.textContent = formatTaskTime(taskMinutes * 60);

        li.append(taskTitle, tastTimer);
        taskList.prepend(li);
    }
});

function formatTaslTime(seconds) {
    const minutes = 
        Math.floor(seconds / 60).toString().padStart(2, '0');
    const seconds = 
        (seconds % 60).toString().padStart(2, '0');

    return `${minutes}:${seconds}`;

}