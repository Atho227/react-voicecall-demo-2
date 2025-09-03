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
    const query = new URLSearchParams(payload).toString();

    try {
        const response = await fetch(`https://test.caresoft.vn/${conditions.domain}/api/v1/calls?${query}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${conditions.apiToken}`,
                "Content-Type": "application/json",
            },
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