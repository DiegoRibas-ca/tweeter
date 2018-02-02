// Function to secure text from the tweets
function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

// JS to build the tweet on the html format
let createTweetElement = function(data){
  var element = $(`
  <article>
      <header>
        <img src=${escape(data.user.avatars.regular)}>
        <span>${escape(data.user.name)}</span>
        <p>${escape(data.user.handle)}</p>
      </header>
      <p class="text-tweet">${escape(data.content.text)}</p>
      <footer>
        <span>${escape(data.created_at)}</span>
        <i class="fa fa-flag" class="fa-icon" aria-hidden="true"></i>
        <i class="fa fa-retweet" class="fa-icon" aria-hidden="true"></i>
        <i class="fa fa-heart" class="fa-icon" aria-hidden="true"></i>
      </footer>
    </article>
  `)
  return element
  // ANOTHER APROACH BELOW - JUST FOR FUTURE STUDIES
  // const $article = $('<article>').addClass('post').data('article-id', article.id)
  // $article.append($('<h3>').text(article.title))
  // $article.append($('<p>').text(article.body))
  // return $article;
}

function loadTweets(){
  $.ajax({
    url: '/tweets',
    method: 'GET',
    success: renderTweets
  });
}
function renderTweets(tweets) {
  $('#tweets-container').html('');
  tweets.forEach((tweet) => {
    // calls createTweetElement for each tweet
    var $tweet = createTweetElement(tweet);
    // takes return value and appends it to the tweets container
    $('#tweets-container').append($tweet);
  });
}

$(document).ready(function(){
  
  // hide the compose struture
  $(".container .new-tweet").hide();
  
  //tweet submit post
  $('form').on('submit', function(event) {
    event.preventDefault();
    let newTweet = $( this ).serialize();
    //newTeet has 5 characteres becaus it begins with text because of serialize
    if (newTweet.length <= 5 || newTweet === null) {
      alert("Empty Field or Invalid Text"); 
    } else if (newTweet.length > 145) {
      alert("Tweet with more than 140 characteres");
    } else {
      $.ajax({
        type: "POST",
        url: '/tweets',
        data: newTweet,
        success: loadTweets
      });
    }
    $(".container .new-tweet").toggle('show');
    $('.new-tweet textarea').val('');
    
  });   
  
  loadTweets();
  //toggle the textarea
  $("#nav-bar .nav-button").click(function () {
    $(".new-tweet").toggle("show"), function () {
    }
    $(".new-tweet textarea").focus();
  });
});







