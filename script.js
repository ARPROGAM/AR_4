document.addEventListener('DOMContentLoaded', () => {
    const modelViewer = document.getElementById('modelViewer');
    const lockPositionBtn = document.getElementById('lockPosition');
    const unlockPositionBtn = document.getElementById('unlockPosition');
    const lockRotationBtn = document.getElementById('lockRotation');
    const unlockRotationBtn = document.getElementById('unlockRotation');
    const scaleUpBtn = document.getElementById('scaleUp');
    const scaleDownBtn = document.getElementById('scaleDown');

    let positionLocked = false;
    let rotationLocked = false;
    let scale = 1;

    // Lock/Unlock Position
    lockPositionBtn.addEventListener('click', () => {
        positionLocked = true;
    });

    unlockPositionBtn.addEventListener('click', () => {
        positionLocked = false;
    });

    // Lock/Unlock Rotation
    lockRotationBtn.addEventListener('click', () => {
        rotationLocked = true;
    });

    unlockRotationBtn.addEventListener('click', () => {
        rotationLocked = false;
    });

    // Scale Up/Down
    scaleUpBtn.addEventListener('click', () => {
        scale += 0.1;
        modelViewer.style.transform = `scale(${scale})`;
    });

    scaleDownBtn.addEventListener('click', () => {
        scale = Math.max(0.1, scale - 0.1);
        modelViewer.style.transform = `scale(${scale})`;
    });

    // Handling position and rotation locking (Basic logic example)
    modelViewer.addEventListener('load', () => {
        if (positionLocked) {
            // Implement your logic to lock position
        }
        
        if (rotationLocked) {
            // Implement your logic to lock rotation
        }
    });
});
