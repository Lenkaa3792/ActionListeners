//select DOMelements
const button = document.getElementById( 'toggle' );
console.log(button);
const section = document.getElementById('section' );
button.addEventListener("click", toggleSection, false);

//callb back function
function toggleSection (){
if ( section.classList.contains('visible' ) )
    {
    section.classList.add( 'hidden' );
    section.classList.remove('visible')
    section.style.display = 'none'
    } else
    {
    section.classList.add( 'visible' );
    section.classList.remove('hidden')
    section.style.display ='block'
    }
}
