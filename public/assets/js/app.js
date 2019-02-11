//Handle Scrape button
$("#scrape").on("click", function() {
    $.ajax({
        method: "GET",
        url: "/scrape",
    }).done(function(data) {
        window.location = "/"
    })
});

//Set clicked nav option to active
$(".navbar-nav li").click(function() {
   $(".navbar-nav li").removeClass("active");
   $(this).addClass("active");
});

//Handle Save Article button
$(".saveIt").on("click", function() {
    var useID = $(this).attr("data-id");
    $.ajax({
        method: "POST",
        url: "/articles/save/" + useID
    }).done(function(results) {
        window.location = "/"
    })
});

//Handle Delete Article button
$(".toDelete").on("click", function() {
    var useID = $(this).attr("data-id");
    $.ajax({
        method: "POST",
        url: "/articles/delete/" + useID
    }).done(function(data) {
        window.location = "/saved"
    })
});

//Handle Save Note button
$(".saveNote").on("click", function() {
    var useID = $(this).attr("data-id");
    if (!$("#noteText" + useID).val()) {
        alert("please enter a note to save")
    }else {
      $.ajax({
            method: "POST",
            url: "/notes/save/" + useID,
            data: {
              text: $("#noteText" + useID).val()
            }
          }).done(function(data) {
              $("#noteText" + useID).val("");
              $(".termNote").modal("hide");
              window.location = "/saved"
          });
    }
});

//Handle Delete Note button
$(".toDelNote").on("click", function() {
    var noteId = $(this).attr("data-note-id");
    var articleId = $(this).attr("data-article-id");
    $.ajax({
        method: "DELETE",
        url: "/notes/delete/" + noteId + "/" + articleId
    }).done(function(data) {
        $(".termNote").modal("hide");
        window.location = "/saved"
    })
});
