acronyms = [
    {
        "acronym": "AB",
        "full": "Alpha Bravo Charlie Delta",
        "description": "This does Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta"
    },
    {
        "acronym": "AC",
        "full": "Alpha Bravo Charlie Delta",
        "description": "This does Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta"
    },
    {
        "acronym": "AD",
        "full": "Alpha Bravo Charlie Delta",
        "description": "This does Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta"
    },
    {
        "acronym": "AE",
        "full": "Alpha Bravo Charlie Delta",
        "description": "This does Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta"
    },
    {
        "acronym": "AF",
        "full": "Alpha Bravo Charlie Delta",
        "description": "This does Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta"
    },
    {
        "acronym": "AG",
        "full": "Alpha Bravo Charlie Delta",
        "description": "This does Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta"
    },
    {
        "acronym": "AH",
        "full": "Alpha Bravo Charlie Delta",
        "description": "This does Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta"
    },
    {
        "acronym": "AI",
        "full": "Alpha Bravo Charlie Delta",
        "description": "This does Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta"
    },
    {
        "acronym": "AJ",
        "full": "Alpha Bravo Charlie Delta",
        "description": "This does Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta"
    },
    {
        "acronym": "AK",
        "full": "Alpha Bravo Charlie Delta",
        "description": "This does Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta Alpha Bravo Charlie Delta"
    }
];

version = "v1.1";

// listen for keypress within the searchbar
$(".searchTerm").keyup(function(){
    if($('.searchTerm').val()) {
        gotSearchTerm();
    } else {
        notGotSearchTerm();
    }
});

// check if the searchbar has a value at initial loading
if($('.searchTerm').val()) {
    gotSearchTerm();
};

function gotSearchTerm() {
    $(".title").hide();
    $(".branding").hide();
    $(".search-container").addClass("search-container-top");
    $(".ac-container").show();
    performSearch();
};

function notGotSearchTerm() {
    $(".title").show();
    $(".branding").show();
    $(".search-container").removeClass("search-container-top");
    $(".ac-container").hide();
}

function performSearch() {
    search = $('.searchTerm').val()
    output = "";
    $.each(acronyms, function(i, field){
        if(~field.acronym.toLowerCase().indexOf(search.toLowerCase())) {
            output += "<tr><td>" + field.acronym + "</td><td>" + field.full + "</td><td>" + field.description + "</td></tr>";
        }
    })
    $(".ac-container table tbody").empty(output);
    $(".ac-container table tbody").append(output);
};

$('.version').replaceWith(version);
