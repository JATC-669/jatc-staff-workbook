/**
 * @function init - where the code starts & checks for the window size based on the matching media query
 * @function addJatcPhoneOnSmallScreen - prepends the JATC phone number if the screen is smaller than 900px to all data cells with the class of "jatc-phone". The screen size matches the media query in the table-styles.css file.
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