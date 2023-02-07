

// main counter
let counter = 0;
  
document.getElementById('main_button').onclick = () => {
    counter = counter + 10;
    //
    document.getElementById('boxes').innerText = counter;
  };
  //
document.getElementById('upgrades_button').onclick = show_Upgrades_menu
  function show_Upgrades_menu(){
    document.getElementById("Upgrades").style.visibility= "visible" ;
  }
  //
  