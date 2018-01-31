
// JS to load all tweets on the page from the database
$(document).ready(function(){

// Function to secure text from the tweets
function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}
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
    // ANOTHER APROACH BELOW
    // const $article = $('<article>').addClass('post').data('article-id', article.id)
    // $article.append($('<h3>').text(article.title))
    // $article.append($('<p>').text(article.body))
    // return $article;

  }




  function renderTweets(tweets) {
    $('#tweets-container').html('');
  // loops through tweets
    tweets.sort(function(a , b){
      if (a.created_at > b.created_at) {
        return - 1;
      } else {
        return 1;
      }
    });
    tweets.forEach((tweet) => {
      // calls createTweetElement for each tweet
      var $tweet = createTweetElement(tweet);
       // takes return value and appends it to the tweets container
      $('#tweets-container').append($tweet);
    });
  }

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
  }); 
  
  function loadTweets(){
    $.ajax({
      url: '/tweets',
      method: 'GET',
      success: renderTweets
    });
  }
  // A good way to refresh the page and see others users tweets!

  // $(window).load(function () {
  //   setInterval(loadTweets, 500);
  //  })
  loadTweets();
  // loadTweets();
});







