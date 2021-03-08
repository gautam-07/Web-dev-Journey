const tweetForm = document.querySelector('#tweet');
const myTweetsContainer = document.querySelector('#mytweets');

tweetForm.addEventListener('submit', function (e) {
   e.preventDefault();
   const username = tweetForm.elements.username.value;
   const tweet = tweetForm.elements.tweet.value;

   const newTweet = document.createElement('li');
   const bTag = document.createElement('b');

   bTag.append(username)
   newTweet.append(bTag);
   newTweet.append(`- ${tweet}`);

   myTweetsContainer.append(newTweet);

})
