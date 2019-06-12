if(typeof add == 'undefined'){window.add = {};}

add.help = function(){
    console.clear(); var g = function(i){console.log(i)};

    g('What is this addJS?\n  addJS - this is a script what make add CSS, JS simpler to pages');
    g('How to use?\n  add.JS("function or URL to JS file","After load do somethings");\n  add.CSS("styles or URL to CSS file","After load do somethings");\n    Note: You can use one argument');
    g('How to connect addJS?\n\nvar a=document.createElement("script");a.src="https://simakyr.github.io/addJS/addJS.js";document.body.appendChild(a)');
    return '';
}
add.detectUrl = function(i){
  var p = document.createElement('a');
  p.href = i;
  return i == p.href;
}
add.JS = function(code,onloadCode){
  var p = document.createElement('script');
  if(add.detectUrl(code)){
    p.src = code;
  }
  else{
    p.innerHTML = code;
  }
  if(typeof onloadCode == 'function'){
    p.onload = onloadCode;
  }
  document.getElementsByTagName('body')[0].appendChild(p);
}

add.CSS = function(code,onloadCode){
  var p;
  if(add.detectUrl(code)){
    p = document.createElement('link');
    p.rel = 'stylesheet';
    p.href = code;
  }
  else{
    p = document.createElement('style');
    p.innerHTML = code;
  }
  if(typeof onloadCode == 'function'){
    p.onload = onloadCode;
  }
  document.getElementsByTagName('body')[0].appendChild(p);
}
