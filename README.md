Front-healthypets /
├── public/
├── src/ 
│   ├── assets/              # Imágenes, íconos, logos
│   ├── components/          # Componentes comunes(nav,footer,items)
│   │       └── CardServicio.jsx     
│   │       └── CardVeterinario.jsx     
│   │       └── ListFormItem.jsx     
│   │       └── LoginForm.jsx     
│   ├── features/            
│   │   └── GestionUsuarios/(funcionalidades del crud usuarios)
│   │       └── UsuarioItem.jsx       
│   │       └── UsurioItemContainer.jsx       
│   │       └── UsurioForm.jsx       
│   │   └── GestionVeterinarios/(funcionalidades crud veterinarios,especialidad,horario)
│   │       └── VeterinariosAdminItem.jsx   
│   │       └── VeterinariosAdminItemContainer.jsx   
│   │       └── VeterinariosAdminItemForm.jsx   
│   │       └── VeterinariosList.jsx   
│   │       └── VeterinariosContainer.jsx   
│   │   └── GestionPacientes/(crud registro de mascotas)
│   │       └── PacientesAdminItem.jsx
│   │       └── PacientesAdminItemContainer.jsx
│   │       └── PacientesForm.jsx
│   │   └── GestionHorarios/(crud asignar y consultar horarios)
│   │       └── HorariosAdminItem
│   │       └── HorariosAdminItemContainer
│   │       └── HorariosAdminForm
│   │   └── GestionServicios/(mostrar servicios brindados)
│   │       └── ServiciosList.jsx
│   │       └── ServiciosListContainer.jsx
│   │   └── GestionCitas/(registrar citas)
│   │       └── CitasAdminItem.jsx
│   │       └── CitasAdminItemContainer.jsx
│   │       └── CitasAdminForm.jsx
│   │       └── CitasList.jsx
│   │       └── CitasListContainer.jsx
│   │   └── GestionHistorialMedico/(consultar historial del paciente)
│   │       └── HistorialItem.jsx
│   │       └── HistorialItemContainer.jsx
│   │   └── GestionReportes/(generar reportes del servicio)
│   │   └──Notificaciones /(pestaña de notificacion del usuario)
│   ├── layouts/             # Layouts con navbar/sidebar
│   │   └── AdminLayout.jsx
│   │   └── Footer.jsx
│   │   └── NavbarAdmin.jsx
│   │   └── NavbarUser.jsx
│   │   └── UserLayout.jsx
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
│   ├── services/            # API calls hacia el backend Spring Boot
│   │   ├── api.js           
│   │   └── authService.js   (login, logout)
│   │   └── UsuariosService.js   (login, logout)
│   │   └── VeterinariosService.js   (login, logout)
│   │   └── PacientesService.js   (login, logout)
│   │   └── HorariosService.js   (login, logout)
│   │   └── ServiciosService.js   (login, logout)
│   │   └── CitasService.js   (login, logout)
│   │   └── HistorialService.js   (login, logout)
│   ├── contexts/            # Contexto de autenticación, tema, etc.
│   │   └── AuthContext.jsx   (manetener usuario activo)
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

