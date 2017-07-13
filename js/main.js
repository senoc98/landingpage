$(document).ready(function(){
		setBindings();
	});
	
function setBindings() {
	$("div.section.intro h1.pil a").click(function(e){
		e.preventDefault();
		var sectionID = e.currentTarget.id + "Sektion";
		
		$("html,body").animate({
			scrollTop: $("#" + sectionID).offset().top
			
		}, 1200, 'easeInOutExpo')
	})
  
  $(".btn2").click(function(e){
		e.preventDefault();
		var sectionID = e.currentTarget.id + "Sektion";
		
		$("html,body").animate({
			scrollTop: $("#" + sectionID).offset().top -250
			
		}, 1200, 'easeInOutExpo')
	})

}

  $('.intro').parallax({imageSrc:img\background-shapes.png'});
  
  window.sr = ScrollReveal();
  sr.reveal('div.container.main');
  sr.reveal('div.section.intro h1.pil');
  sr.reveal('.logo', { origin: 'left'});
  sr.reveal('.loggainarea', { origin: 'right'});
  sr.reveal('.container.about');
  sr.reveal('.teamrubrik');
  sr.reveal('.oskar', { origin: 'left', delay: 200});
  sr.reveal('.jan', { origin: 'right', delay: 400});
  sr.reveal('.samuel', { origin: 'left', delay: 300});
  sr.reveal('.william', { origin: 'right', delay: 500});
  sr.reveal('.container.contact');

