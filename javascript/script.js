menuMobile();
hoverMenu();
dynamic_writing();

/**************************************/
// menu mobile

function menuMobile(){
    let menu = document.querySelector('.menu-mobile>h3');
    let items = document.querySelector('.body-menu-mobile');

    window.addEventListener('resize', () => {
		if(window.innerWidth > 768){
	    	items.style.display = 'none';
		}
	});

    menu.addEventListener('click', (event) => {
        animacaoSlide(items, 300);
    });
}

/**************************************/
// hover menu mobile

function hoverMenu(){
    let item_menu = document.querySelectorAll('.menu-desktop>ul>li>a');

    for (let i = 0; i < item_menu.length; i++){
        item_menu[i].addEventListener('mouseover', (event) => {
           let line = event.target.parentElement.querySelector('line');

           for (let n = 0; n < document.querySelectorAll('.menu-desktop>ul>li').length; n++){
                document.querySelectorAll('.menu-desktop>ul>li')[n].removeAttribute('class');
           }

           event.target.parentElement.setAttribute('class','selected');
           line.style.width = '22px';
           
           setTimeout(() => {
               line.style.transition = '1.6s';
               line.style.width = '84%';
           }, 100);
           
        });

        item_menu[i].addEventListener('mouseout', (event) => {
            if(event.target.parentElement.classList.contains('selected')){
                let line = event.target.parentElement.querySelector('line');
            
                line.style.transition = '1.6s';
                line.style.width = '22px';
            }
        });
    }
}

/**************************************/
// escritor dinâmico

function dynamic_writing(){
    const dynamic_text = document.querySelector(".texto-dinamico");
    const cursor = document.querySelector(".cursor");

    const textArray = ["HTML5", "CSS3", "JavaScript", "JQuery", "React", "PHP", "MySQL"];
    const typingTime = 100;
    const removingTime = 100;
    const newTextTime = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type(){
        if(charIndex < textArray[textArrayIndex].length){
            if(!cursor.classList.contains("digitando")){
                cursor.classList.add("digitando");
            }

            dynamic_text.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingTime);
        }else{
            cursor.classList.remove("digitando");
            setTimeout(removeText, newTextTime);
        }
    }

    function removeText(){
        if(charIndex > 0){
            if(!cursor.classList.contains("digitando")){
                cursor.classList.add("digitando");
            }

            dynamic_text.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
            charIndex--;
            setTimeout(removeText, removingTime);
        }else{
            cursor.classList.remove("digitando");
            textArrayIndex++;

            if(textArrayIndex >= textArray.length){
                textArrayIndex = 0;
            }

            setTimeout(type, typingTime + 1100);
        }
    }

    document.addEventListener("DOMContentLoaded", () => {
        if(textArray.length){
            setTimeout(type, newTextTime + 250);
        }
    });
}