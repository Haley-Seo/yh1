let ads = ['cool','pretty','weird','okay I guess','special','oh wait, error, please try again','boring','decent','a color','the best'];

function tellTruth(){

  let yourName = document.querySelector('input').value;
  console.log(yourName);

  let pick = ads[Math.floor(Math.random()*ads.length)]
  let truth = document.querySelector('.truth');
  truth.textContent = yourName + ' is ' +pick;
}
