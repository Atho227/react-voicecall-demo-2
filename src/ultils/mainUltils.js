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

export async function apiCallHistory() {
    const conditions = {
        domain: import.meta.env.VITE_DOMAIN,
        apiToken: import.meta.env.VITE_API_TOKEN,
    }
    const payload = {
        agent_id: '5000'
    }

    try {
        const response = await fetch(`https://test2.caresoft.vn/${conditions.domain}/thirdParty/login`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${conditions.apiToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error("Failed to fetch");
        }

        return await response.json();
    } catch (error) {
        console.error("Error in LoginApi:", error);
        throw error;
    }
}