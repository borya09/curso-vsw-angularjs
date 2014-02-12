PASOS PREVIOS
=============
* Borrar dependencias Api rest node & Angularjs (node & bower)
* Abrir bbdd mongodb



API REST NODE
=============

* Explicar proyecto & tecnologias
* Instalar dependencias
* Repasar código por encima


ANGULARJS
=========

* Instalar dependencias npm & bower
* Estructura proyecto
* Estructura ficheros javascript
    * MainApp
    * Rutas
    * Servicios
    * Controladores
    * Vistas
    * Directivas

* Configurar aplicación angularjs 'MisGastosApp'
    * mis-gastos-app.js
    * index.jade
        * ng-app
* Rutas
    * index.jade: ng-view
    * mis-gastos-routes.js



### Listado Gastos

* Controlador
    * Llamada a servicio
    * Datos al $scope

* Vista
    * ng-repeat
    * Filtros
    * link -> route
    * ng-click - eliminar
        * Evento controller
        * Servicio
        * Cambia modelo -> Refresca vista


### Edición Gastos

* Controlador
    * Alta
        * modelo vacio
    * Edición
        * Llamada a Servicio
        * Modelo al $scope
* Vista
    * ng-select
        * moneda
    * doble-binding
        * 'persona' paga a 'persona1, persona2' 'XX' 'moneda'
    * ng-form
        * Validación de campos
    * ng-click - guardar
        * Evento controller
        * Servicio
        * location -> index


### Directiva
* Explicar qué es
* Monstrar ejemplo
```
    prueba-saludo(data-de="borja", data-a="pepe")
```


