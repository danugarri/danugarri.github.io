const projectNames= [
    'StoryBook', 'The encrypter app', 'Dni app'
];
projectNames.map(project => console.log(project))
const tooltip= document.getElementsByClassName('tooltip');
const project= document.getElementsByClassName('project');
const storyBook= document.getElementById('storybook');
const text= document.getElementById('story');

const displayToolTip= () => {
    for(let x=0;x<projectNames.length;x++) {
        tooltip[x].innerHTML= projectNames[x]
        
    }
}
const hideToolTip= () => {
     for(let x=0;x<projectNames.length;x++) {
        tooltip[x].innerHTML= '';
    }
}
for(let i=0; i<project.length;i++) {
   
        project[i].addEventListener('mouseover', displayToolTip);
        project[i].addEventListener('mouseout',hideToolTip)
    
}
