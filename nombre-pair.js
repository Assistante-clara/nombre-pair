exports.action = function (data) {
try{

var phrase=ClaraIA.reco
console.log("on envoie : ",phrase)
var foo = phrase
var nbr=foo.match(/\d+/g).join('')
console.log(nbr)

var rep = "";
  
function nbr_pair_impair(rep) {
      if (data.rep !== undefined) {

var valeur = nbr;
  if(valeur%2 == 0) { ClaraIASpeech(valeur+" est un nombre pair"); }
  else { ClaraIASpeech(valeur+" est un nombre impair"); }
    }
  }

  console.log(rep)
  nbr_pair_impair(rep)
}catch(err){console.log(err);return }
}