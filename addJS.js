if(!add){window.add = {};}

add.help = function(){
  var g = console.log;
  g('What is this addJS?');
  g('addJS - this is a script what make add CSS, JS simpler to pages');
  g(' ');
  g('How to use?');
  g('');
  g('addJS.JS("execute Somethings","After load do somethings");');
  g('addJS.JS("https://example.com/code.js","After load do somethings");');
  g('Note: You can use one argument');
  g('');
  g('addJS.CSS("my styles","After load do somethings");');
  g('addJS.CSS("https://example.com/styles.css","After load do somethings");');
  g('');
  g('How to connect addJS?');
  g('var a=document.createElement("script");a.src="";document.body.appendChild(a);')
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
