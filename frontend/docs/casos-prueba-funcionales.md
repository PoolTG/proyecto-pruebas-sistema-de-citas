
# 4.2 Diseño de casos de prueba funcionales
## Sistema de Gestión de Citas Médicas — Clínica Angry

### Objetivo
Verificar el funcionamiento de las funciones principales del sistema: inicio de sesión, registro de pacientes y reserva de citas médicas.

### CP01 — Inicio de sesión exitoso
- **Prioridad:** Alta
- **Precondición:** Existe una cuenta válida.
- **Datos:** Usuario y contraseña correctos.
- **Pasos:** Abrir el inicio de sesión, ingresar las credenciales y pulsar Ingresar.
- **Resultado esperado:** El sistema permite el acceso y redirige según el rol.
- **Resultado obtenido:** Pendiente de ejecución.
- **Estado:** Pendiente.

### CP02 — Inicio de sesión con contraseña incorrecta
- **Prioridad:** Alta
- **Precondición:** El sistema está en la pantalla de inicio de sesión.
- **Datos:** Usuario válido y contraseña incorrecta.
- **Pasos:** Ingresar los datos y pulsar Ingresar.
- **Resultado esperado:** Se muestra un error y no se permite el acceso.
- **Resultado obtenido:** Pendiente de ejecución.
- **Estado:** Pendiente.

### CP03 — Inicio de sesión con campos vacíos
- **Prioridad:** Alta
- **Precondición:** El sistema está en la pantalla de inicio de sesión.
- **Datos:** Usuario y contraseña vacíos.
- **Pasos:** Pulsar Ingresar sin completar los campos.
- **Resultado esperado:** Se muestran las validaciones de los campos obligatorios.
- **Resultado obtenido:** Pendiente de ejecución.
- **Estado:** Pendiente.

### CP04 — Registro exitoso de paciente
- **Prioridad:** Alta
- **Precondición:** El usuario no está autenticado y dispone de un correo y usuario no registrados.
- **Datos:** Nombre, apellido, correo válido, usuario disponible y contraseña válida con confirmación idéntica.
- **Pasos:** Abrir Registro, completar el formulario y pulsar Registrarme.
- **Resultado esperado:** La cuenta se crea y el sistema intenta iniciar sesión automáticamente.
- **Resultado obtenido:** Pendiente de ejecución.
- **Estado:** Pendiente.

### CP05 — Registro con correo inválido
- **Prioridad:** Media
- **Precondición:** Está abierta la pantalla de registro.
- **Datos:** Correo con formato incorrecto.
- **Pasos:** Completar los campos y enviar el formulario.
- **Resultado esperado:** Se muestra la validación del correo y no se completa el registro.
- **Resultado obtenido:** Pendiente de ejecución.
- **Estado:** Pendiente.

### CP06 — Registro con contraseñas diferentes
- **Prioridad:** Media
- **Precondición:** Está abierta la pantalla de registro.
- **Datos:** Contraseña y confirmación diferentes.
- **Pasos:** Completar el formulario y pulsar Registrarme.
- **Resultado esperado:** Se muestra que las contraseñas no coinciden.
- **Resultado obtenido:** Pendiente de ejecución.
- **Estado:** Pendiente.

### CP07 — Selección de especialidad y médico
- **Prioridad:** Alta
- **Precondición:** El paciente ha iniciado sesión y hay especialidades y médicos disponibles.
- **Datos:** Una especialidad y un médico correspondiente.
- **Pasos:** Abrir Agendar nueva cita, seleccionar especialidad y médico, y pulsar Continuar.
- **Resultado esperado:** Se permite avanzar al paso de selección de fecha y hora.
- **Resultado obtenido:** Pendiente de ejecución.
- **Estado:** Pendiente.

### CP08 — Reserva sin fecha u hora
- **Prioridad:** Alta
- **Precondición:** El paciente seleccionó especialidad y médico.
- **Datos:** Fecha u hora sin seleccionar.
- **Pasos:** Intentar continuar sin completar ambos datos.
- **Resultado esperado:** El sistema no permite avanzar al siguiente paso.
- **Resultado obtenido:** Pendiente de ejecución.
- **Estado:** Pendiente.

### CP09 — Reserva de cita válida
- **Prioridad:** Alta
- **Precondición:** El paciente inició sesión y el médico tiene un horario disponible.
- **Datos:** Especialidad, médico, fecha futura, hora disponible y motivo opcional.
- **Pasos:** Completar los pasos de reserva y pulsar Confirmar reserva.
- **Resultado esperado:** Se muestra la confirmación de cita solicitada, pendiente de confirmación.
- **Resultado obtenido:** Pendiente de ejecución.
- **Estado:** Pendiente.

### CP10 — Intento de reserva en fecha pasada
- **Prioridad:** Alta
- **Precondición:** El paciente inició sesión.
- **Datos:** Una fecha y hora anteriores a la fecha y hora actuales.
- **Pasos:** Intentar seleccionar o enviar una fecha pasada.
- **Resultado esperado:** El sistema rechaza la reserva y muestra una validación.
- **Resultado obtenido:** Pendiente de ejecución.
- **Estado:** Pendiente.

### Resumen
Se diseñaron 10 casos de prueba funcionales para las funciones principales del sistema. Los resultados obtenidos y el estado final se completarán después de ejecutar las pruebas.
