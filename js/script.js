/**
 * 
 * 
 * @property {element} courses - grabs all the course list options
 * @property {element} tableData - grabs all the td's on the page
 * @property {element} resetButton - grabs the button[type = reset]
 * @property {element} form - grabs the form element
 * @property {function} init - where the code begings
 * @property {function} resetTable - unhides the hidden rows and resets the background
 * @property {function} showHideRows - this function conrolls the showing and hiding of the rows based on the selected option and the text content of the first cell. The loop iterates by 7 so it will skip the other data cells in the same row
 * 
 * 
 * 
 * */ 

const toggleRows = {
    courses : document.getElementById('courses_list'),

    tableData : document.querySelectorAll('td'),

    resetButton : document.querySelector('button'),

    form : document.querySelector("#courses_form"),

    init : function() {

        this.courses.addEventListener('change', this.showHideRows);

        this.resetButton.addEventListener('click', this.resetTable);

    },

    resetTable : function() {
        let tableData = toggleRows.tableData;

        for (dataCell of tableData) {
           dataCell.parentElement.classList.remove('hide');
           dataCell.parentElement.classList.remove('background-toggle');
        }

    },


    showHideRows : function() {
        let courses = toggleRows.courses;
        let tableData = toggleRows.tableData;
        let courseName = "";

        switch (courses.selectedIndex) {
            case 0:
                return toggleRows.resetTable();
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
                courseName = courses.value;
                break;
        }

        for (let i = 0; i < tableData.length; i += 7) {
            if (courseName === tableData[i].firstChild.textContent) {
                tableData[i].parentElement.classList.remove('hide');
                tableData[i].parentElement.classList.add('background-toggle');
            } else {
                tableData[i].parentElement.classList.add('hide');
            }
        }

    }


}

toggleRows.init();