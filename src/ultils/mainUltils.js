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

export function formatRelativeTime(inputTime) {
    const now = new Date();
    const date = new Date(inputTime.replace(" ", "T")); // chuyển "2025-09-01 15:58:44" thành ISO

    const sameDay =
        now.getFullYear() === date.getFullYear() &&
        now.getMonth() === date.getMonth() &&
        now.getDate() === date.getDate();

    if (sameDay) {
        return date.toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" });
    }

    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    const isYesterday =
        date.getFullYear() === yesterday.getFullYear() &&
        date.getMonth() === yesterday.getMonth() &&
        date.getDate() === yesterday.getDate();

    if (isYesterday) {
        return "Hôm qua";
    }

    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay() + 1); // thứ 2
    startOfWeek.setHours(0, 0, 0, 0);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);

    if (date >= startOfWeek && date <= endOfWeek) {
        return date.toLocaleDateString("en-US", { weekday: "long" }); // Monday, Tuesday...
    }

    return date.toLocaleDateString("vi-VN");
}

