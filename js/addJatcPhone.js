/**
 * 
 * 
 * 
 * 
 * 
 * */ 

 const addPhoneNumberOnSmallScreen = {

    init : function() {
        if (window.matchMedia('(max-width: 900px)').matches) {
            this.addJatcPhoneOnSmallScreen();
        }
    },

    addJatcPhoneOnSmallScreen: function() {
        let jatcPhone = document.querySelectorAll('.jatc-phone');
        let jatcPhoneArray = Array.from(jatcPhone);

       jatcPhoneArray.forEach( (item) => {
           item.insertAdjacentHTML('afterend', "<td>800-638-0592</td>");
       });
            
    }


}

addPhoneNumberOnSmallScreen.init();