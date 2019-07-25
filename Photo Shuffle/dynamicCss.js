//Dynamic script to insert last of all to set certain css styles so they get priority
//puzzle object declared at top of script.js
var H =  window.innerHeight, 
    W = window.innerWidth;
$('head').append(
    '<style type="text/css">'+
    '.wrapper {\n'+
    '   width:'+ W + 'px;\n'+
    '   height:'+ H + 'px;\n'+
    '   max-width:'+ W + 'px;\n'+
    '   max-height:'+ H + 'px;\n'+
    '   font-size:'+ Math.round(( H / 100) * 2.5 ) + 'px;\n'+    
    '}\n'+
    '.tile{\n'+//this one is particularly important as settinf the css anywhere else using jQuery did not work
    '   background-size:'+ puzzle.size() +'px '+ puzzle.size() +'px !important;\n'+
    '}\n'+
    '.puzzleContainer,.imgContainer{\n'+
    '   width:'+ puzzle.size()+'px;\n'+
    '   height:'+ puzzle.size()+'px;\n'+
    '   max-width:'+ puzzle.size()+'px;\n'+
    '   max-height:'+ puzzle.size()+'px;\n'+    
    '}\n'+
    '#minutes,#seconds{\n'+
    '   font-size:'+ Math.floor(( H / 100) * 5) + 'px;\n'+
    '}\n'+
    '.indexPuzzleType{\n'+
    '   height:'+ ( H / 100) * 10 + 'px;\n'+
    '}\n'+
    '#difficulty {\n'+
    '   line-height:'+ Math.round(( H / 100 ) * 5) + 'px;\n'+
    '   font-size:'+ Math.floor(( H / 100 ) * 3) + 'px;\n'+
    '}\n'+
    '#showPic{\n'+
    '   font-size:'+ Math.round(( H / 100 ) * 7) + 'px;\n'+
    '}\n'+
    '.messageBG{\n'+
    '   max-height:'+ H + 'px !important \n'+
    '   max-width:'+ W + 'px !important \n' +
    '}\n'+   
    '.messageContainer{\n'+
    '   line-height:'+ Math.round(( H / 100) * 3.5 ) + 'px;\n'+     
    '}\n'+      
    '.mainMenu li{\n'+
    '   line-height:'+ Math.round((H / 100) * 10) + 'px;\n'+
    '   font-size:'+ Math.round((H / 100) * 4) + 'px;\n'+
    '}\n'+
    '#panel{\n'+
    '   padding-top:'+ Math.round(( H / 100) * 4) + 'px;\n'+    
    '}\n'+    
    '.pannelRight li{\n'+
    '   height:'+ Math.round(( H / 100) * 15) + 'px;\n'+    
    '   background-size:'+ Math.round(( H / 100) * 13) + 'px '+ Math.round(( H / 100) * 13) + 'px\n'+
    '}\n'+ 
    '.pannelRight table{\n'+
    '   width:'+ Math.round(W - ((H / 100) * 17)) + 'px;\n'+
    '   font-size:'+ Math.round(( H / 100) * 2 ) + 'px;\n'+
    '}\n'+    
    '.pannelRight th, pannelRight td{\n'+
    '   padding: 0 '+ Math.round(( W / 100) * 2 ) + 'px 0 '+ Math.round(( W / 100) * 2 ) +'px;\n'+
    '}\n'+      
    '#previewImg{\n'+
    '   width:'+ Math.round(( H / 100) * 30 ) + 'px;\n'+
    '   height:'+ Math.round(( H / 100) * 30 ) + 'px;\n'+
    '   background-size:'+ Math.round(( H / 100) * 30) + 'px '+ Math.round(( H / 100) * 30) + 'px\n'+        
    '}\n'+  
    '.confDelContainer{\n'+
    '   width:'+ Math.round(( W / 100) * 55 ) + 'px;\n'+
    '   height:'+ Math.round(( H / 100) * 6 ) + 'px;\n'+
    '}\n'+
    '.playIt{\n'+
    '   left:'+ Math.round((( H / 100) * 13) - 20 ) + 'px;\n'+
    '}\n'+    
    '</style>'
);
//$('.button').each( function(){ 
//    $(this).css({
////        'lineHeight' : $(this).css('height'), 
//        'fontSize' : $(this).height() / 1.8 + 'px'
//    });
//});