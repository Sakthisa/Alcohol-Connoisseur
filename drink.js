var step_amt = 0; //Number of steps added by the user when they to upload a new drink
var equip_amt = 0; //Number of equipment added by the user when they try to upload a new drink
var ingred_amt = 0; //Number of ingredients added by the user when they try to upload a new drink


/*
  Function: step_rem()
  Description: This will remove a step input box if the user desires
*/
function step_rem(){
  //Based on the step_amt delete the last created step input box
  remove = document.getElementById("Steps_Div").querySelectorAll("#Steps");
  remove[step_amt-1].parentNode.removeChild(remove[step_amt-1]);
  step_amt--;
  if(step_amt == 0){
    document.getElementById("removeStep").style.display = "none";
  }
}


/*
  Function: equip_rem()
  Description: This will remove a equipment input box if the user desires
*/
function equip_rem(){
  //Based on the equip_amt delete the laste created equipment input box
  remove = document.getElementById("Equipment_Div").querySelectorAll("#Equipment");
  remove[equip_amt-1].parentNode.removeChild(remove[equip_amt-1]);
  equip_amt--;
  if(equip_amt == 0){
    document.getElementById("removeEquip").style.display = "none";
  }
}

/*
  Function: signup()
  Description: If the user wants to create a new account then they will be redirected to the signup page
*/
function signup(){
  location.href = 'sign-up.php';
}

/*
  Function: login()
  Description: If the user wants to login with an existing account then they will be redirected to the log in page
*/
function login(){
  location.href = 'log-in.php';
}


/*
  Function: ingred_rem()
  Description: This will remove an ingredient inbox box if the user desires
*/
function ingred_rem(){
  //Based on the ingred_amt remove the textbox for ingredients
  removeIng = document.getElementById("Ingredients_Div").querySelectorAll("#Ingredients");
  removeIng[ingred_amt-1].parentNode.removeChild(removeIng[ingred_amt-1]);

  //Based on the ingred_amt remove the type listbox
  removeIng = document.getElementById("Ingredients_Div").querySelectorAll("#Type");
  removeIng[ingred_amt-1].parentNode.removeChild(removeIng[ingred_amt-1]);

  //Based on the ingred_amt remove the textbox for Amount
  removeIng = document.getElementById("Ingredients_Div").querySelectorAll("#Amount");
  removeIng[ingred_amt-1].parentNode.removeChild(removeIng[ingred_amt-1]);

  //Based on the ingred_amt remove the TypeAmt listbox
  removeIng = document.getElementById("Ingredients_Div").querySelectorAll("#TypeAmt");
  removeIng[ingred_amt-1].parentNode.removeChild(removeIng[ingred_amt-1]);


  ingred_amt--;
  if(ingred_amt == 0){
    document.getElementById("removeIngr").style.display = "none";
  }

}

/*
  Function: step_add()
  Description: Adds a new step input box if the user desires
*/
function step_add(){
  //Creates a new input textbox for the user to enter additional step information
  step_amt++;
  document.getElementById("removeStep").style.display = "block";
  var steps = document.getElementById("Steps_Div");
  var stepNew = document.createElement("input");
  stepNew.setAttribute("type", "text");
  stepNew.setAttribute("id", "Steps");
  stepNew.setAttribute("name", "Steps");
  stepNew.setAttribute("placeholder", "Step " + step_amt);
  stepNew.required = true;
  steps.appendChild(stepNew);
}

/*
  Function: equip_add()
  Description: Adds a new equipment input box if the user desires
*/
function equip_add(){
  //Creates a new input textbox for the user to enter additional equipment information
  equip_amt++;
  document.getElementById("removeEquip").style.display = "block";
  var steps = document.getElementById("Equipment_Div");
  var stepNew = document.createElement("input");
  stepNew.setAttribute("type", "text");
  stepNew.setAttribute("id", "Equipment");
  stepNew.setAttribute("name", "Equipment");
  stepNew.setAttribute("placeholder", "Equipment " + equip_amt);
  stepNew.required = true;
  steps.appendChild(stepNew);
}

/*
  Function: ingred_add()
  Description: Adds a new ingredient input box if the user desires
*/
function ingred_add(){

  //Creates a new input textbox for the user to enter additional ingredient information
  ingred_amt++
  document.getElementById("removeIngr").style.display = "block";
  var steps = document.getElementById("Ingredients_Div");
  var stepNew = document.createElement("input");
  stepNew.setAttribute("type", "text");
  stepNew.setAttribute("id", "Ingredients");
  stepNew.setAttribute("name", "Ingredient");
  stepNew.setAttribute("placeholder", "Ingredient " + ingred_amt);
  stepNew.required = true;

  steps.appendChild(stepNew);

  //Creates a new listbox where the user can pick what type of ingredient
  var type = document.createElement("select");
  type.setAttribute("id", "Type");
  type.setAttribute("name", "Type");

  optionAlch = document.createElement("option");
  optionAlch.setAttribute("value", "Alcohol");
  alcohol = document.createTextNode("Alcohol");
  optionAlch.appendChild(alcohol);

  optionfill = document.createElement("option");
  optionfill.setAttribute("value", "Filler");
  filler = document.createTextNode("Filler");
  optionfill.appendChild(filler);

  optionseas = document.createElement("option");
  optionseas.setAttribute("value", "Seasoning");
  seasoning = document.createTextNode("Seasoning");
  optionseas.appendChild(seasoning);

  optionfrui = document.createElement("option");
  optionfrui.setAttribute("value", "Fruit");
  fruit = document.createTextNode("Fruit");
  optionfrui.appendChild(fruit);

  optionna = document.createElement("option");
  optionna.setAttribute("value", "NA");
  na = document.createTextNode("N/A");
  optionna.appendChild(na);

  type.appendChild(optionAlch);
  type.appendChild(optionfill);
  type.appendChild(optionseas);
  type.appendChild(optionfrui);
  type.appendChild(optionna);
  steps.appendChild(type);

  //Creates a new text input box where the user can enter the amount of ingredients
  amount = document.createElement("input");
  amount.setAttribute("type", "text");
  amount.setAttribute("id", "Amount");
  amount.setAttribute("name", "Amount");
  amount.setAttribute("placeholder", "Amount");
  amount.required = true;
  steps.appendChild(amount);


  //Creates a new list box where the user can pick what measurement type for the amount
  var typeamt = document.createElement("select");
  typeamt.setAttribute("id", "TypeAmt");
  typeamt.setAttribute("name", "Type");

  optionqt = document.createElement("option");
  optionqt.setAttribute("value", "qt");
  qt = document.createTextNode("qt");
  optionqt.appendChild(qt);

  optionoz = document.createElement("option");
  optionoz.setAttribute("value", "oz");
  oz = document.createTextNode("oz");
  optionoz.appendChild(oz);

  optiontsp = document.createElement("option");
  optiontsp.setAttribute("value", "tsp");
  tsp = document.createTextNode("tsp");
  optiontsp.appendChild(tsp);

  optionna = document.createElement("option");
  optionna.setAttribute("value", "NA");
  na = document.createTextNode("N/A");
  optionna.appendChild(na);

  typeamt.appendChild(optionqt);
  typeamt.appendChild(optionoz);
  typeamt.appendChild(optiontsp);
  typeamt.appendChild(optionna);
  steps.appendChild(typeamt);




}
