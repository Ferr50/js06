document.getElementById('order').onclick = function() {
    var breads = document.getElementsByName('brd');
    var hamburguers = document.getElementsByName('hbrg');
    var salads = document.getElementsByName('sld');
    var cheeses = document.getElementsByName('qjo');
    var cont = 0;
    var total = 0;
    var brd;
    var hbr;
    var sld;
    var chs;


    for (var bread of breads) {
        if (bread.checked) {
            cont = cont + 1;

            if(bread.value == "Pao Frances") total = total + 3
            else if (bread.value == "Pao Australiano") total = total + 8
            else total = total + 6;
            brd = bread.value;
        }
    }

    for (var hamburguer of hamburguers) {
        if (hamburguer.checked) {
            cont = cont + 1;
            if(hamburguer.value == "Hamburguer de Picanha") total = total + 13
            else if (hamburguer.value == "Hamburguer de Costela") total = total + 10
            else total = total + 12;
            hbr = hamburguer.value;
        }
    }

    for (var salad of salads) {
        if (salad.checked) {
            cont = cont + 1;

            if(salad.value == "Alface") total = total + 1.5
            else if (salad.value == "Tomate") total = total + 1.5
            else total = total + 0;
            sld = salad.value;
        }
    }

    for (var cheese of cheeses) {
        if (cheese.checked) {
            cont = cont + 1;

            if(cheese.value == "Mussarela") total = total + 3
            else if (cheese.value == "Prato") total = total + 3
            else total = total + 5;
            chs = cheese.value;
        }
    }

    if (cont == 4) {
        document.getElementById('orderChef').style.display = 'inline';
        document.getElementById('detalhes').innerHTML = "Detalhes do pedido";
        document.getElementById('total').innerHTML = "O valor a ser pago é: R$ " + total;
        document.getElementById('01').innerHTML = brd;
        document.getElementById('02').innerHTML = hbr;
        document.getElementById('03').innerHTML = sld;
        document.getElementById('04').innerHTML = chs;
        



    } else {
        alert("Por favor, preencha todos os campos");
    }




}