
function pressed(){
    let nomk=event.key;
    let e="key-"+nomk;
    let k=document.getElementById(e);
    k.className="key "+"pressed";
}
addEventListener("keypress", pressed);

function released(){
    let nomk=event.key;
    let e="key-"+nomk;
    let k=document.getElementById(e);
    k.className="key "+"released";
}
addEventListener("keyup", released);