function saturdayFun(reg = 'roller-skate'){
  return `This Saturday, I want to ${reg}!`
};

function mondayWork(def = 'go to the office'){
return `This Monday, I will ${def}.`
};

function wrapAdjective(s = "*"){
  return function(f = 'special'){
    return 'You are ' + s + f + s + '!'
  }


};



/*function mondayWork(mondayDefault = 'go to the office') {
  return `This Monday, I will ${mondayDefault}.`
}
saturdayFun()
 
function wrapAdjective(f = '*') {
  return function inner(p='special') {
    return "You are " + f + p + f + "!"
  }
}*/