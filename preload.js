// preload.js

import { contextBridge, shell } from 'electron';
 // Solo permite abrir enlaces en el navegador predeterminado
contextBridge.exposeInMainWorld('api', {
  openExternal: (url) => shell.openExternal(url)
});
