$(function(){
   
    // The general variables ar set up ahead:

        // Get elements from DOM
        var triviaPart = $("#trivia-content-div");
        var allDonePart = $("#all-done");
        var startDiv = $("#start-div");

        // Buttons
        var startBtn = $("#start-button");
        var finishedBtn = $("#finished-button");
        var tryAgainBtn = $("#try-again-button");
        var inputs = $(".input-r");

        // Radio Inputs
        var radInput = $(inputs).attr("value");


        // Correct vs Incorrect counters
        var correct = 0;
        var incorrect = 0;
        var unaswered = 0;


    // This code get the current year for the footer copyright part:
    var today = new Date();
    var year = today.getFullYear();
    $("#current-year").text(year);


    // This happens when the page loads:
    $(triviaPart).hide();
    $(allDonePart).hide();


    // These methods setup the timer:



    // This happens when the "Start" button is clicked on:
    $(startBtn).on("click", function(){
        $(startDiv).hide();
        $(triviaPart).show();
    });
    

    // This happens when the "Finised" button is clicked:
    $(finishedBtn).on("click", function(){
        $(triviaPart).hide();
        $(allDonePart).show();

        var checked = $(".input").checked;
        console.log("Checked: "+ checked)


        // // These conditionals add to the correct vs incorrect counter variables:
        // $(".input-r").each(function(){
        //     if($(".input-r").attr("value","correct").checked){
        //         correct++
        //         console.log("Correct value: " + correct);
        //         console.log("RadInput: " + radInput);
        //     };
        // });
        
        

    });

    // This happens when the "Try Again" button is clicked on:
    $(tryAgainBtn).on("click",function(){
        $(triviaPart).hide();
        $(allDonePart).hide();
        $(startDiv).show();
    });

    




});