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

const secondPost = new InstagramPost("betterhelp", "Many of us spend almost all of our waking hours on work,"
, "https://www.instagram.com/p/CpDjezSq9EX/?utm_source=ig_web_copy_link", 612);

console.log('handler is ' + firstPost.handle + 'whose content is' + firstPost.content
+ 'one can get to the post throught this link' + firstPost.imagelink + 'has' + firstPost.likes + 'likes');

console.log('handler is ' + secondPost.handle + 'whose content is' + secondPost.content
+ 'one can get to the post throught this link' + secondPost.imagelink + 'has' + secondPost.likes + 'likes');

//quetsion 3

//a. Using the factory method, implement a createPerson() factory function that takes name, age and location as arguments. Afterwards, create an object representing Musa from the factory function. 

function createPerson(name, age, location){
    return{
        name: name,
        age: age,
        location: location,
        showInfo() {
            return this.name + 'is' + this.age + 'years old and lives in' +
            this.location;
        }
    }
}

let Musa = createPerson('Musa Dawodu', 19, 'Lekki, Lagos state');
console.log(Musa.showInfo());

//Also, implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments. Then create an object representing Muse’s JAMB scores. Add the object as a property to Musa object you created above in (a) above

function createJambScores(eng, govt, lit, crk){
    return{
        eng: eng,
        lit: lit,
        govt: govt, 
        crk: crk,
        showInfo() {
            return 'Musa had' + this.eng + 'in ENG,' + this.govt + 'in GOVT,' +
            this.lit + 'in Lit and' + this.crk + 'in CRK';
        }
    }
}

let Musa_Jamb_scores= createJambScores(70, 85, 82, 94);
console.log(Musa_Jamb_scores.showInfo());

//4. What are the different ways you can clone an object? Give examples for each of them.
