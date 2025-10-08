function pantallaDyM() {
      if (pantallasDyM == 1) { // Pantalla Dipper 1
  
    image(dipperImgs[0], 0, -150, width, height);
    mostrarPanel("Dipper oyó que la estatua de Bill sigue intacta en lo mas profundo del \nbosque, la curiosidad le ganó y quiere ir a investigar.");
    botonSimple("Siguiente");


  } else if (pantallasDyM == 2) { // Pantalla Dipper 2
    image(dipperImgs[1], 0, 0, width, height);
    mostrarPanel("Se suben al auto rumbo a la ciudad para investigar, impulsados por la \ncuriosidad de Dipper sobre la estatua de Bill.");
    botonSimple("Siguiente");
    
  } else if (pantallasDyM == 3) { // Pantalla Dipper 3
    image(dipperImgs[2], 0, -70, width, height);
    mostrarPanel("Pero justo cuando todo parecía bajo control, algo les tapó la vista\ny antes de darse cuenta, ¡bam! fueron a dar de lleno contra un árbol.");
    botonesDobles("Caminar", "Ir a la ciudad");
    
  } else if (pantallasDyM == 4) { // Pantalla Dipper 4
    image(dipperImgs[3], 0, -110, width, height);
    mostrarPanel("En la ciudad, Dipper percibe una voz extraña, pero no logra identificar \nde quién se trata. ¿Quién será?");
    botonSimple("Siguiente");

  } else if (pantallasDyM == 5) { // Pantalla Dipper 5
    image(dipperImgs[4], 0, -60, width, height);
    mostrarPanel("¡Es Pacifica! Se ofrece a llevarlos a su casa a pedir ayuda para el auto \nchocado. ¿Qué deberían hacer?");
    botonesDobles("Caminar", "Ir a su casa");

  } else if (pantallasDyM == 6) { // Pantalla Dipper 6
    image(dipperImgs[5], 0, 0, width, height);
    mostrarPanel("Al llegar a la mansión, un estruendo inesperado los sobresalta; algo \nextraño está ocurriendo.");
    botonSimple("Siguiente");

  } else if (pantallasDyM == 7) { // Pantalla Dipper 7
    image(dipperImgs[6], 0, 0, width, height);
    mostrarPanel("Encuentran al leñador fantasma, quien los mira fijamente y los reta \na un duelo.");
    botonSimple("Siguiente");
    
  } else if (pantallasDyM == 8) { // Pantalla Dipper 8
    image(dipperImgs[7], 0, 0, width, height);
    fill(255);
    textFont(letra11);
    textSize(90);
    text("¡PIERDEN!", 100, 106);
    

    mostrarPanel("De repente, el leñador corta un árbol, y en un instante el tronco viene \ndirecto hacia ustedes.");
    botonSimple("Reiniciar");
    return;
  } 
   
  else if (pantallasDyM == 9) { // Pantalla Pacífica 1
    image(dipperPacificaImgs[0], 0, 0, width, height);
    mostrarPanel("Caminaron al bosque y pronto encontraron una cueva oscura. Sin \npensarlo, entraron.")
    botonSimple("Siguiente");

  } else if (pantallasDyM == 10) { // Pantalla Pacífica 2
  image(dipperPacificaImgs[1], 0, -120, width, height);
    mostrarPanel("Se encontraron con el cambiaformas, y su mirada extraña empezó a \nhelarles la sangre.")
    botonSimple("Siguiente");

  } else if (pantallasDyM == 11) { // Pantalla Pacífica 3
    image(dipperPacificaImgs[2], 0, -90, width, height);
    mostrarPanel("Ford logró herir al cambiaformas, pero la zona era peligrosa; debían \nbuscar un lugar más abierto...")
    botonSimple("Ir al bosque");

  } else if (pantallasDyM == 12) { // Pantalla Pacífica 4
    image(dipperPacificaImgs[0], 0, -90, width, height);
    mostrarPanel("Siguieron caminando, pero el bosque estaba demasiado silencioso. \n“¿Qué podría pasar…?”")
    botonSimple("Siguiente");

  } else if (pantallasDyM == 13) { // Pantalla Pacífica 5
  image(dipperPacificaImgs[3], 0, 0, width, height);
    mostrarPanel("Se toparon con el multioso. Un escalofrío les recorrió la espalda \nmientras se preguntaban: ¿qué hacer ahora?")
    botonesDobles("Pelear", "Cantar");

  } else if (pantallasDyM == 14) { // Pantalla Pacífica 6
    image(dipperPacificaImgs[4], 0, -90, width, height);
    mostrarPanel("¡El oso parecía fascinado por las canciones para chicas! Se quedó \narareando y bailando, y finalmente los dejó continuar su camino.")
    botonSimple("Salir de la cueva");
  } else if (pantallasDyM == 15) { // Pantalla Pacífica 7
    image(dipperPacificaImgs[6], 0, -90, width, height);
    mostrarPanel("Por fin, un momento de paz y tranquilidad. Mientras caminaban entre \nel bosque, distinguieron una enorme figura de piedra… ¡era él!")
    botonSimple("Siguiente");

  } else if (pantallasDyM == 16) { // Pantalla Pacífica 8
  image(dipperPacificaImgs[7], 0, 0, width, height);
    fill(255);
    textFont(letra11);
    textSize(80);
    text("¡FELICIDADES!", 50, 106);
    fill(255, 165, 0); 
  textFont(letra1);
  textSize(20);
    text("¡Finalmente encontraron la estatua de Bill Cipher! Sin dudas, sería la \natracción principal de la cabaña del misterio.", 10, 350)
    botonSimple("Reiniciar");
  } else if (pantallasDyM == 17) { // Pantalla Pacífica 8
  image(dipperPacificaImgs[5], 0, 0, width, height);
    fill(255);
    textFont(letra11);
    textSize(80);
    text("¡PERDISTE!", 50, 106);
    fill(255); 
  textFont(letra1);
  textSize(20);
    text("El Multioso los triplicó en fuerza… y en cabezas. No había \nforma de detener a una bestia así. Ni con suerte.", 10, 350)
    botonSimple("Reiniciar");
  }
}

function mouseDyM() {

 // DIPPER HISTORIA 
if (pantallasDyM == 1) { 
    if(mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
 pantallasDyM = 2;
    }
} else if (pantallasDyM == 2) { 
    if(mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
 pantallasDyM = 3;
    }
} else if (pantallasDyM == 3) { 
    if(mouseX >= 350 && mouseX <= 550 && mouseY >= 410 && mouseY <= 450) {
 pantallasDyM = 4;
    }
} else if (pantallasDyM == 4) { 
    if(mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
 pantallasDyM = 5;
    }
} else if (pantallasDyM == 5) { 
    if(mouseX > 350 && mouseX < 550 && mouseY > 410 && mouseY < 450) {
 pantallasDyM = 6;
    } else if (mouseX > 79 && mouseX < 279 && mouseY > 410 && mouseY < 450) {
    pantallasDyM = 9;
  }
} else if (pantallasDyM == 6) { 
    if(mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
 pantallasDyM = 7;
    }
} else if (pantallasDyM == 7) { 
    if(mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
 pantallasDyM = 8;
    }
} else if (pantallasDyM == 8) { 
    if(mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
 pantallaInicio = 0;
    }
}

//PACIFICA
if (pantallasDyM == 9) { 
    if(mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
 pantallasDyM = 10;
    }
  } else if (pantallasDyM == 10) { 
    if(mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
 pantallasDyM = 11;
    }
  } else if (pantallasDyM == 11) { 
    if(mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
 pantallasDyM = 12;
    }
  } else if (pantallasDyM == 12) { 
    if(mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
 pantallasDyM = 13;
    }
  } else if (pantallasDyM == 13) { 
    if(mouseX > 350 && mouseX < 550 && mouseY > 410 && mouseY < 450) {
 pantallasDyM = 14;
    } else if (mouseX > 79 && mouseX < 279 && mouseY > 410 && mouseY < 450) {
    pantallasDyM = 17;
  }
  } else if (pantallasDyM == 14) { 
    if(mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
 pantallasDyM = 15;
    }
  } else if (pantallasDyM == 15) { 
    if(mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
 pantallasDyM = 16;
    }
  } else if (pantallasDyM == 16) { 
    if(mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
 pantallaInicio = 0;
    }
  } else if (pantallasDyM == 17) { 
    if(mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
 pantallaInicio = 0;
    }
  }
} 