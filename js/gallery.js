var config = {
	apiKey: "AIzaSyDurIg4ju49jQx_e5iKBLLbjTn3Q2SYPAk",
	authDomain: "bharatham-125d6.firebaseapp.com",
	databaseURL: "https://bharatham-125d6.firebaseio.com",
	storageBucket: "bharatham-125d6.appspot.com",
	};
firebase.initializeApp(config);
var storage=firebase.storage();

var nphotos=0;
var url1="";
var flag=0;

// to stop stucking
/*$(window).bind("mousewheel", function() {
    $("html, body").stop();
});*/
function show_pop(url)
{

$('#selected-image').attr('src',url);
$('#my_popup').popup('show');

}
function load_pics(str,title)
{
nphotos=0;

if(str=='')
{
$('#gallery-title').removeClass('hide').html('<h2>'+title+'</h2>');
$('#gall').html('');
$('#message').removeClass('hide');
 $('html, body').animate({
          scrollTop: 700
        }, 1000);
return;
}
else{
$('#message').addClass('hide');


}
$('#gall').removeClass('hide');
 $('html, body').animate({
          scrollTop: 700
        }, 1000);
for(i=0;i<20;i++)
{
var root=str;
var img=storage.ref(root+i+'.jpeg');

// Get the download URL
img.getDownloadURL().then(function(url) {
  // Insert url into an <img> tag to "download"
  console.log(url);
if(!nphotos){$('#gall').html('');
$('#gallery-title').removeClass('hide');
$('#gallery-title').html('<h2>'+title+'</h2>');
$('#gallery-header').removeClass('hide');
$('#gallery-header').addClass('gallery-header-anim');

}

    if(nphotos%2==0)
  {

 var imgrow= "<div id=\"galleryid"+nphotos/2+"\"class=\"img-row\"></div>";
   $('#gall').append(imgrow);
  
   }
   
var img="<div class=\"img-one\"  onclick=\"show_pop('"+url+"');\"><img src=\""+url+"\" class=\"img-fix\"/></div>";
var num=Math.floor(nphotos/2)
 $('#galleryid'+num.toString()).append(img);
nphotos++;
//$('#gall').append('<img src="'+url+'"/>');
  
  
}).catch(function(error) {

console.log(error.code);

return;
  switch (error.code) {
    case 'storage/object_not_found':
      // File doesn't exist
      break;

    case 'storage/unauthorized':
      // User doesn't have permission to access the object
      break;

    case 'storage/canceled':
      // User canceled the upload
      break;


    case 'storage/unknown':
      // Unknown error occurred, inspect the server response
      break;
  }
});



 
}






}


