//Déclaration des fonctions de vérification du mot de passe
function Checking(){
  var mdp = document.getElementById('password').value;
  var cmdp = document.getElementById('confirmPassword').value;
  //condition regex
  var regex = /^[a-zA-Z0-9!]+$/;
  if((regex.test(mdp) == true ) && (regex.test(cmdp) == true ) ){
    //condition et validation du mot de passe
  if(cmdp != mdp){
     mdp = document.getElementById('password').style.border = '1px solid red';
     cmdp = document.getElementById('confirmPassword').style.border = '1px solid red';
  }else{
     mdp = document.getElementById('password').style.border = '1px solid green';
     cmdp = document.getElementById('confirmPassword').style.border = '1px solid green';
  }
  //erreur regex
} else {
  alert('Attention aux caractéres utilisé dans votre mot de passe')
}
}
