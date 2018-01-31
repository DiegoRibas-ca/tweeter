// JS to load all tweets on the page from the database
$(document).ready(function(){
  let createTweetElement = function(data){
    var element = $(`
    <article>
        <header>
          <img src=${data.user.avatars.regular}>
          <span>${data.user.name}</span>
          <p>${data.user.handle}</p>
        </header>
        <p class="text-tweet">${data.content.text}</p>
        <footer>
          <span>${data.created_at}</span>
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


  // const data = [
  //   {
  //     "user": {
  //       "name": "Newton",
  //       "avatars": {
  //         "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
  //         "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
  //         "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
  //       },
  //       "handle": "@SirIsaac"
  //     },
  //     "content": {
  //       "text": "If I have seen further it is by standing on the shoulders of giants"
  //     },
  //     "created_at": 1461116232227
  //   },
  //   {
  //     "user": {
  //       "name": "Descartes",
  //       "avatars": {
  //         "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
  //         "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
  //         "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
  //       },
  //       "handle": "@rd" },
  //     "content": {
  //       "text": "Je pense , donc je suis"
  //     },
  //     "created_at": 1461113959088
  //   },
  //   {
  //     "user": {
  //       "name": "Johann von Goethe",
  //       "avatars": {
  //         "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
  //         "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
  //         "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
  //       },
  //       "handle": "@johann49"
  //     },
  //     "content": {
  //       "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
  //     },
  //     "created_at": 1461113796368
  //   }
  // ];



  function renderTweets(tweets) {
  // loops through tweets
    console.log('called')
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
    $.ajax({
      type: "POST",
      url: '/tweets',
      data: newTweet,
      success: alert( "success" ),
    });
    location.reload();
  }); 
  

  function loadTweets(){
    $(window).load(function () {
      $.ajax({
        url: '/tweets',
        method: 'GET',
        success: renderTweets
      });
    });
    // $('form').on('submit', function () {
    //   console.log('Button clicked, performing ajax call...');
    //   $.ajax({
    //     url: '/tweets',
    //     method: 'GET',
    //     success: renderTweets
    //   });
    // });
  }
  loadTweets();
});







