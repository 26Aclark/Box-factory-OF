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
setInterval(function(){ 
  function calling_addings(){
    per_second = dwarfs_math + per_second;
    document.getElementById('per-second').innerText = per_second;
  };   
}, 1000);
//---per-second controller---.end
//---Dwafs upgrade contrroler---.start
let dwarfs = 0;
// ⬆Dwarfs counter ⬇Dwarfs 
document.getElementById('dwarfs_purchase').onclick = () => {
    dwarfs = dwarfs + 1;
    document.getElementById('amount_of_dwarfs').innerText = dwarfs;
  };
  function dwarfs_math(per_second){
    dwarfs * 2
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