import CryptoJS from 'crypto-js';

// Função para gerar uma chave simulada
export function generateKey() {
    return CryptoJS.enc.Base64.stringify(CryptoJS.lib.WordArray.random(16));
}

// Verificar se uma chave é válida
function isKeyValid(key) {
    return key && typeof key === 'string' && key.length > 0;
}

// Função para criptografar com uma chave pública
export function encryptWithPublicKey(plaintext, publicKey) {
    if (!isKeyValid(publicKey)) {
        throw new Error("Chave pública inválida");
    }
    return CryptoJS.AES.encrypt(plaintext, publicKey).toString();
}

// Função para descriptografar com uma chave privada
export function decryptWithPrivateKey(ciphertext, privateKey) {
    if (!isKeyValid(privateKey)) {
        throw new Error("Chave privada inválida");
    }
    const bytes = CryptoJS.AES.decrypt(ciphertext, privateKey);
    return bytes.toString(CryptoJS.enc.Utf8);
}
