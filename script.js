

    var tablinks = document.getElementsByClassName("tab-links")
    var tabcontents = document.getElementsByClassName("tab-contents")

    function opentab(tabname){

        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }


// <!-- Script for animated Text -->


    const text = document.querySelector(".sec-text");

    const textLoad = () => {
        setTimeout(() => {
            text.textContent = "Java Developer";
        }, 0);
        setTimeout(() => {
            text.textContent = "Freelancer";
        }, 4000);
        setTimeout(() => {
            text.textContent = "Web Developer";
        }, 8000);
        setTimeout(() => {
            text.textContent = "Programmer";
        }, 12000);
    }

    textLoad();
    setInterval(textLoad, 20000);


//    <!-- click events for the Smaller Screen  -->


    var sidemenuuu = document.getElementById("sidemenu");     
    function openmenu(){
        sidemenuuu.style.left = "0";
    }
    function closemenu(){
        sidemenuuu.style.left = "-200px";
    }




// <!-- Script for the submitted form -->


    const scriptURL = 'https://script.google.com/macros/s/AKfycbzIX6fB-ONfMNgsznQ0WE2QNViQCqgg3gC552ELWjh4sa-XEv9ttOxOj0x02TLbotoq/exec'
    const form = document.forms['submit-to-google-sheet']

    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then( response =>{
            
             msg.innerHTML = "Message sent Successfully :) "
             setTimeout(function(){
                msg.innerHTML = ""
             },5000)
             form.reset()

    })
        .catch(error => console.error('Error!', error.message))
    })




