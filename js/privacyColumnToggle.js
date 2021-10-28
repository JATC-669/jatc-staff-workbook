const privacyColumnToggle = {

    table : document.querySelector('.privacy-guide-table'),

    column: document.querySelectorAll('col'),

    tableHeader : document.querySelectorAll('th'),

    tableData : document.querySelectorAll('td'),

    resetButton : document.querySelector('button'),

    init : function() {
        this.privacyColumnToggle();
    },

    privacyColumnToggle : function() {

        // let data = privacyColumnToggle.tableHeader;
        let data = privacyColumnToggle.table;
        let col = privacyColumnToggle.column;

        console.log(col)

        // for( item of data) {
        //     console.log(item.textContent)
        // }

        // data.addEventListener('click', (event) => {
        //     console.log(`${event.currentTarget.textContent} was clicked`);
        // })

        // console.log(`${event.target.textContent} was clicked`)
        

    },
}

privacyColumnToggle.init();