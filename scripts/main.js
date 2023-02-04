
// main counter
let counter = 0;
  
document.getElementById('main_button').onclick = () => {
    counter = counter + 10;
    //
    document.getElementById('boxes').innerText = counter;
  };
       //document.getElementById('upgrades_button').onClick ={ "document.getElementById('hideaway').style.display='block';">Reveal hidden content
       //onClick="document.getElementById('hideaway').innerHTML='new html goes here';">Update the HTML};