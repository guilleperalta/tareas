## VAMOS A CREAR UNOS COMANDOS PARA PODER CORRER ESTA APP LOCALMENTE EN DOCKER

# Para crear la imagen
build -t guilleperalta/tareas .

# Para crear el contenedor y correrlo en el puerto 3500
docker run -p 3500:3500 guilleperalta/tareas