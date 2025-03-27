function scheduleReminder(task, delay) {
    try {
        if (delay <= 0) {
            throw new Error("Delay must be a positive number!");
        }

        setTimeout(() => {
            console.log(`Reminder: ${task}`);
        }, delay);
        
    } catch (error) {
        console.error(error.message);
    }
}

scheduleReminder("Task Pending", 3000); // Alerts after 3 seconds
//scheduleReminder("Task Pending", -3000); // Throws an error
