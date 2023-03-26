// -----main counter or "total"-----
let counter = 0;
document.getElementById('main_button-2').onclick = () => {
    counter = counter + (1);
    document.getElementById('boxes').innerText = counter;
  };
  
//---menu controller---.start
  // _______Upgrades menu______.show
document.getElementById('upgrades_button').onclick = show_Upgrades_menu
  function show_Upgrades_menu(){
    document.getElementById("Upgrades").style.visibility= "visible";
  }
  //_______Settings menu______.show
document.getElementById('settings_button').onclick = show_Settings_menu
  function show_Settings_menu(){
    document.getElementById("Settings").style.visibility= "visible";
  }
  //_______Upgrades menu______.hide
  document.getElementById('upgrades_button_closing').onclick = hide_Upgrades_menu
  function hide_Upgrades_menu(){
    document.getElementById("Upgrades").style.visibility= "hidden";
  }
  //_______Settings menu______.hide
document.getElementById('settings_button_closing').onclick = hide_Settings_menu
  function hide_Settings_menu(){
    document.getElementById("Settings").style.visibility= "hidden";
  }
//---menu controller---.end
//---per-second controller---.start
let per_second = 0;
//---per-second controller---.end
//---Dwafs upgrade contrroler---.start
let dwarfs = 0;
// ⬆Dwarfs counter ⬇Dwarfs 
document.getElementById('dwarfs_purchase').onclick = () => {
    dwarfs = dwarfs + 1;
    document.getElementById('amount_of_dwarfs').innerText = dwarfs;
  };
//---Dwarfs upgrade controller---.end
//---Boxes upgrade controller---.start
  let boxes_a_second = 0;
  
document.getElementById('boxes_a_second').onclick = () => {
    boxes_a_second = boxes_a_second + 1;
    document.getElementById('amount_of_boxes_a_second').innerText = boxes_a_second;
  };
  //---Boxes upgrade controller---.end
  //---More Boxes upgrade controller---.start
  let more_boxes = 0;
  
document.getElementById('more_boxes').onclick = () => {
    more_boxes = more_boxes + 1;
    document.getElementById('amount_of_more_boxes').innerText = more_boxes;
  };
//---More Boxes upgrade controller---.end
//--- ANIMATION-PLAYSTATE-CONTINUE-IF-ALREDY-ACTIVE ---//
//.fill
//.fill
//.fill
//.fill
//.fill
//.fill
//.drill
//--- ANIMATION-PLAYSTATE-CONTINUE-IF-ALREDY-ACTIVE ---//
//play on load
//"//start

