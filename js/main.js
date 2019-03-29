acronyms = [
    {
        "acronym": "ABCD",
        "full": "Alpha Bravo Charlie Delta",
        "description": "This does Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta"
    },
    {
        "acronym": "ABCD",
        "full": "Alpha Bravo Charlie Delta",
        "description": "This does Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta"
    },
    {
        "acronym": "ABCD",
        "full": "Alpha Bravo Charlie Delta",
        "description": "This does Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta"
    },
    {
        "acronym": "ABCD",
        "full": "Alpha Bravo Charlie Delta",
        "description": "This does Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta"
    },
    {
        "acronym": "ABCD",
        "full": "Alpha Bravo Charlie Delta",
        "description": "This does Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta"
    },
    {
        "acronym": "ABCD",
        "full": "Alpha Bravo Charlie Delta",
        "description": "This does Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta"
    },
    {
        "acronym": "ABCD",
        "full": "Alpha Bravo Charlie Delta",
        "description": "This does Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta"
    },
    {
        "acronym": "ABCD",
        "full": "Alpha Bravo Charlie Delta",
        "description": "This does Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta"
    },
    {
        "acronym": "ABCD",
        "full": "Alpha Bravo Charlie Delta",
        "description": "This does Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta"
    },
    {
        "acronym": "ABCD",
        "full": "Alpha Bravo Charlie Delta",
        "description": "This does Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta"
    }
];

$.each(acronyms, function(i, field){
    console.log(field);
});

// listen for keypress within the searchbar
$(".searchTerm").keyup(function(){
    if($('.searchTerm').val()) {
        console.log("I have a value");
        gotSearchTerm();
    } else {
        console.log("I no longer have a value");
        notGotSearchTerm();
    }
});

// check if the searchbar has a value at initial loading
if($('.searchTerm').val()) {
    console.log("I already have a value");
    gotSearchTerm();
};

function gotSearchTerm() {
    $(".title").hide();
    $(".branding").hide();
    $(".search-container").addClass("search-container-top");
    $(".ac-container").show();

}

function notGotSearchTerm() {
    $(".title").show();
    $(".branding").show();
    $(".search-container").removeClass("search-container-top");
    $(".ac-container").hide();
}
