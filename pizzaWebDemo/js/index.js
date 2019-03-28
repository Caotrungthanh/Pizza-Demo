//Couunt the number
$('.count').each(function() 
{
    $(this).prop('Counter',0).animate(
    {
        Counter: $(this).text()
    }, 
    {
        duration: 4000,
        easing: 'swing',
        step: function(now) 
        {
            $(this).text(Math.ceil(now));
        }
    });
});

//card gioi-thieu
$('.gioithieu-card').on('click', function () 
{
    $('.card').toggleClass('flipped');
});


function openPageLeft(pageName, elmnt, color) 
{
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontentLeft, tablinks;
    tabcontentLeft = document.getElementsByClassName("tabcontent-left");
    for (i = 0; i < tabcontentLeft.length; i++) {
      tabcontentLeft[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinkLeft = document.getElementsByClassName("tablink_Left");
    for (i = 0; i < tablinkLeft.length; i++) {
      tablinkLeft[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }

  function openPageRight(pageName, elmnt, color) 
  {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontentRight, tablinks;
    tabcontentRight = document.getElementsByClassName("tabcontent-right");
    for (i = 0; i < tabcontentRight.length; i++) {
      tabcontentRight[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinkRight = document.getElementsByClassName("tablink_Right");
    for (i = 0; i < tablinkRight.length; i++) {
      tablinkRight[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpenLeft").click();
  document.getElementById("defaultOpenRight").click();
  