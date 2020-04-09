let i = 0;

let begin = 1;

let score = [];
                     
$(".start-button").click(function () {
    
    $(".cube").removeClass("one two three four five six");

    let random_number = Math.floor(Math.random() * 6);
    
    score.push(random_number+1);
    
    scoreBoard();
    
    if(begin){
        
        $(".cube-start").css("animation-play-state","paused");
        
        let matrix3d = $(".cube").css("transform");
        
        $(".cube").css("transform",matrix3d);
        
        $(".cube").removeClass("cube-start");
        
        $(".cube").addClass("cube-restart");
        
        begin = 0; 
    }
    
    let roll = setInterval(progress,5);
        
    function progress() {
        i++
        $(".bar").css("width",i + "px");
        
        $(".progress").removeClass("expandable");
        $("button").addClass("expandable");
        $("button").removeClass("start");
        $("h1").addClass("start");
        $(".progress").removeClass("expandable");
        $("h1").removeClass("expandable");
        
        if(i==300){
            clearInterval(roll);
            $("button").addClass("start");
            $(".progress").addClass("expandable");
            $("button").removeClass("expandable");
            $("h1").addClass("expandable");
            $("h1").removeClass("start");
    
    switch (random_number) {

        case 0:
            $(".cube").addClass("one");
            break;

        case 1:
            $(".cube").addClass("two");
            break;

        case 2:
            $(".cube").addClass("three");
            break;

        case 3:
            $(".cube").addClass("four");
            break;

        case 4:
            $(".cube").addClass("five");
            break;

        case 5:
            $(".cube").addClass("six");
            break;

        default:;

    }
        $(".cube").css("transform","");
        }}
    i=0;
    
    function scoreBoard(){
        
        let l = score.length;
        
        if ( l == 11){
            
            for(let row = 1; row < 11; row++){
                $(".player"+ row).text("");
            }
            
            let last = score[10];
            
            score = [];
            
            score.push(last)
            
            l =1
    
        }
        
        player = ".player" + l;
        
        $(player).text(score[l-1]);
        
    }
    
})

$(".dark-mode").click(darkMode);

$(".light-mode").click(lightMode);

function darkMode() {
    
    $(".container").addClass("start");
    
    $(".cube-face").addClass("dark-cube");
    
    $("body").addClass("dark-body");
    
    $("h1").addClass("dark-heading");

    $(".dark-mode").css("display","none");
    
    $(".light-mode").css("display","block");
    
    $(".main").removeClass("start");   
    
    $(".score-board").removeClass("start");
    
    
};

function lightMode() {
    
    $(".main").addClass("start");
    
    $(".score-board").addClass("start");
    
    $(".cube-face").removeClass("dark-cube");
    
    $("h1").removeClass("dark-heading");
    
    $("body").removeClass("dark-body");
    
    $(".light-mode").css("display","none");
    
    $(".dark-mode").css("display","block");
    
    $(".container").removeClass("start");
    
    $(".table").addClass("start");
    
    $(".back-button").addClass("start");
    
    $(".h1").addClass("start");

};


$(".score-button").click(function (){
    
    $(".main").css("display","none");
    
    $(".table").css("display","table");
    
    $(".back-button").css("display","block");
    
    $(".heading").css("display","block");
    
    $(".cube").addClass("cube-start");
    
    $(".cube").removeClass("cube-restart");
    
    $(".cube-start").css("animation-play-state","running");
    
    $(".cube").removeClass("one two three four five six");
    
    $("h1").removeClass("expandable");
    
    $("h1").addClass("start");
    
    begin = 1;
});

$(".back-button").click(function(){
    
    $("section").css("display","block");
    
    $(".table").css("display","none");
    
    $(".back-button").css("display","none");
    
    $(".heading").css("display","none");
    
});