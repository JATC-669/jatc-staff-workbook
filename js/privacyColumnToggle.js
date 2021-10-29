const privacyColumnToggle = {

    tableHeaderRow : document.querySelector('thead > tr'),

    resetButton : document.querySelector('button'),

    init : function() {
        this.privacyColumnToggle();
    },

    privacyColumnToggle : function() {

        let tableData = document.querySelectorAll('tbody > td');
        console.log(tableData)

        // for(let i = 0; i < header.length; i ++) {
        //     // console.log(header[i].textContent)

        //     header[i].addEventListener('click', function(event) {
        //         console.log(`${event.target.textContent} was clicked!`);
        //     });
        // }

        privacyColumnToggle.tableHeaderRow.addEventListener('click', function(event) {
            if(event.target.textContent === "" || event.target.textContent === "Notes, Special Instructions") {
                event.preventDefault();
            } else {
                console.log(`${event.target.textContent} was clicked!`);
            }

        })
        
    },
}

privacyColumnToggle.init();