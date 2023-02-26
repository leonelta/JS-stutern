//Qustion 1 and 2
//1. Using the constructor method, create an InstagramPost() constructor function 
//that takes the properties below as arguments.
//Handle of author
//content, 
//An image link posted by the author of the post
//Number of views, 
//Number of likes, 
//2.Create 2 Instagram post objects from the constructor function you created above

//constructor function
function  InstagramPost(handle, content, imagelink, likes){
    this.handle = handle;
    this.content = content;
    this.imagelink = imagelink;
    this.likes = likes;
}

//creating objects
const firstPost = new InstagramPost("urban.gospel", "Priez sans cesse 1 Thessaloniciens 5:17"
, "https://www.instagram.com/reel/CpCU7GANphC/?utm_source=ig_web_button_share_sheet", 2,814);

const SecondPost = new InstagramPost("betterhelp", "Many of us spend almost all of our waking hours on work,"
, "https://www.instagram.com/p/CpDjezSq9EX/?utm_source=ig_web_copy_link", 612);

