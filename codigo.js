document.write("hola a todos")
var usuario = parseInt(prompt("Ingresa tu peso en la tierra:"));
            var planeta = prompt("Ingresa \n 1 jupiter \n 2 Marte ");
            var g_tierra = 9.8;
            var g_jupiter = 24.8;
            var g_marte = 3.7;
            var nombre;
            if (planeta == "1") {
                peso_final = usuario * g_jupiter / g_tierra;
                nombre = "Jupiter";
            }
            else if(planeta == "2") {
                var peso_final = usuario * g_marte / g_tierra;
                nombre = "Marte";
            }
            peso_final = parseInt(peso_final);
            document.write("Tu peso en  " + nombre + " es " + peso_final + "Kg");