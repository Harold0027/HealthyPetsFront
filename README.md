Front-healthypets /
├── public/
├── src/ 
│   ├── assets/              # Imágenes, íconos, logos
│   ├── components/          # Componentes comunes(nav,footer,items)
│   ├── features/            # Módulos funcionales
│   │   └── GestionUsuarios/(funcionalidades del crud usuarios)
│   │   └── GestionVeterinarios/(funcionalidades crud veterinarios,especialidad,horario)
│   │   └── GestionPacientes/(crud registro de mascotas)
│   │   └── GestionHorarios/(crud asignar y consultar horarios)
│   │   └── GestionServicios/(mostrar servicios brindados)
│   │   └── GestionCitas/(registrar citas)
│   │   └── GestionHistorialMedico/(consultar historial del paciente)
│   │   └── GestionReportes/(generar reportes del servicio)
│   │   └──Notificaciones /(pestaña de notificacion del usuario)
│   ├── layouts/             # Layouts con navbar/sidebar
│   │   └── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/               # Páginas conectadas al router
│   │   └── Usuarios.jsx(CRUD)/
│   │   └── VeterinariosAdmin.jsx/(crud veterinarios,especialidad,horario)
│   │   └── VeterinariosUser.jsx/(mostrar veterinarios)
│   │   └── Pacientes.jsx/(crud registro de mascotas)
│   │   └── HorariosAdmin.jsx/(crud, asignar y consultar horarios)
│   │   └── HorariosUser.jsx/( consultar horarios)
│   │   └── Servicios.jsx/(mostrar servicios brindados)
│   │   └── CitasAdmin.jsx/(crud citas)
│   │   └── CitasUser.jsx/(consultar citas)
│   │   └── HistorialMedico.jsx/(consultar historial del paciente)
│   │   └── Reportes.jsx/(generar reports del servicio)
│   │   └──Notificaciones.jsx /(pestaña de notificacion del usuario)
│   ├── routes/              # Definición de rutas (protegidas, públicas)
│   ├── services/            # API calls hacia el backend Spring Boot
│   │   ├── api.js           # Instancia base de fetch
│   │   └── authService.js   # Ej: login, logout
│   ├── contexts/            # Contexto de autenticación, tema, etc.
│   ├── utils/               # Funciones auxiliares
│   ├── App.js               # Componente raíz
│   └── main.js              # Punto de entrada
│   └── index.html
├── .env                     # Variables de entorno (BACKEND_URL, etc.)
├── .gitignore
├── jsconfig.json            # Importaciones absolutas
├── package.json
├── vite.config.js           # Configuración de Vite
└── README.md

