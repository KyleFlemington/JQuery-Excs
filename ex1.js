/* come up with at least three unique solutions for changing the color of the text to red in the second <p> inside the <article> using jQuery only (no CSS!). */

/*
<article>
   <p class="opening-line">The first line.</p>
   <p>The second line.</p>
</article>
<p>A line outside the article.</p>
*/


$(document).ready(function(){
  $('article').children(":nth-child(2)").css('color','red')
});

$(document).ready(function(){
  $(":nth-child(2)", $('article')).css("color","red");
});
