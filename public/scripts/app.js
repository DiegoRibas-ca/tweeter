/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// function createTweetElement(data) {


// }
$(document).ready(function(){
let createTweetElement = function(data){
//     var tweet = $("<article>")
//         .addClass("tweet")
//         .append(data.user.avatars.regular)
//         .append(data.user.name)
//         .append(data.user.handle)
//         .append(data.content.text)
//         .append(data.created_at);

//     return tweet;

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

var $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet);
});



