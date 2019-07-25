//Global
var changeTime, puzzle; //So we can clear timeOut after every second or when puzzle is solved

function config(){
    //When phonegap is ready, call init function
    //var container = $('.imgContainer').width();
    var screenWidth = window.innerWidth; //console.log(screenWidth);
    var screenHeight = window.innerHeight; //console.log(screenHeight);
        puzzle = { 
            size : function(){ 
                        if( (screenHeight / 100) * 65 < screenWidth ){  //if screen height is too small shrink the value
                            return Math.ceil((screenHeight / 100) * 65);//so that the puzzle fits inside the screen
                        }else{
                            return Math.ceil((screenWidth / 100) * 99);
                        };
                    },
            currentImg : { src : localStorage.getItem('photoShuffleImg'),
                           level : 1,
                           playing : false,
                           type : ''
                         }
        };
    if($('.imgContainer').length > 0 ){//load the image if the container exists i.e. if user enteres into a game
        $('.imgContainer img').attr('src',puzzle.currentImg.src);
    } 
};
config();

