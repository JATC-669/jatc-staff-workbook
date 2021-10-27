/**
 * 
 * 
 * 
 * 
 * 
 * */ 

 const addPhoneNumberOnSmallScreen = {

    missingJatcPhoneNumber : document.querySelectorAll(".jatc-phone"),

    init : function() {


        this.addJatcPhoneOnSmallScreen();

    },

    

    addJatcPhoneOnSmallScreen: function() {
        let jatcPhone = addPhoneNumberOnSmallScreen.missingJatcPhoneNumber;
        let jatcPhoneArray = Array.from(addPhoneNumberOnSmallScreen.missingJatcPhoneNumber);
        console.log(jatcPhone);

        let newDataCell = document.createElement('td');
        newDataCell.textContent = "800-638-0592";

        jatcPhoneArray.forEach(item => {
            item.parentNode.insertBefore(newDataCell, item.nextSibling)

        }) 
            
    }


}

addPhoneNumberOnSmallScreen.init();