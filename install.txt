GUIA DE USO
1. Cómo instalar / cómo ejecutar
	HTTPS y HTTP/2
		Para ejecutar el proyecto con HTTPS/HTTP/2, primero debes generar los certificados SSL con el siguiente comando:
		openssl req -x509 -newkey rsa:4096 -keyout ./cert/key.pem -out ./cert/cert.pem -days 365 -nodes
		La ruta del certificado debería ser el siguiente 
		Los-achachairu\Proyecto-Web\cert 
		Luego copiar los archivos resultantes en la siguiente ruta dentro del proyecto
		Los-achachairu\nginx-1.28.0\nginx-1.28.0\conf\certs.
		Para que funcione nginx debe ir a la carpeta Los-achachairu\nginx-1.28.0\nginx-1.28.0 donde se encuentra nginx.exe y ejecutarlo, para verificar que está ejecutando, abra la terminal en modo administrador en dicha carpeta 		y ponga el siguiente comando:
		tasklist /fi "imagename eq nginx.exe"
			Aparecerá una lista con dos elementos con el nombre de nginx si es que está activo 
			Ahora para ingresar al servidor puede hacerlo de dos maneras:
			El primero usa https nativo con express
			https://localhost:3000
			El segundo usa Nginx → HTTPS + HTTP/2
			https://localhost 
		Para activar los certificados tiene que ir a la carpeta Los-achachairu\nginx-1.28.0\nginx-1.28.0\conf\ y abrir en un editor de texto el archivo nginx.conf donde deberá cambiar las siguientes dos líneas y especificar  		dónde se encuentra el certificado generado
		ssl_certificate     /ruta_de_certificado/cert.pem;
		ssl_certificate_key /ruta_de_certificado/key.pem;
		Lo guarda y ahora sí podrá ingresar al servidor
	CONEXIÓN A LA BASE DE DATOS EN MONGODB
		Vaya a la pagina de mongo atlas para iniciar sesión y actualice la IP permitida (la que está usando en ese momento) si es que no le permite conectar a la BD desde la terminal con npm start, sino le pide actualizar IP, 		funcionará con normalidad

	CONFIGURACIÓN EN POSTMAN
		Para que funcione tanto en https nativo en express como http/2 en nginx, vaya a Settings y en la opción HTTP version escoja Auto
	ENDPOINTS
		Independientemente de la manera en la que haya ingresado al servidor (HTTPS o HTTP/2) añada cualquiera de estos a la URL
		/api/categorias
		/api/subcategorias
		/api/dificultades
		/api/rangos-edad
		/api/usuarios
		/api/auth
2.Cómo funciona el código por dentro
	ESTRUCUTRA GENERAL
		Dentro de la carpeta Proyecto-Web todo el código fuente está en src. El proyecto está organizado por capas para que sea más fácil entender y mantener:
		config/: configuración de la base de datos y conexión con MongoDB.
		controllers/: aquí va la lógica de negocio de cada módulo (usuarios, categorías, dificultades, etc.).
		middlewares/: middlewares de Express, como la autenticación con JWT, la validación de campos y la verificación de roles.
		models/: modelos de Mongoose que representan las colecciones de MongoDB.
		routes/: rutas de la API; aquí se definen las URLs y se enlazan con sus controladores.
		validators/: validaciones con express-validator para comprobar que los datos que llegan a la API sean correctos.
	BASE DE DATOS
		En src/config/database.js se define la función connectDB, que se encarga de conectar el backend con MongoDB usando la variable de entorno MONGO_URI.
		Si la conexión se realiza correctamente, se muestra en consola el host de la base de datos. Si ocurre algún error, se imprime el mensaje y se detiene la ejecución para evitar que la aplicación corra sin una base de datos 		disponible.
	RUTAS Y CONTROLADORES
		Las rutas están definidas en src/routes/*.js.
		Cada archivo de rutas expone los endpoints REST, por ejemplo:
			GET /api/dificultades
			POST /api/dificultades
			etc.
		Esas rutas no contienen la lógica directamente, sino que llaman a las funciones de los controladores correspondientes, ubicados en src/controllers/*.js.
		Los controladores se encargan de:
			Consultar datos en MongoDB.
			Crear, actualizar o desactivar registros.
			Manejar errores y devolver respuestas en formato JSON de forma consistente.
	MIDDLEWARES DE AUTENTIFICACION Y VALIDACION
		Para proteger la API se usan varios middlewares:
			El middleware auth revisa el token JWT que llega en el header Authorization. Si el token es válido, permite continuar; además, cuando se indica, comprueba el rol del usuario para restringir el acceso a ciertas 			rutas.
			Los middlewares de validación (validarCampos y los que están en validators/) usan express-validator para revisar que los datos enviados por el cliente tengan el formato y los valores correctos antes de llegar al 			controlador.
	INTEGRACION CON NGINX Y HTTP/2
		El archivo nginx.conf contiene la configuración del servidor Nginx que se pone delante del backend:
			La línea listen 443 ssl http2; indica que Nginx escucha en el puerto 443 con HTTPS y HTTP/2 habilitados.
			Las directivas ssl_certificate y ssl_certificate_key apuntan a los certificados que están en conf/certs.
			En el bloque location / se usa proxy_pass http://localhost:4000; para reenviar todo el tráfico que llega a Nginx hacia el servidor Node/Express que está corriendo en el puerto 4000.
		De esta forma, el cliente siempre se conecta a Nginx mediante HTTPS/HTTP/2, y Nginx se encarga de hablar con el backend y devolver las respuestas al navegador o al cliente que consume la API.

