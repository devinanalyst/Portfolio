let header = document.querySelector('#intro');
let anim = [
    { t: "{ }", ms: 200 },
    { t: "{_}", ms: 200 },
    { t: "{ }", ms: 200 },
    { t: "{_}", ms: 200 },
    { t: "{D_}", ms: 100 },
    { t: "{DE_}", ms: 100 },
    { t: "{DEV_}", ms: 100 },
    { t: "{DEV_}", ms: 100 },
    { t: "{DEVI_}", ms: 100 },
    { t: "{DEVIN_}", ms: 100 },
    { t: "{DEVIN M_}", ms: 100 },
    { t: "{DEVIN MO_}", ms: 100 },
    { t: "{DEVIN MOO_}", ms: 100 },
    { t: "{DEVIN MOOR_}", ms: 100 },
    { t: "{DEVIN MOORE_}", ms: 100 },
    { t: "{DEVIN MOORE'_}", ms: 200 },
    { t: "{DEVIN MOORE'S_}", ms: 200 },
    { t: "{DEVIN MOORE'S }", ms: 200 },
    { t: "{DEVIN MOORE'S_}", ms: 200 },
    { t: "{DEVIN MOORE'S }", ms: 200 },
    { t: "{DEVIN MOORE'S_}", ms: 200 },
    { t: "{DEVIN MOORE'S }", ms: 200 },
    { t: "{DEVIN MOORE'S_}", ms: 200 },
    { t: "{DEVIN MOORE'S}", ms: 200 },
];
let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerText = step.t;
    i++;

    if (i < anim.length)
        setTimeout(update, step.ms / stepDenominator);
    else {
        header.classList.add('top');
        setTimeout(() => {
            document.getElementById('main').style.opacity = 1;
            initGlobe();
        }, 500);
        window.localStorage.stepDenominator = 2;
    }
}
update();



// scrolling 


  