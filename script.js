document.addEventListener('DOMContentLoaded', () => {
    const totalRuntimeInput = document.getElementById('total_runtime');
    const locationSetInput = document.getElementById('location_set');
    const weatherInput = document.getElementById('weather');
    const charactersInput = document.getElementById('characters');
    const dialogueInput = document.getElementById('dialogue');
    const visualStyleInput = document.getElementById('visual_style');
    const lensInput = document.getElementById('lens');
    const cameraMotionInput = document.getElementById('camera_motion');
    const audioInput = document.getElementById('audio');
    const actionsInput = document.getElementById('actions');
    const shotListTimingInput = document.getElementById('shot_list_timing');
    const continuityNotesInput = document.getElementById('continuity_notes');
    const generateBtn = document.getElementById('generateBtn');
    const jsonOutput = document.getElementById('jsonOutput');
    const copyBtn = document.getElementById('copyBtn');
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const body = document.body;

    generateBtn.addEventListener('click', () => {
        const totalRuntime = totalRuntimeInput.value.trim();
        const locationSet = locationSetInput.value.trim();
        const weather = weatherInput.value.trim();
        const characters = charactersInput.value.trim();
        const dialogue = dialogueInput.value.trim();
        const visualStyle = visualStyleInput.value.trim();
        const lens = lensInput.value.trim();
        const cameraMotion = cameraMotionInput.value.trim();
        const audio = audioInput.value.trim();
        const actions = actionsInput.value.trim();
        const shotListTiming = shotListTimingInput.value.trim();
        const continuityNotes = continuityNotesInput.value.trim();

        const sceneObject = {};

        if (totalRuntime) sceneObject.total_runtime = totalRuntime;
        if (locationSet) sceneObject.location_set = locationSet;
        if (weather) sceneObject.weather = weather;
        if (characters) sceneObject.characters = characters;
        if (dialogue) sceneObject.dialogue = dialogue;
        if (visualStyle) sceneObject.visual_style = visualStyle;
        if (lens) sceneObject.lens = lens;
        if (cameraMotion) sceneObject.camera_motion = cameraMotion;
        if (audio) sceneObject.audio = audio;
        if (actions) sceneObject.actions = actions;
        if (shotListTiming) sceneObject.shot_list_timing = shotListTiming;
        if (continuityNotes) sceneObject.continuity_notes = continuityNotes;

        const generatedJson = JSON.stringify(sceneObject, null, 2);
        jsonOutput.textContent = generatedJson;
    });

    copyBtn.addEventListener('click', () => {
        const textToCopy = jsonOutput.textContent;
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert('JSON Copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    });

    // Theme ပြောင်းလဲရန် function
    themeToggleBtn.addEventListener('click', () => {
        if (body.getAttribute('data-theme') === 'dark') {
            body.setAttribute('data-theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
        }
    });
});
