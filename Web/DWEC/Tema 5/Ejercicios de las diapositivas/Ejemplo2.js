function getEventType(event) {
    const log = document.getElementById('log');
    log.innerText += `${event.type}\n`;
}
    
    // Keyboard events
document.addEventListener('keydown', getEventType, false);
document.addEventListener('keyup', getEventType, false);

    // Mouse events
document.addEventListener('mousedown', getEventType, false);
document.addEventListener('click', getEventType, false); 