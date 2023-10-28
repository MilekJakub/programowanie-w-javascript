const channelsContainer = document.querySelector('#channels');
const soundsContainer = document.querySelector('#sounds');

const recordButton = document.querySelector('#record');
const addChannelButton = document.querySelector('#addChannel');

const defaultChannelButton = document.querySelector('#ch1');
defaultChannelButton.addEventListener('click', channelButtonOnClick);

let defaultChannel = {
    id: 1,
    sounds: []
}

const channels = [
    {
        id: 1,
        sounds: []
    }
];

let recording = false;
let selectedChannel = channels[0];

let selectedChannelButton = defaultChannelButton;
selectedChannelButton.disabled = true;

addChannelButton.addEventListener('click', function() {
    const newChannel = {
        id: channels[channels.length - 1].id + 1,
        sounds: []
    }

    channels.push(newChannel);

    const newChannelButton = document.createElement('button');
    newChannelButton.id = `ch${newChannel.id}`;
    newChannelButton.innerHTML = `Channel ${newChannel.id}`;
    channelsContainer.appendChild(newChannelButton);
    newChannelButton.addEventListener('click', channelButtonOnClick);
});

recordButton.addEventListener('click', function() {
    recording = !recording;

    if (recording) recordButton.innerHTML = "Stop";
    else recordButton.innerHTML = "Record";
});

function channelButtonOnClick(e) {
    e.stopPropagation();
    selectedChannelButton.disabled = false;
    selectedChannelButton = e.target;
    selectedChannelButton.disabled = true;
    let id = parseInt(e.target.id.slice(2));
    selectedChannel = channels[id - 1];
}

document.addEventListener('keypress', onKeyPress)

const KeyToSound = {
    'a': document.querySelector('#s1'),
    's': document.querySelector('#s2')
}

function onKeyPress(event) {

    const sound = {
        element: KeyToSound[event.key],
        timeStamp: event.timeStamp
    }

    playSound(sound);

    if (recording) {
        if (selectedChannel.sounds.length == 0) {
            sound.timeStamp = 0;
            selectedChannel.sounds.push(sound);
        } else {
            sound.timeStamp = selectedChannel.sounds[sounds.lenght - 1].timeStamp - sound.timeStamp;
            selectedChannel.sounds.push(sound);
        }
    }

    console.log(selectedChannel);

}

function playSound(sound) {
    console.log(sound);
    sound.element.currentTime = 0
    sound.element.play()
}