const navToggle=document.querySelector('.nav-toggle');
const navLinks=document.querySelectorAll('.nav__link');
let LastModify=document.querySelector('.last-modified');
let Modify;

navToggle.addEventListener('click',() => {
	document.body.classList.toggle('nav-open');
});


navLinks.forEach(link =>{
	link.addEventListener('click',()=>{
		document.body.classList.remove('nav-open');
	})

});

Modify=document.lastModified;
LastModify.innerHTML=`<span>Last Modified: ${Modify}</span>`

