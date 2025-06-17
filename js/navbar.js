
enableSelectBoxes();


function enableSelectBoxes() {
    $('div.selectBox').each(function () {
        $(this).children('span.selected').html($(this).children('ul.selectOptions').children('li.selectOption:first').html());
        $('input.price_values').attr('value', $(this).children('ul.selectOptions').children('li.selectOption:first').attr('data-value'));

        $(this).children('span.selectArrow').click(function () {
            // console.log('span.selected,span.selectArrow');
            if ($(this).parent().children('ul.selectOptions').css('display') == 'none') {
                // console.log('selectOptions es none y ahora block');
                $(this).parent().children('ul.selectOptions').css('display', 'block');
            }
            else {
                $(this).parent().children('ul.selectOptions').css('display', 'none');
            }
        });

        $(this).find('li.selectOption').click(function () {
            console.log('disnos');
            $(this).parent().css('display', 'none');
            $('input.price_values').attr('value', $(this).attr('data-value'));
            $(this).parent().siblings('span.selected').html($(this).html());
        });

    });
}

var cajadir = document.getElementById("cajadir");
var flechacajadir = document.getElementById("flechacajadir");
var listadir = document.getElementById("listadir");


$("#cajadir").mouseover(function () {
    cajadir.classList.add('hv');
    flechacajadir.classList.add('hv');
});

$("#cajadir").mouseout(function () {

    cajadir.classList.remove('hv');
    flechacajadir.classList.remove('hv');
});

$("#flechacajadir").mouseover(function () {
    console.log('ggd');
    cajadir.classList.add('hv');
    flechacajadir.classList.add('hv');
});

$("#flechacajadir").mouseout(function () {

    cajadir.classList.remove('hv');
    flechacajadir.classList.remove('hv');
});

$("#listadir").mouseover(function () {
    cajadir.classList.add('hv');
    flechacajadir.classList.add('hv');
});



$("#cajadir").click(function (e) {

    // crear un nodo con un elemento vacío
    // sin ID, atributos, ni contenido
    var sp1 = document.createElement("input");

    // darle un atributo id llamado 'newSpan'
    sp1.setAttribute("id", "impDirBar");
    sp1.setAttribute("type", "text");

    // crear algún contenido para el nuevo elemento
    var sp1_content = document.createTextNode("Nuevo elemento span para reemplazo.");

    // aplicar dicho contenido al nuevo elemento
    sp1.appendChild(sp1_content);

    // construir una referencia al nodo existente que va a ser reemplazado
    var sp2 = document.getElementById("cajadir");
    var parentDiv = sp2.parentNode;

    // reemplazar el nodo sp2 existente con el nuevo elemento span sp1
    parentDiv.replaceChild(sp1, sp2);


    var div = document.getElementById('favbtm');
    document.addEventListener("click", function (e) {
        console.log('clic');

        //obtiendo informacion del DOM para  
        var clic = e.target;
        console.log(clic);

        if (clic != sp2) {
            // document.getElementById('impDirBar').style.display = "none";
            // <span class='selected' id="cajadir"></span>

            // crear un nodo con un elemento vacío
            // sin ID, atributos, ni contenido
            let sp = document.createElement("span");

            // darle un atributo id llamado 'newSpan'
            sp.setAttribute("id", "cajadir");
            sp.setAttribute("class", 'selected');

            // crear algún contenido para el nuevo elemento
            var sp_content = document.createTextNode("Nuevo elemento span para reemplazo.");

            // aplicar dicho contenido al nuevo elemento
            sp.appendChild(sp_content);

            // construir una referencia al nodo existente que va a ser reemplazado
            var inpDirBar = document.getElementById("impDirBar");
            var parentDiv = inpDirBar.parentNode;

            // reemplazar el nodo inpDirBar existente con el nuevo elemento span sp
            parentDiv.replaceChild(sp, inpDirBar);



            $("#cajadir").mouseover(function () {
                cajadir.classList.add('hv');
                flechacajadir.classList.add('hv');
            });

            $("#cajadir").mouseout(function () {

                cajadir.classList.remove('hv');
                flechacajadir.classList.remove('hv');
            });

            $("#flechacajadir").mouseover(function () {
                console.log('ggd');
                cajadir.classList.add('hv');
                flechacajadir.classList.add('hv');
            });

            $("#flechacajadir").mouseout(function () {

                cajadir.classList.remove('hv');
                flechacajadir.classList.remove('hv');
                // flechacajadir.style.display = 'none';
            });

            $("#listadir").mouseover(function () {
                cajadir.classList.add('hv');
                flechacajadir.classList.add('hv');
            });


        }
    }, false);



})

//almacenando el div y el boton en unas variables
var but = document.getElementById('boton');



/*******************************************************    
 * 
 */

document.querySelectorAll('.node-arrow').forEach(arrow => {
    arrow.addEventListener('click', (e) => {
        e.stopPropagation(); // evitar que se cierre de inmediato
        const node = e.target.closest('.breadcrumb-node');
        const dropdown = node.querySelector('.breadcrumb-dropdown');
        const allDropdowns = document.querySelectorAll('.breadcrumb-dropdown');

        // Cierra todos los demás
        allDropdowns.forEach(d => d !== dropdown && (d.style.display = 'none'));

        // Toggle del actual
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });
});

// Cierre global si se hace clic fuera
document.addEventListener('click', () => {
    document.querySelectorAll('.breadcrumb-dropdown').forEach(drop => drop.style.display = 'none');
});
