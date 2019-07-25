var msgTimer;

if($('.wrapper').find('.puzzleContainer').length > 0){
    $(document).ready(function(){
        var l = puzzle.currentImg.level + 2;// puzzle level starts at 1 but we need to add 2 as level 1 is 3 x 3 so it displays correctly in the #difficulty div
        $('.imgContainer').splitInTiles();
        $("#slider").slider({  
                value : 3,
                min : 3,
                max : 7,
                step : 1,
                change : function(event,ui){ 
                            puzzle.currentImg.level = $( "#slider" ).slider( "option", "value" ) - 2;
                            var l = puzzle.currentImg.level + 2; 
                            _defaults.x = l;
                            _defaults.y = l;
                            $('#difficulty').text('Level: '+puzzle.currentImg.level+'('+l+'x'+l+')'); 
                            $('.imgContainer').html('<img src="'+puzzle.currentImg.src+'" />').splitInTiles();
                        }
        });  
        $('#difficulty').text('Level: '+puzzle.currentImg.level+'('+l+'x'+l+')');//current level
    });
}  

function progress(t){ 
    var count = 0;
    var numOfTiles = _defaults.x * _defaults.y;    
        $('.parent').each(function(){
            //get the number from the id of each parent&tile and match them against each other
            var parent = this.id.split('parent').pop(),
                tile = $(this).children().attr('id').split('tile').pop();
            if( parent === tile ){
                count++;//+1 on every match
               }
        });
    //Display the progress using width in percent of #progresBar
    var percent = (count / numOfTiles) * 100;
        $('#progressBar').animate({'width' : Math.round(percent) + '%'},350).dequeue();
        if(numOfTiles === count && t !== 'stop'){//if the user has completed the puzzle
            var type = puzzle.currentImg.type;
                type === 'regular' ? $('.tile').draggable('disable') : $('.tile').addClass('paused');
                timer('done'); 
                $('.tile').off().draggable('disable');                
                setTimeout(function(){
                    $('#shuffle').off().//Make the shuffle button into a replay button
                    css('background','url(includes/icons/replay.png) no-repeat center').
                    on('touchstart', function(){ window.location.reload(); });
                }, 700 );
                if( type === 'slider' ){ $('#tile0').animate({'opacity':'1'},800); };
                puzzle.currentImg.playing = false;
     //log the users time in the records object in localstorage
     var wellDone = function(){setTimeout(function(){
                                    message('Well Done<br/><br/>You completed the puzzle in:<br/>'+
                                             min + ' Minute(s) and ' + sec + ' Second(s).', true);}, 700);
                              };
     var savedRecords = JSON.parse(localStorage.getItem('photoShuffleRecords'));
     var type = puzzle.currentImg.type;
         if(savedRecords){
            $(savedRecords.pic).each(function(i){  
                if( savedRecords.pic[i] === puzzle.currentImg.src ){                    
                    if( type === 'regular' ){
                        switch( puzzle.currentImg.level ){ 
                            case 1 :    
                                if(savedRecords.regular.level1[i][0] > min || savedRecords.regular.level1[i][1] >= sec && savedRecords.regular.level1[i][0] >= min || 
                                   savedRecords.regular.level1[i][0] === 0 && savedRecords.regular.level1[i][1] === 0 ){
                                        savedRecords.regular.level1[i] = [min,sec];//if time is better then save new record else message saying Nice Try ect...
                                        wellDone();
                                }else{ 
                                    setTimeout(function(){
                                        message('Nice Try!<br/><br/>But your time of '+min+' minute(s) & '+sec+
                                                ' second(s) didn\'t beat your record of: '+savedRecords.regular.level1[i][0]+
                                                ' minute(s) and '+savedRecords.regular.level1[i][1]+' second(s).',true);}, 700); 
                                };
                                    break;
                            case 2 :
                                if(savedRecords.regular.level2[i][0] > min || savedRecords.regular.level2[i][1] >= sec && savedRecords.regular.level2[i][0] >= min || 
                                   savedRecords.regular.level2[i][0] === 0 && savedRecords.regular.level2[i][1] === 0 ){
                                        savedRecords.regular.level2[i] = [min,sec];//if time is better then save new record else message saying Nice Try ect...
                                        wellDone();
                                }else{ 
                                    setTimeout(function(){
                                        message('Nice Try!<br/><br/>But your time of '+min+' minute(s) & '+sec+
                                                ' second(s) didn\'t beat your record of: '+savedRecords.regular.level2[i][0]+
                                                ' minute(s) and '+savedRecords.regular.level2[i][1]+' second(s).',true);}, 700); 
                                };
                                    break;                                
                            case 3 :
                                if(savedRecords.regular.level3[i][0] > min || savedRecords.regular.level3[i][1] >= sec && savedRecords.regular.level3[i][0] >= min || 
                                   savedRecords.regular.level3[i][0] === 0 && savedRecords.regular.level3[i][1] === 0 ){
                                        savedRecords.regular.level3[i] = [min,sec];//if time is better then save new record else message saying Nice Try ect...
                                        wellDone();
                                }else{ 
                                    setTimeout(function(){
                                        message('Nice Try!<br/><br/>But your time of '+min+' minute(s) & '+sec+
                                                ' second(s) didn\'t beat your record of: '+savedRecords.regular.level3[i][0]+
                                                ' minute(s) and '+savedRecords.regular.level3[i][1]+' second(s).',true);}, 700); 
                                };
                                    break;
                            case 4 :
                                if(savedRecords.regular.level4[i][0] > min || savedRecords.regular.level4[i][1] >= sec && savedRecords.regular.level4[i][0] >= min || 
                                   savedRecords.regular.level4[i][0] === 0 && savedRecords.regular.level4[i][1] === 0 ){
                                        savedRecords.regular.level4[i] = [min,sec];//if time is better then save new record else message saying Nice Try ect...
                                        wellDone();
                                }else{ 
                                    setTimeout(function(){
                                        message('Nice Try!<br/><br/>But your time of '+min+' minute(s) & '+sec+
                                                ' second(s) didn\'t beat your record of: '+savedRecords.regular.level4[i][0]+
                                                ' minute(s) and '+savedRecords.regular.level4[i][1]+' second(s).',true);}, 700); 
                                };
                                    break; 
                            case 5 :
                                if(savedRecords.regular.level5[i][0] > min || savedRecords.regular.level5[i][1] >= sec && savedRecords.regular.level5[i][0] >= min || 
                                   savedRecords.regular.level5[i][0] === 0 && savedRecords.regular.level5[i][1] === 0 ){
                                        savedRecords.regular.level5[i] = [min,sec];//if time is better then save new record else message saying Nice Try ect...
                                        wellDone();
                                }else{ 
                                    setTimeout(function(){
                                        message('Nice Try!<br/><br/>But your time of '+min+' minute(s) & '+sec+
                                                ' second(s) didn\'t beat your record of: '+savedRecords.regular.level5[i][0]+
                                                ' minute(s) and '+savedRecords.regular.level5[i][1]+' second(s).',true);}, 700); 
                                };
                                    break;                                  
                           default :message('Sorry there was an error saving your time <br/>'+
                                            'but your time was '+min+' minutes and '+sec+' seconds.');
                        }
                    }else if( type === 'slider' ){
                        switch( puzzle.currentImg.level ){ 
                            case 1 :    //console.log('sr min= ' + savedRecords.level1[i][0] + '  min= ' + min + '  sr sec= ' + savedRecords.level1[i][1] + '  sec=' + sec + 'sr min= ' + savedRecords.level1[i][0]);
                                if(savedRecords.slider.level1[i][0] > min || savedRecords.slider.level1[i][1] >= sec && savedRecords.slider.level1[i][0] >= min || 
                                   savedRecords.slider.level1[i][0] === 0 && savedRecords.slider.level1[i][1] === 0 ){
                                        savedRecords.slider.level1[i] = [min,sec];//if time is better then save new record else message saying Nice Try ect...
                                        wellDone();
                                }else{ 
                                    setTimeout(function(){
                                        message('Nice Try!<br/><br/>But your time of '+min+' minute(s) & '+sec+
                                                ' second(s) didn\'t beat your record of: '+savedRecords.slider.level1[i][0]+
                                                ' minute(s) and '+savedRecords.slider.level1[i][1]+' second(s).',true);}, 700); 
                                };
                                    break;
                            case 2 :
                                if(savedRecords.slider.level2[i][0] > min || savedRecords.slider.level2[i][1] >= sec && savedRecords.slider.level2[i][0] >= min || 
                                   savedRecords.slider.level2[i][0] === 0 && savedRecords.slider.level2[i][1] === 0 ){
                                        savedRecords.slider.level2[i] = [min,sec];//if time is better then save new record else message saying Nice Try ect...
                                        wellDone();
                                }else{ 
                                    setTimeout(function(){
                                        message('Nice Try!<br/><br/>But your time of '+min+' minute(s) & '+sec+
                                                ' second(s) didn\'t beat your record of: '+savedRecords.slider.level2[i][0]+
                                                ' minute(s) and '+savedRecords.slider.level2[i][1]+' second(s).',true);}, 700); 
                                };
                                    break;                                
                            case 3 :
                                if(savedRecords.slider.level3[i][0] > min || savedRecords.slider.level3[i][1] >= sec && savedRecords.slider.level3[i][0] >= min || 
                                   savedRecords.slider.level3[i][0] === 0 && savedRecords.slider.level3[i][1] === 0 ){
                                        savedRecords.slider.level3[i] = [min,sec];//if time is better then save new record else message saying Nice Try ect...
                                        wellDone();
                                }else{ 
                                    setTimeout(function(){
                                        message('Nice Try!<br/><br/>But your time of '+min+' minute(s) & '+sec+
                                                ' second(s) didn\'t beat your record of: '+savedRecords.slider.level3[i][0]+
                                                ' minute(s) and '+savedRecords.slider.level3[i][1]+' second(s).',true);}, 700); 
                                };
                                    break;
                            case 4 :
                                if(savedRecords.slider.level4[i][0] > min || savedRecords.slider.level4[i][1] >= sec && savedRecords.slider.level4[i][0] >= min || 
                                   savedRecords.slider.level4[i][0] === 0 && savedRecords.slider.level4[i][1] === 0 ){
                                        savedRecords.slider.level4[i] = [min,sec];//if time is better then save new record else message saying Nice Try ect...
                                        wellDone();
                                }else{ 
                                    setTimeout(function(){
                                        message('Nice Try!<br/><br/>But your time of '+min+' minute(s) & '+sec+
                                                ' second(s) didn\'t beat your record of: '+savedRecords.slider.level4[i][0]+
                                                ' minute(s) and '+savedRecords.slider.level4[i][1]+' second(s).',true);}, 700); 
                                };
                                    break;  
                            case 5 :
                                if(savedRecords.slider.level5[i][0] > min || savedRecords.slider.level5[i][1] >= sec && savedRecords.slider.level5[i][0] >= min || 
                                   savedRecords.slider.level5[i][0] === 0 && savedRecords.slider.level5[i][1] === 0 ){
                                        savedRecords.slider.level5[i] = [min,sec];//if time is better then save new record else message saying Nice Try ect...
                                        wellDone();
                                }else{ 
                                    setTimeout(function(){
                                        message('Nice Try!<br/><br/>But your time of '+min+' minute(s) & '+sec+
                                                ' second(s) didn\'t beat your record of: '+savedRecords.slider.level5[i][0]+
                                                ' minute(s) and '+savedRecords.slider.level5[i][1]+' second(s).',true);}, 700); 
                                };
                                    break;                                      
                           default :message('Sorry there was an error saving your time<br/><br/>'+
                                            'Your time was '+min+' minutes and '+sec+' seconds.');
                        }
                    }
                }
            });
            localStorage.setItem('photoShuffleRecords',JSON.stringify(savedRecords));
        }
    }else if(t === 'stop'){//if the user has pressed solve
        var type = puzzle.currentImg.type;
            type === 'regular' ? $('.tile').draggable('disable') : $('.tile').addClass('paused');
            timer('stop'); console.log('puzzle solved');
            puzzle.currentImg.playing = false;
            //Make the shuffle into a try agian button
            $('#shuffle').off().
                          css('background','url(includes/icons/tryAgain.png) no-repeat center').
                          on('touchstart', function(){ window.location.reload(); });
            }
}

function timer(t){
    if(changeTime){clearTimeout(changeTime);};
      var m = Number($('#minutes').html()); 
      var s = Number($('#seconds').html());
        if(t === 'done' || t === 'stop'){
            //do nothing
        }else{
            changeTime = window.setTimeout( function(){              
                if( s === 59 ){
                    s = -1;
                    ++m;
                    m.toString();
                    $('#minutes').html(m);
                }
                s++;
                s < 10 ? s = '0' + s.toString() : s.toString();
                $('#seconds').html(s);
                min = Number(m); console.log(m + typeof(m)); //set global min variable before it is turned back into a string to be used in the progress function                
                sec = Number(s); console.log(s + typeof(s));//set global sec variable before it is turned back into a string to be used in the progress function
                timer();
            }, 1000);            
        }
}

function solve(){
        var i, numOfTiles = _defaults.x * _defaults.y;      
            $('.tile').removeClass('fadeTile');//.off();
            for( i=0; i < numOfTiles; i++ ){
                var parent = $('#parent'+i);
                var parentPos = parent.position();
                var tile = $('#tile'+i);
                var tPos = tile.position(); 
                    parent.append(
                        $(tile).css({'position':'absolute'}).
                            css(tPos).
                            animate(parentPos,2200) );
                            if( puzzle.currentImg.type === 'slider' ){ $('#tile0').animate({'opacity':'1'},2000).dequeue(); };
            }
            setTimeout(function(){
                message('Nice Try');
                progress('stop');
            },2800);
            puzzle.currentImg.playing === false;     
}
function message(t,confirm,callback){
    window.clearTimeout(msgTimer);            
    if( $('body').find($('.messageBG')) > 0 ){
        $('.messageBG').remove();    
    }    
    $('.wrapper').prepend(
            '<div class="messageBG">'+
            '   <div class="messageContainer">'+
            '       <div class="messageText">' + t + '</div>'+
            '       <div id="msgConfirm"></div>'+
            '   </div>'+
            '</div>'
            ).fadeIn(300);
    if(confirm !== true){
        msgTimer = window.setTimeout(
                     function(){
                        $('.messageBG').fadeOut(300).queue(function(){
                            $(this).remove();
                        });
                     }, 2500);
    }
    $('#msgConfirm').on('touchstart', function(){
        $('.messageBG').fadeOut(300).queue(function(){
            $(this).remove();
        });
        if(callback){ callback(); };
    });
}
function pause(){
    var type = puzzle.currentImg.type;
        timer('stop');
        type === 'regular' ? $('.tile').draggable('disable').addClass('fadeTile') : $('.tile').addClass('paused fadeTile');
        $('.puzzleTitle').addClass('puzzlePaused');
        $('#showPic').off();
        $('#shuffle').off().
                      css('background','url(includes/icons/play.png) no-repeat center').
                      on('touchstart', function(){ 
                          timer();
                          makeDraggable('.tile');
                          type === 'regular' ? $('.tile').draggable('enable').removeClass('fadeTile') : $('.tile').removeClass('paused fadeTile'); 
                          $('.puzzleTitle').removeClass('puzzlePaused');
                          $(this).css('background','url(includes/icons/pause.png) no-repeat center').
                                  on('touchstart', function(){ pause(); });
                          $('#showPic').fadeIn(700).on('touchstart', function(){
                                  $('#showTheImg').show();
                          });
                          $('#showPic').on('touchend', function(){
                                  $('#showTheImg').hide();
                          }); 
                      });
}
function records(){ //Create a records list, pull records from localstorage and append to records list 
    var savedRecords = JSON.parse(localStorage.getItem('photoShuffleRecords')); //de-stringify the local storae string back into an object
        if( savedRecords && savedRecords.pic && savedRecords.pic.length > 0 ){ //if records exist retrieve it from  localstorage        
            $('.wrapper').prepend('<div class="pannelRight">'+
                                  '   <div class="pannelRightInner">'+
                                  '     <div id="scroller">'+
                                  '         <ul>'+
                                  '         </ul>'+
                                  '     </div>'+
                                  '   </div>'+                          
                                  '   <div id="pannelOK"></div>'+
                                  '</div>');
            $(savedRecords.pic).each(function(i){ 
               var s1M = savedRecords.slider.level1[i][0] > 0 ? savedRecords.slider.level1[i][0]+'min ' : '';
               var s1S = savedRecords.slider.level1[i][1] > 0 ? savedRecords.slider.level1[i][1]+'sec' : ''; 
               var r1M = savedRecords.regular.level1[i][0] > 0 ? savedRecords.regular.level1[i][0]+'min ' : '';
               var r1S = savedRecords.regular.level1[i][1] > 0 ? savedRecords.regular.level1[i][1]+'sec' : '';
               var s2M = savedRecords.slider.level2[i][0] > 0 ? savedRecords.slider.level2[i][0]+'min ' : '';
               var s2S = savedRecords.slider.level2[i][1] > 0 ? savedRecords.slider.level2[i][1]+'sec' : ''; 
               var r2M = savedRecords.regular.level2[i][0] > 0 ? savedRecords.regular.level2[i][0]+'min ' : '';
               var r2S = savedRecords.regular.level2[i][1] > 0 ? savedRecords.regular.level2[i][1]+'sec' : '';   
               var s3M = savedRecords.slider.level3[i][0] > 0 ? savedRecords.slider.level3[i][0]+'min ' : '';
               var s3S = savedRecords.slider.level3[i][1] > 0 ? savedRecords.slider.level3[i][1]+'sec' : ''; 
               var r3M = savedRecords.regular.level3[i][0] > 0 ? savedRecords.regular.level3[i][0]+'min ' : '';
               var r3S = savedRecords.regular.level3[i][1] > 0 ? savedRecords.regular.level3[i][1]+'sec' : '';         
               var s4M = savedRecords.slider.level4[i][0] > 0 ? savedRecords.slider.level4[i][0]+'min ' : '';
               var s4S = savedRecords.slider.level4[i][1] > 0 ? savedRecords.slider.level4[i][1]+'sec' : ''; 
               var r4M = savedRecords.regular.level4[i][0] > 0 ? savedRecords.regular.level4[i][0]+'min ' : '';
               var r4S = savedRecords.regular.level4[i][1] > 0 ? savedRecords.regular.level4[i][1]+'sec' : '';     
               var s5M = savedRecords.slider.level5[i][0] > 0 ? savedRecords.slider.level5[i][0]+'min ' : '';
               var s5S = savedRecords.slider.level5[i][1] > 0 ? savedRecords.slider.level5[i][1]+'sec' : ''; 
               var r5M = savedRecords.regular.level5[i][0] > 0 ? savedRecords.regular.level5[i][0]+'min ' : '';
               var r5S = savedRecords.regular.level5[i][1] > 0 ? savedRecords.regular.level5[i][1]+'sec' : '';               
                $('.pannelRight ul').append(
                  '<li id="'+i+'" class="button record" style="background-image:url('+savedRecords.pic[i]+')">'+
                  '<div class="removeIt recordButtons">x</div>'+
                  '<div class="playIt recordButtons"></div>'+                  
                  '   <table>'+
                  '     <tr>'+
                  '         <th>LEVEL</th><th id="recordsSliderHeader">SLIDER</th><th id="recordsRegularHeader">REGULAR</th>'+
                  '     </tr><tr>'+
                  '         <td class="lev">1:(3x3)</td><td>'+s1M+''+s1S+'</td>'+                  
                  '          <td>'+r1M+''+r1S+'</td>'+
                  '     </tr>'+    
                  '     <tr>'+
                  '         <td class="lev">2:(4x4)</td><td>'+s2M+''+s2S+'</td>'+                  
                  '         <td>'+r2M+''+r2S+'</td>'+
                  '     </tr>'+      
                  '     <tr>'+
                  '         <td class="lev">3:(5x5)</td><td>'+s3M+''+s3S+'</td>'+                  
                  '         <td>'+r3M+''+r3S+'</td>'+
                  '     </tr>'+    
                  '     <tr>'+
                  '         <td class="lev">4:(6x6)</td><td>'+s4M+''+s4S+'</td>'+                  
                  '         <td>'+r4M+''+r4S+'</td>'+
                  '     </tr>'+                   
                  '     <tr>'+
                  '         <td class="lev">5:(7x7)</td><td>'+s5M+''+s5S+'</td>'+                  
                  '         <td>'+r5M+''+r5S+'</td>'+
                  '      </tr>'+                     
                  '    </table>'+
                  '</li>');
                  $('.pannelRight').delay(300).animate({'right' : '0%'}, 200);                                              
            });
            //make new iScroll object after records have been populated
            scroller = new IScroll('.pannelRightInner');
            document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);//for iscroll
        }else{ message('No records found...'); };
    $('#pannelOK').on('touchstart', function(){
        $('.pannelRight').animate({'right' : '-100%'}, 200).queue(function(){
            $(this).remove();
        });
    });
    $('.playIt').on('touchstart', function(){
        var id = parseFloat($(this).parent().attr('id'));                        
            if( savedRecords.pic[id] !== puzzle.currentImg.src ){
                confirmation('Do you want to play this puzzle?','playRecord',id);
            }else{ message('This images is already in use.'); }
    });
    $('.removeIt').on('touchstart', function(){
        var id = parseFloat($(this).parent().attr('id')),                
            clickedImg = savedRecords.pic[id], 
            url = window.location.pathname,
            page = url.substr(url.lastIndexOf('/') + 1).toLowerCase();
            if( puzzle.currentImg.src !==  clickedImg || page === 'index.html' ){ 
                confirmation('Are you sure you want to delete this record?','confDel',id);
            }else{ message( 'You can\'t remove a record of an image that is currently being used.<br/>'+
                            'Go back to the main menu if you would like to remove it.',true); 
            };
    });
} 
function deleteRecord(id){ console.log('index to delete='+typeof(id));
    var savedRecords = JSON.parse(localStorage.getItem('photoShuffleRecords'));
        savedRecords.pic.splice(id,1);
        savedRecords.regular.level1.splice(id,1);
        savedRecords.regular.level2.splice(id,1);
        savedRecords.regular.level3.splice(id,1);
        savedRecords.regular.level4.splice(id,1); 
        savedRecords.regular.level5.splice(id,1);                                     
        savedRecords.slider.level1.splice(id,1);
        savedRecords.slider.level2.splice(id,1);
        savedRecords.slider.level3.splice(id,1);
        savedRecords.slider.level4.splice(id,1);
        savedRecords.slider.level5.splice(id,1);
        message('Record deleted...');
        $('.pannelRight').animate({'right' : '-100%'}, 200).queue(function(){
            $(this).remove();
            records();  
        }); 
        localStorage.setItem('photoShuffleRecords',JSON.stringify(savedRecords));
}
function reset(){
            localStorage.removeItem('photoShuffleImg');
            localStorage.removeItem('photoShuffleRecords');
            localStorage.removeItem('puzzleType');   
            window.location.reload();  
}
function confirmation(t,func,id){
    window.clearTimeout(msgTimer);   // In case a message has just been shown and the timer is still counting,         
    if( $('body').find($('.messageBG')) > 0 ){
        $('.messageBG').remove(); // this will prevent messageBG div from being removed.   
    }
    $('.wrapper').prepend(
        '<div class="messageBG">'+
        '   <div class="messageContainer">'+
        '       <div class="messageText">'+ t + '</div>'+
        '       <div class="confDelContainer">'+
        '           <div id="confirm" class="conf"></div>'+
        '           <div id="cancel" class="conf"></div>'+            
        '       </div>'+
        '   </div>'+
        '</div>'
        ).fadeIn(300);
        $('#cancel').on('touchstart', function(){
          $('.messageBG').fadeOut(300).queue(function(){
             $(this).remove();    
          });        
        });
    switch(func){
        case 'removeImg' :
             $('#confirm').on('touchstart', function(){
                $('.messageBG').fadeOut(300).queue(function(){
                     $(this).remove();
                     localStorage.removeItem('photoShuffleImg');
                     window.location.reload();        
                });
             });
             break;
        case 'reset' :
             $('#confirm').on('touchstart', function(){
                $('.messageBG').fadeOut(300).queue(function(){
                    reset();
                });
             });
             menu();
             break;
        case 'confDel' :             
             $('#confirm').on('touchstart', function(){
                $('.messageBG').fadeOut(300).queue(function(){
                    $(this).remove();
                    deleteRecord(id);
                });
             });                     
             break;
         case 'restart' :
              $('#confirm').on('touchstart', function(){
                $('.messageBG').fadeOut(300).queue(function(){
                     window.location.reload();        
                });
             });
             break;
         case 'solve' :
              $('#confirm').on('touchstart', function(){
                $('.messageBG').fadeOut(300).queue(function(){
                    setTimeout(solve,500);                
                });
             });
         case 'back' :
              $('#confirm').on('touchstart', function(){
                $('.messageBG').fadeOut(300).queue(function(){
                    window.location.replace('index.html');                
                });
              });              
              break; 
         case 'home' :
              $('#confirm').on('touchstart', function(){
                $('.messageBG').fadeOut(300).queue(function(){
                    window.location.replace('index.html');                
                });
              });              
              break; 
         case 'slider' :
              $('#confirm').on('touchstart', function(){
                $('.messageBG').fadeOut(300).queue(function(){
                    window.location.replace('slider.html');                
                });
              });              
              break;                          
         case 'regular' :
              $('#confirm').on('touchstart', function(){
                $('.messageBG').fadeOut(300).queue(function(){
                    window.location.replace('regular.html');                
                });
              });              
              break; 
         case 'playRecord' : 
              $('#confirm').on('touchstart', function(){
                    var savedRecords = JSON.parse(localStorage.getItem('photoShuffleRecords'));
                    var img = savedRecords.pic[id];
                        localStorage.setItem('photoShuffleImg',img); 
                        $('.confDelContainer').html('<div id="reg" class="conf"></div><div id="sli" class="conf"></div>');
                        $('.messageText').text('Choose puzzle type.');
                        $('#reg,#sli').on('touchstart', function(){
                            if( this.id === 'reg' ){ 
                                window.location.replace('regular.html');
                            }else{
                                window.location.replace('slider.html');
                            }
                        });
              });              
              break;
        default : menu();
    }
}
function menu(){
    var menu = $('.mainMenu').offset(); 
    var visible = menu.left;            
        if(visible < 0 ){ 
            $('.mainMenu').animate({'left':'0px'},200, 'linear');
        }else{ 
            $('.mainMenu').animate({'left':'-80%'},200, 'linear');
        }    
}
//button listeners
$('.mainMenu li, #mainMenuButton').on('touchstart', function(e){
e.stopPropagation();
var id = this.id; console.log(id+' clicked');
var img = localStorage.getItem('photoShuffleImg');
switch(id){
    //menu button
    case 'mainMenuButton' : 
         menu();
         break;
    //menu buttons
    case 'about' :
         var date = new Date();
         var year = date.getFullYear();
         var about = '<u>About<u><br/><br/>'+
                     'Photo Shuffle v1.0.1<br/><br/>'+                    
                     'by Nick Bibby '+year+'<br/>'+
                     '<a href="mailto:photoshuffle@nickbibby.me">'+
                     'email:photoshuffle@nickbibby.me</a>';
             menu();
             setTimeout(function(){ message(about, true); }, 700);
         break;
    case 'home' :
         menu();
         if( puzzle.currentImg.playing === true ){         
             confirmation('Are you sure you want to go to the home screen?<br/><br/>Your progress will be lost.','home');
         }else{ window.location.replace('index.html'); };
         break;
    case 'sliderPuzzle' :
         menu();
         if( puzzle.currentImg.playing === true ){                 
            confirmation('Are you sure you want start a slider puzzle?<br/><br/>Your progress will be lost.','slider');
         }else{ window.location.replace('slider.html'); };
         break;
    case 'regularPuzzle' :
         menu();
         if( puzzle.currentImg.playing === true ){         
            confirmation('Are you sure you want start a regular puzzle?<br/><br/>Your progress will be lost.','regular');
         }else{ window.location.replace('regular.html'); };         
         break;     
    case 'solve' :
         menu();
         if( puzzle.currentImg.playing === true ){ 
             pause();
             confirmation('Are you sure you want the device to solve the puzzle<br/><br/>Your current progress will be lost!','solve');
         }else{ message('Puzzle has not been started, no puzzle to solve'); }         
         break;       
    case 'restart' :
         menu();
         if( puzzle.currentImg.playing === true ){        
            confirmation('Your current progress will be lost!<br/><br/>Are you sure you want to restart?','restart');
         }else{ window.location.reload(); };            
         break;      
    case 'records' :
         menu();
         records();         
         break;    
    case 'reset' :
         menu();        
         confirmation('Are you sure you want to reset the app?<br/><br/>All your records will be lost.','reset');         
         break; 
    case 'remove' : 
         menu();
         if( img ){console.log(img+'img');
            confirmation('Are you sure you want to remove the image?<br/><br/>It will still remain in your records.','removeImg');
         }else{ message('No image to remove'); };
         break;
    case 'share' :
         menu();
         window.plugins.socialsharing.share('Check out Photo Shuffle on the google play store!','Photo Shuffle app','http://nickbibby.me/photoshuffle/logo.png','http://play.google.com/store/apps/details?id=com.game.photoshuffle');
         break;
    }
}); 
function pauseApp(){
    if(puzzle.currentImg.playing === true){
        pause();
    }   
}
function resumeApp(){
    var menu = $('.mainMenu').offset(); 
    var visible = menu.left;   console.log('playing = '+ puzzle.currentImg.playing );
        if(visible === 0 ){ 
            $('.mainMenu').animate({'left':'-80%'},200, 'linear');
        }    
        if(puzzle.currentImg.playing === true){
            message('Your game has been paused');
        }
}
function backButton(){
    var menu = $('.mainMenu').offset(); 
    var visible = menu.left;   console.log('playing = '+ puzzle.currentImg.playing );
        if(visible === 0 ){ 
            $('.mainMenu').animate({'left':'-80%'},200, 'linear');
        }        
        if(puzzle.currentImg.playing === true){  
            confirmation('Are you sure you want to go back to the home screen?<br/><br/>Your current progress will be lost.','back');
        }else(window.location.replace('index.html'));
}
function init(){
        document.addEventListener("pause", pauseApp, false);
        document.addEventListener("resume", resumeApp, false);   
        document.addEventListener("menubutton", menu, false);   
        document.addEventListener("backbutton", backButton, false);
}
document.addEventListener("deviceready", init, false);