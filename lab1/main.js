// notatnik z zajęć
const liczby = [ ...document.querySelectorAll('.liczba') ];
const dodajPoleBtn = document.querySelector('#dodaj-pole');
const wynikiPojemnik = document.querySelector('#wyniki');

const sumaPole = document.querySelector('#suma');
const sredniaPole = document.querySelector('#srednia');
const minPole = document.querySelector('#min');
const maxPole = document.querySelector('#max');

dodajPoleBtn.addEventListener('click', () => {
    const nowePole = document.createElement("input");
    nowePole.type = "text";
    nowePole.value = "0";
    nowePole.classList.add("liczba");
    liczby.push(nowePole);
    document.querySelector('#pola').appendChild(nowePole);
    usunEventy();
    dodajEventy();
});

function dodajEventy() {
    for (let i = 0; i < liczby.length; i++)
    {
        liczby[i].addEventListener('input', inputEvent);
    }
}

function usunEventy() {
    for (let i = 0; i < liczby.length; i++) {
        liczby[i].removeEventListener('input', inputEvent)
    }
}

function inputEvent() {

    const values = [];

    for (let i = 0; i < liczby.length; i++) {
        const parsed = parseInt(liczby[i].value);

        if (isNaN(parsed)) {
            values.push(0);
            console.error('zla liczba');
        } else {
            values.push(parsed);
        }
    }

    let suma = 0, srednia, min, max;
    
    for (let i = 0; i < values.length; i++) {
        suma += values[i];
    }

    srednia = suma / values.length;

    min = Math.min(...values);
    max = Math.max(...values);

    sumaPole.textContent = suma;
    sredniaPole.textContent = srednia;
    minPole.textContent = min;
    maxPole.textContent = max;
}

dodajEventy();