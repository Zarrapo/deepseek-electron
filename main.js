// main.js

// Instalar Dependencias desde el terminal
/*
npm install electron --save-dev
npm install electron-store --save
npm install electron-builder --save-dev
*/

// Script de Inicio
// npm start

// Script de Empaquetado
// npm run build

// Codigo

// Importar los módulos necesarios 
import { app, BrowserWindow, shell, Menu } from 'electron';
import { fileURLToPath } from 'url';
import path from 'path';
import Store from 'electron-store';
//
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Definir la variable de la ventana principal
let mainWindow;
// Definir la instancia de almacenamiento de datos
const store = new Store();

// Configurar la sesión de Electron
function createWindow() {
    
  // Obtener el tamaño y la posición de la ventana almacenados, o usar valores por defecto
  const windowState = store.get('windowState') || { x: undefined, y: undefined, width: 1200, height: 900 };
  
  // Crear la ventana principal
  mainWindow = new BrowserWindow({
    x: windowState.x,
    y: windowState.y,
    width: windowState.width,
    height: windowState.height,

    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Usa el script preload
      contextIsolation: true, // Asegura que los contextos están separados
      enableRemoteModule: false,
      nodeIntegration: false // Desactiva Node.js en el renderer por seguridad
    },
    icon: path.join(__dirname, 'assets', 'icons', 'icon.ico') // Asignar el icono
  });

  // Ocultar la barra de menús de Electron
  mainWindow.setMenu(null);
  // Cargar la URL de la aplicación
  mainWindow.loadURL('https://chat.deepseek.com');

  // Guardar el estado y el tamaño de la ventana al cerrarla
  mainWindow.on('close', () => {
    store.set('windowState', mainWindow.getBounds());
  });
  // Establecemos a null la ventana principal al cerrarla
  mainWindow.on('closed', () =>{
    mainWindow = null;
  });

  // Crear el menú contextual
  const contextMenu = Menu.buildFromTemplate([
    { role: 'cut', label: 'Cortar' },
    { role: 'copy', label: 'Copiar' },
    { role: 'paste', label: 'Pegar' },
    { type: 'separator' },
    { role: 'selectAll', label: 'Seleccionar todo' }
  ]);

  // Asignar el menú contextual a la ventana
  mainWindow.webContents.on('context-menu', (e, params) => {
    contextMenu.popup(mainWindow, params.x, params.y);
  });

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    // Si es la URL de login de OpenAI, abrir en Electron
    if (url.startsWith('https://auth.openai.com/authorize')) {
      return { action: 'allow' };
    }
    
    // Si no, abrir en el navegador externo
    shell.openExternal(url);
    return { action: 'deny' };
  });

}

// Crear Ventana y Manejo de errores al iniciar
app.whenReady().then(createWindow).catch(console.error);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
