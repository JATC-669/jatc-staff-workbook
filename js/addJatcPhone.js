/**
 * @function init - where the code starts & checks for the window size based on the matching media query and listens for when the window is being resized.
 * @function addJatcPhoneOnSmallScreen - prepends the JATC phone number if the screen is smaller than 900px to all data cells with the class of "jatc-phone". The screen size matches the media query in the table-styles.css file.
 * @function removeJatcPhoneOnSmallScreen - removes the added <td> with the JATC phone number on screens larger than 900px.
 * 
 * */ 

 const addPhoneNumberOnSmallScreen = {

    init : function() {
        window.addEventListener('resize', function() {
            let jatcPhoneAdded = document.querySelector('td.jatc-phone-added');
            
            if(!jatcPhoneAdded && window.matchMedia('(max-width: 900px)').matches) {
                addPhoneNumberOnSmallScreen.addJatcPhoneOnSmallScreen();
            } else if (jatcPhoneAdded && window.matchMedia('(min-width: 900px)').matches) {
                addPhoneNumberOnSmallScreen.removeJatcPhoneOnSmallScreen();
            }
        });
    },

    addJatcPhoneOnSmallScreen: function() {
        let jatcPhone = document.querySelectorAll('.jatc-phone');
        let jatcPhoneArray = Array.from(jatcPhone);
        console.log(`Add was called!`);
        
        jatcPhoneArray.forEach( (item) => {
            item.insertAdjacentHTML('afterend', '<td class="jatc-phone-added">800-638-0592</td>');
        });
    },
    
    removeJatcPhoneOnSmallScreen: function() {
        console.log(`Remove was called!`);
        let jatcPhone = document.querySelectorAll('.jatc-phone-added');
        jatcPhone.forEach( (item) => {
            item.remove();
        })
    },


}

addPhoneNumberOnSmallScreen.init();