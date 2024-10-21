// Incluimos y definimos las funciones a exportar

function saludar(nombre){
    return `G'lou, ${nombre}`;
}

function despedida(nombre) {
    return `Xaaao xao xaoxao ${nombre}`;
}

// Otra forma de exportar una función
export function prueba(nombre) {
    return `Esto es una prueba ${nombre}`;
}

// Exporto las funciones
export { saludar, despedida };
// export * from "./saludos.js";