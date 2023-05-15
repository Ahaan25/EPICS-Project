(function(){
    function fnAddButtons(){
        var button=document.createElement("input");
        button.value="Search btn";
        button.id="search-btn";
        button.type="submit";
        document.querySelector(".FPdoLc.tfB0Bfcenter").appendChild(button);
    }
    function fnDefineEvents(){
        document.getElementById("search-btn").addEventListener("click", function(event){
            fnSearch(event.target.value.split(" ")[1]);
        });
    }
    function fnSearch(){
        document.querySelector(".gLFyf.gsfi").value=str;
    }
    fnAddButtons();
    fnDefineEvents();
})();