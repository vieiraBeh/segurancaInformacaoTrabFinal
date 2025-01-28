import { generateKey, encryptWithPublicKey, decryptWithPrivateKey } from './src/crypto.js';

console.log("Iniciando o projeto de Criptografia Assimétrica Simulada...");

// Gerar pares de chaves (simulados)
const publicKey = generateKey();
const privateKey = generateKey();

console.log("Chave Pública:", publicKey);
console.log("Chave Privada:", privateKey);

// Texto original
const plaintext = "Mensagem secreta";

// Criptografar
const encryptedText = encryptWithPublicKey(plaintext, publicKey);
console.log("Texto Criptografado:", encryptedText);

// Descriptografar
const decryptedText = decryptWithPrivateKey(encryptedText, privateKey);
console.log("Texto Descriptografado:", decryptedText);
