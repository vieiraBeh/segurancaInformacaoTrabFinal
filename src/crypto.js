import CryptoJS from 'crypto-js';

// Função para gerar uma chave simulada
export function generateKey() {
    return CryptoJS.enc.Base64.stringify(CryptoJS.lib.WordArray.random(16));
}

// Função para criptografar com uma chave pública
export function encryptWithPublicKey(plaintext, publicKey) {
    return CryptoJS.AES.encrypt(plaintext, publicKey).toString();
}

// Função para descriptografar com uma chave privada
export function decryptWithPrivateKey(ciphertext, privateKey) {
    const bytes = CryptoJS.AES.decrypt(ciphertext, privateKey);
    return bytes.toString(CryptoJS.enc.Utf8);
}
