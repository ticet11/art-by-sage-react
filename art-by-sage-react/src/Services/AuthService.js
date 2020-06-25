export default {
    login: (user) => {
        return fetch("http://localhost:3000/users/login", {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => data);
    },

    logout: () => {
        return fetch("http://localhost:3000/users/logout")
            .then((res) => res.json())
            .then((data) => data);
    },

    isAuthenticated: () => {
        return fetch(
            "http://localhost:3000/users/authenticated"
        ).then((res) => {
            if (res.status !== 401)
                return res.json().then((data) => data);
            else
                return {
                    isAuthenticated: false,
                    user: { username: "" },
                };
        });
    },
};
