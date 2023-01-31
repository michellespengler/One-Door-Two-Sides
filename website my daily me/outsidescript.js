let outsideDoors = document.getElementsByClassName("outsideDoors");// alle elementen array

//
for (var i = 0; i < outsideDoors.length; i++) { // todos los video 3 cosas diferentes
    //cuando termina-> enseña los posters
    outsideDoors[i].addEventListener('ended', function(){
       this.load()
    }, false);
    //controls zeigen cuando hover
    outsideDoors[i].addEventListener("mouseenter", function(){
        this.setAttribute("controls", "controls")
    })
    outsideDoors[i].addEventListener("mouseleave", function(){
        this.removeAttribute("controls")
    })
}