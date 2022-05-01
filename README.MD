# OBJETIVO: 

-Analizar y compreder la estructura de un API.

-Fortalecer trabajo en equipo.

# OBJETIVOS ESPECIFICOS:

-Identificar los diferentes endpoints que se pueden tener en un proyecto.

-Diferenciar los http methods 

-Construir adecuadamente una petición http request con sus componentes.

Realizar un API en nodejs con persistencia en la base de datos vista en el curso (POstgres o mongo), usar todas las recomendaciones y buenas prácticas vistas en clase.

# Requisitos de entrega:

1.Crear una base de datos llamada universidad (Se recomienda usar base de datos en linea para trabajar en equipo.)

2.Crear las tablas o colecciones de estudiantes y carreras. 

3.Realizar CRUD de estudiantes.

4.Realizar CRUD de carreras.

5.Realizar un endpoint que pasado como párametro el código de la carrera, me muestre la información de la carrera y los estudiantes que pertenecen a ella.

6.Validar reglas de negocio y requisitos de información en los CRUDs solicitados. 

7.Entregar el trabajo en github. Todos los miembros del equipo deben de haber realizo más de 2 commits.

8.Entregar colección de postman con los CRUDs realizados.

# Requisitos de información:

## Carreras:

-id: Código único y generado automáticamente por base de datos (Postgres:serial, Mongo:ObjectId

-codigo: Código de la carrera obligatorio con mínimo 2 caracteres y máximo 10 caracteres.

-nombre: Nombre de la carrera obligatorio con mínimo 5 caracteres y máximo 150 caracteres.

-descripcion: Descripción de la carrera opcional, máximo 500 caracteres.

-activo: Campo booleano que indica si la carrera esta activa o no.

## Estudiantes

-id: Código único y generado automáticamente por base de datos (Postgres:serial, Mongo:ObjectId)

-nro_identificacion: Número de identificación del estudiante, campo obligatorio con mínimo 8 caracteres y máximo 15 caracteres.

-nombre_1: Nombre del estudiante, campo obligatorio con mínimo 5 caracteres y máximo 100 caracteres.

-nombre_2: Nombre secundario del estudiante, campo opcional con mínimo 5 caracteres y máximo 100 caracteres.

-apellido_1: Apellido del estudiante, campo obligatorio con mínimo 5 caracteres y máximo 100 caracteres.

-apellido_2 Apellido del estudiante, campo opcional con mínimo 5 caracteres y máximo 100 caracteres.

-fecha_de_nacimiento: Fecha de nacimiento del estudiante, campo obligatorio.

-activo: Campo booleano que indica si es estudiante esta activo en la universidad o no.

-carrera: Código obligatorio de la carrera a la que pertenece el estudiante.

# Reglas de negocio:

1.Al crear un estudiante o una carrera el campo activo tiene un valor por defecto de verdadero. 

2.Al eliminar un estudiante o una carrera, no eliminar de la base de datos si no cambiar el valor del campo activo por falso.

3.Al crear o actualizar el código de la carrera de un estudiante, verificar si la carrera existe y esta activa. De lo contrario no puede crear o actualizar.

4.Al consultar los estudiantes, debe de mostrar los siguientes (id, nro_identificacion, nombre completo, fecha de nacimiento, edad, código de carrera y nombre de carrera).

5.Un estudiante activo solo puede pertenecer a una carrera, si intenta actualizar o crear otro registro con otro código de carrera no debe de poder realizarlo.
