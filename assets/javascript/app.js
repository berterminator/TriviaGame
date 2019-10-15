$(function(){
   
    // Variables setup
    var triviaPart = $("#trivia-content-div");
    var allDonePart = $("#all-done");
    var startBtn = $("#start-button");
    var startDiv = $("#start-div");

    // Trivia Questions Part
    $(triviaPart).hide();
    $(allDonePart).hide();


    // Show trivia questions
    $(startBtn).on("click", function(){
        $(startDiv).hide();
        $(triviaPart).show();
    });
    
    // Set timer




});