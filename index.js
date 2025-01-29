import { generateKey, encryptWithPublicKey, decryptWithPrivateKey } from './src/crypto';

console.log("Iniciando o projeto de Criptografia Simulada...");

// Gerar uma chave
const sharedKey = generateKey();

console.log("Chave Compartilhada:", sharedKey);

// Texto original
const plaintext = "Mensagem secreta";

// Criptografar
const encryptedText = encryptWithPublicKey(plaintext, sharedKey);
console.log("Texto Criptografado:", encryptedText);

// Descriptografar
const decryptedText = decryptWithPrivateKey(encryptedText, sharedKey);
console.log("Texto Descriptografado:", decryptedText);

// Verificar se o texto original é igual ao texto descriptografado
if (plaintext === decryptedText) {
    console.log("Criptografia e Descriptografia bem-sucedidas!");
} else {
    console.log("Erro: Falha na descriptografia.");
}
