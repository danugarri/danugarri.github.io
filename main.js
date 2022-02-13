const projectNames= [
     'Inventario Daniel','StoryBook', 'The encrypter app', 'Dni app', 'BMI calculator', 'Anagramas','The wagon game',
    'Ronda pensamientos','Shopping list', 'Pokémon','Que no te pille el bot'
];
projectNames.map(project => console.log(project))
const tooltip= document.getElementsByClassName('tooltip');
const project= document.getElementsByClassName('project');
const storyBook= document.getElementById('storybook');


const displayToolTip= (e) => {
    for(let x=0;x<projectNames.length;x++) {
        if(e.target.name=== projectNames[x]) {

            tooltip[x].innerHTML= e.target.name
            tooltip[x].style.display= 'inline';
        }
        
    }
}
const hideToolTip= () => {
     for(let x=0;x<projectNames.length;x++) {
        tooltip[x].innerHTML= '';
         tooltip[x].style.display= 'none';
    }
}
for(let i=0; i<project.length;i++) {
   
        project[i].addEventListener('mouseover', displayToolTip);
        project[i].addEventListener('mouseout',hideToolTip)
    
}
