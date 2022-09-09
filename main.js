const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

//document.querySelector('html').style.backgroundColor = 'red';

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let StoryText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

const insertX = ['Willy the Goblin' , 'Big Daddy' , 'Father Christmas'];

const insertY = ['the soup kitchen', 'Disneyland', 'the White House']; 

const insertZ = ['spontaneously combusted, melted into a puddle on the sidewalk, turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    const name = customName.value;
    NewStory.replace('bob' , 'customname')

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14);
    const temperature =  Math.round(94);

  }
  story.textContent = 'NewStory';
  story.style.visibility = 'visible';
  
  let NewStory = StoryText;
  
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  StoryText.replaceall( ':insertx:' , 'xItem' );
  StoryText.replace( ':inserty:' , 'yItem' );
  StoryText.replace( ':insertz:' , 'zIt' );
  
}



