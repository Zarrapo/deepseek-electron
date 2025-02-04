# DeepSeek Desktop

DeepSeek Desktop es una aplicación de escritorio construida con Electron, diseñada para proporcionar una experiencia de usuario integrada para interactuar con la plataforma DeepSeek.

## Características

- **Interfaz de Usuario Minimalista**: La aplicación carga una interfaz web dentro de una ventana de Electron, asegurando una experiencia de usuario cohesiva y controlada.
- **Gestión de Estado de Ventana**: Guarda y restaura el tamaño y la posición de la ventana de la aplicación entre sesiones gracias al uso de `electron-store`.
- **Integración con Navegadores Web**: Los enlaces externos se abren en el navegador predeterminado del usuario, asegurando que la navegación sea segura y eficiente.
- **Menú Contextual Personalizado**: Incluye opciones para cortar, copiar, pegar y seleccionar todo el texto dentro de la aplicación.

## Desarrollo

La aplicación utiliza Electron para crear una experiencia de escritorio nativa usando tecnologías web como HTML, CSS y JavaScript.

### Prerrequisitos

Antes de iniciar el desarrollo, asegúrate de tener instalado Node.js y npm en tu sistema. Esta aplicación ha sido desarrollada y probada con las siguientes versiones:

- Node.js: 22.13.1
- npm: 11.1.0

### Instalación

Para configurar el entorno de desarrollo y ejecutar DeepSeek Desktop localmente, sigue estos pasos:

```bash
# Clonar el repositorio
git clone https://github.com/Zarrapo/deepseek-electron.git

# Navegar al directorio del proyecto
cd deepseek-electron

# Instalar las dependencias
npm install
```

### Ejecución

Para iniciar la aplicación durante el desarrollo, puedes utilizar el siguiente comando:

```bash
npm start
```

Este comando inicia la aplicación usando Electron.

### Empaquetado

Para construir la aplicación para producción, puedes utilizar el comando `build` que compila la aplicación para distribución:

```bash
npm run build
```

## Licencia

DeepSeek Desktop es un software de código abierto licenciado bajo la Licencia MIT.

## Releases

[DeepSeek.Desktop.Setup.3.0.0.exe)(https://github.com/Zarrapo/deepseek-electron/releases/download/v3.0.0/DeepSeek.Desktop.Setup.3.0.0.exe)
