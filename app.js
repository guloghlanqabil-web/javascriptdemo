
"use strict";
$(document).ready(function () {
    $('.btn').click(function (e) {
        e.preventDefault();
        if (!$.trim($('input').val()) == '') {
            let a = b => {
                for (let i = 1; i <= b; i++) { $('.minibox').append(`<h2>${b}</h2>`); }
            }
            let v = f => Number(f) ? a(Number(f)) : $('.minibox').append(`<h2>${f}</h2>`);
            v($('input').val());
        }
        $('input').val('');
    })
});





// "use strict"; 
// $(document).ready(function () { 
//     $('.btn').click(function (e) {  
//         e.preventDefault(); 
//         if (•••)  { 
//             let a = b => { 
//                 for (•••) { $('.minibox').append(`<h2>${b}</h2>`); } 
//             } 
//             let v = f => ••• ? ••• : $('.minibox').append(`<h2>${f}</h2>`);  
//             v($('input').val()); 
//         } 
//         ///// inputu təmizləmək ••• 
//     }) 
// });













