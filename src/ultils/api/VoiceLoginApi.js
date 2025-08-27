export const LoginApi = async (domain, token) => {
    try {
        const response = await fetch(`https://test2.caresoft.vn/${domain}/thirdParty/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ token }),
        });

        if (!response.ok) {
            throw new Error("Failed to fetch");
        }

        return await response.json();
    } catch (error) {
        console.error("Error in LoginApi:", error);
        throw error;
    }
};
