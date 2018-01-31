// JS to load all tweets on the page from the database
$(document).ready(function(){
  let createTweetElement = function(data){
    var element = $(`
    <article>
        <header>
          <img src=${data.user.avatars.regular}/>
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


  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "http://www.seetorontonow.com/wp-content/uploads/2017/11/toronto-skyline-winter.jpg",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  }



  function renderTweets(tweets) {
  // loops through tweets
    tweets.forEach((tweet) => {
      // calls createTweetElement for each tweet
      var $tweet = createTweetElement(tweet);
       // takes return value and appends it to the tweets container
      $('#tweets-container').append($tweet);
    });
  }

  renderTweets(data);
});





