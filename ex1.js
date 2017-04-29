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

$(document).ready(function(){
  $('article').children(":nth-child(1+1)").css('color','red')
});





/* In this exercise, you’re going create two click events—one that adds another list item to the list below, and one that crosses off an item in the list when its “done” link is clicked: 

You’ll need to think about traversing the DOM, and which of jQuery’s methods you’ll need to update the <ul> element’s content.

You can complete this activity in a basic HTML file in a text editor of your choice (don’t forget to include the jQuery library in the footer of your file), or in Codepen (be sure to go into the Settings for your pen and check off the box to add the jQuery library) */


/* <div class="list-editor">
   <ul class="my-list">
      <li>
         <span>My to-do</span> <a href="#" class="delete">[done]</a>
      </li>
   </ul>
   <input type="text" name="new-item" />
   <button>Add an item</button>
</div>
*/

$(document).ready(function(){
	$('button').click(
    function() {
		  console.log('Add')
      $('.my-list').append('<li><span>' + $(".new-item").val() + '</span> <a href="#" class="delete">[done]</a></li>');
    });
  $('.delete').click(function() {
    $(this).parent().remove();
    });
});