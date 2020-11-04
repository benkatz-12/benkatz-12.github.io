 function addTweet(id){
   var i = 2;
   var tweet = $("<div class='card' style='width: 240px; height: 240px; top:15px;'><div class='card-img' src='https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-superJumbo-v4.jpg' style='width: 20px' alt='bird'></div><div class='card-body'><button type='button' class='btn btn-danger' id='deleteButton' style='border-radius: 20px'>-</button></div></div>");
   tweet.appendTo('#' + id);
   i++;
   document.getElementById('deleteButton').addEventListener('click', function(){document.getElementById(id).childNodes[i].remove(); console.log(document.getElementById(id).childNodes);})
   console.log(document.getElementById(id).childNodes);
}