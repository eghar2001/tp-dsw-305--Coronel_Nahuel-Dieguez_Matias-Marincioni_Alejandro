# Propuesta TP DSW

## Grupo
### Integrantes
* 47850, Coronel Eghar Nahuel
* 48194, Marincioni Alejandro
* 47947, Dieguez Matias

### Repositorios
* [fullstack app](["link"](https://github.com/eghar2001/tp-desarrollo))


## Tema
### Descripción
SellNow es una plataforma de compraventa en línea que conecta a compradores y vendedores dentro de Argentina de manera rápida y sencilla. Permite a los usuarios publicar productos para la venta y buscar productos que deseen comprar dentro del país.
Entre otras cosas, permite a los usuarios realizar las siguientes tareas:
<ul>
  <li>Crear una cuenta: Los usuarios pueden registrarse fácilmente utilizando su dirección de correo electrónico.</li>
  <li>Publicar productos: Los vendedores pueden crear listados para los productos que desean vender, incluyendo fotos y una descripcion del mismo, asi como la ubicacion de este</li>
  <li>Buscar y filtrar productos: Los compradores pueden buscar productos por categoría, ubicación o nombre, y explorar los listados disponibles en su área.</li>
  <li>Calificaciones: Los usuarios pueden dejar calificaciones sobre las transacciones completadas, </li>
  <li>Preguntas: Se podran dejar preguntas a los vendedores respecto a un producto</li>
  <li>Notificaciones: La aplicación envía notificaciones a los usuarios sobre actividades relevantes, como  ventas hechas o una actualización en el estado de una compra realzada</li>
</ul>

### Modelo
![imagen del modelo](https://app.diagrams.net/#G1F-wYKdEiRRRPjhs1PMbIXb1Cld1Jq2yr#%7B%22pageId%22%3A%22-QJHrh1hych9j8nOmGhD%22%7D)



## Alcance Funcional 

### Alcance Mínimo

*Nota*: el siguiente es un ejemplo para un grupo de 3 integrantes para un sistema de hotel. El 

Regularidad:
|Req|Detalle|
|:-|:-|
|CRUD simple|1. CRUD Usuario<br>2.CRUD costeEnvio 3.CRUD Categoria|
|CRUD dependiente|1. CRUD Compra {depende de} CRUD Usuario <br>3.CRUD publicacion{depende de} CRUD usuario y CRUD categoria |
|Listado<br>+<br>detalle| 1. Listado de compras  de un usuario filtrado por fecha de compra, muestra fecha de compra monto<br> 2. Listado de publicaciones filtrado por categoría , por nombre, por precio|
|CUU/Epic|1.Publicación de Producto<br>2. Compra de Producto|


Adicionales para Aprobación
|Req|Detalle|
|:-|:-|
|CRUD |1. CRUD CosteEnvio<br>2. CRUD Localidad<br>3.CRUD Pregunta <br>|
|CUU/Epic|1.Cargar localidades <br>2.Hacer pregunta<br>3. |


### Alcance Adicional Voluntario

*Nota*: El Alcance Adicional Voluntario es opcional, pero ayuda a que la funcionalidad del sistema esté completa y será considerado en la nota en función de su complejidad y esfuerzo.

|Req|Detalle|
|:-|:-|
...

