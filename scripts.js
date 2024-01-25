
// 1. Adding a new item to the list of items:
function newItem() {
    let inputValue = $('#input').val();


    if (inputValue === '') {
        alert("You must write something!");
    } else {

        let crossOutButton = $('<button>X</button>');
        crossOutButton.on("click", deleteListItem);

        let li = $('<li></li>').text(inputValue);
        li.append(crossOutButton);
        $('#list').append(li);
    }

    // 2. Crossing out an item from the list of items:
    function deleteListItem() {
        $(this).toggleClass("strike");

    }

    $(document).on("dblclick", "li", crossOut);

    // 3(i). Adding the delete button "X": 
    let crossOutButton = $('<button>X</button>');
    crossOutButton.on("click", deleteListItem);
    crossOutButton.on("click", crossOutButton);

    $('#list').append(crossOutButton);

    // 3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
    function deleteListItem() {
        $(this).parent().addClass("delete");
    }

    // 4. Reordering the items: 
    $('#list').sortable();

}
    }
