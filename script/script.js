const colors = ['lightblue', 'lightgreen', 'lightcoral', 'lightyellow', 'lightpink', 'black'];
let currentColorIndex = 0;

document.getElementById('color-btn').addEventListener('click', function(){
    document.body.style.background = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
})

function goToAnotherPage() {
    window.location.href = 'index.html'; 
}
function goToTheOtherPage() {
    window.location.href = 'another-page.html'; 
}

const date = new Date();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    document.getElementById("current-day").innerText = days[date.getDay()];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    document.getElementById("current-date").innerText = `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;





const alertBtn = document.getElementsByClassName('task-btn');
const taskCount = document.getElementById('minus-count');
const taskPlusCount = document.getElementById('plus-count');
    
    let clickedCount = 0;
    
    for (let i = 0; i < alertBtn.length; i++) {
        alertBtn[i].addEventListener('click', function () {
            alertBtn[i].classList.add('bg-gray-400', 'text-gray-500', 'cursor-not-allowed');
            alertBtn[i].disabled = true;
            clickedCount++;
    
            alert("Board Updated Successfully");
            
            let currentCount = parseInt(taskCount.innerText);
            if (currentCount > 0) {
                taskCount.innerText = currentCount - 1;
            }
    
            let currentPlusCount = parseInt(taskPlusCount.innerText);
            taskPlusCount.innerText = currentPlusCount + 1;
            
            if (clickedCount === alertBtn.length) {
                 setTimeout(() => {
                    alert("All tasks are completed!");
                }, 100);
            }
        });
    }
    
    

    function logActivity(taskName, completionText) {
        const currentTime = new Date().toLocaleTimeString();
        const activityLog = document.getElementById('activity-log');
        const activityEntry = document.createElement('p');
        activityEntry.textContent = `${completionText} at ${currentTime}`;
        activityEntry.classList.add('bg-blue-200', 'p-2', 'rounded-md', 'mx-3', 'mb-2');
        activityLog.appendChild(activityEntry);

}

document.getElementById('clear-history').addEventListener('click', 
    function (){
        const activityLog = document.getElementById('activity-log');
        activityLog.innerText = '';
    }
);

    
    