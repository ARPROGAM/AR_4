document.addEventListener('DOMContentLoaded', () => {
    const sceneView = document.querySelector('scene-view');
    const lockPositionBtn = document.getElementById('lockPosition');
    const unlockPositionBtn = document.getElementById('unlockPosition');
    const lockRotationBtn = document.getElementById('lockRotation');
    const unlockRotationBtn = document.getElementById('unlockRotation');
    const scaleUpBtn = document.getElementById('scaleUp');
    const scaleDownBtn = document.getElementById('scaleDown');

    let positionLocked = false;
    let rotationLocked = false;
    let scale = 1;
    
    sceneView.src = 'your-model.glb'; // Replace with your GLB file path

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
        sceneView.style.transform = `scale(${scale})`;
    });

    scaleDownBtn.addEventListener('click', () => {
        scale = Math.max(0.1, scale - 0.1);
        sceneView.style.transform = `scale(${scale})`;
    });

    // Apply transformations based on locking state
    sceneView.addEventListener('model-loaded', () => {
        const model = sceneView.querySelector('model-viewer');
        
        if (positionLocked) {
            model.style.transform = 'translate(0, 0, 0)';
        }
        
        if (rotationLocked) {
            model.style.transform += 'rotate(0deg)';
        }
    });
});
