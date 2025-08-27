import { SignJWT } from "jose";

export async function generateJWT(payload, secret) {
    const secretKey = new TextEncoder().encode(secret);

    const token = await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256", typ: "JWT" })
        .sign(secretKey);

    return token;
}

export const getLocalstorage = (key, defaultValue) => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
};

export const setLocalstorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};