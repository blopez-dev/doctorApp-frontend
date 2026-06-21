# Doctor App Frontend

Aplicación frontend para gestión hospitalaria con arquitectura hexagonal.

## Arquitectura

```
src/
├── core/                           # LOGICA DE NEGOCIO PURA
│   ├── domain/entities/            # Doctor, Patient, Room, Appointment
│   ├── ports/repositories/         # Interfaces de repositorio
│   └── application/useCases/        # Casos de uso por entidad
│
├── common/
│   ├── repositories/               # Implementaciones de repositorios
│   ├── services/                  # Servicios (usan CORE use cases)
│   ├── adapters/http/             # Cliente HTTP (axios)
│   └── ...
│
├── mocks/                        # MSW - Mock Service Worker
│   ├── handlers/                  # Handlers de endpoints mock
│   └── data/                     # Datos mock
│
├── application/                  # Componentes existentes (legacy)
│   ├── components/
│   └── Routes/
│
└── pages/                        # Páginas existentes (legacy)
```

## Flujo de Datos

```
Component → Service → UseCase → Repository Interface → Repository Implementation → API
```

## Configuración

### Variables de Entorno (.env)

```env
VITE_AUTH0_DOMAIN=your-domain.auth0.com
VITE_AUTH0_CLIENT_ID=your-client-id
VITE_API_URL=http://localhost:3001/api
VITE_MOCK_ENABLED=true    # Usar mocks en desarrollo
```

## Desarrollo

```bash
# Inicializar MSW (solo primera vez)
npm run mocks:init

# Instalar dependencias
npm install

# Ejecutar
npm run dev
```

## Endpoints Mockeados

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/doctors` | Listar doctores |
| POST | `/api/doctors` | Crear doctor |
| PUT | `/api/doctors/:id` | Actualizar doctor |
| DELETE | `/api/doctors/:id` | Eliminar doctor |
| GET | `/api/patients` | Listar pacientes |
| POST | `/api/patients` | Crear paciente |
| PUT | `/api/patients/:id` | Actualizar paciente |
| DELETE | `/api/patients/:id` | Eliminar paciente |
| GET | `/api/rooms` | Listar salas |
| POST | `/api/rooms` | Crear sala |
| GET | `/api/appointments` | Listar citas |
| POST | `/api/appointments` | Crear cita |
| PATCH | `/api/appointments/:id/cancel` | Cancelar cita |

## Stack Tecnológico

| Componente | Tecnología |
|------------|------------|
| Framework | React 18 + Vite |
| UI | Ant Design 5 |
| Auth | Auth0 |
| Calendario | FullCalendar |
| Mocks | MSW (Mock Service Worker) |
| Arquitectura | Hexagonal (CORE) |