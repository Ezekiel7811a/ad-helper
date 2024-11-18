"use client";

import { Button, FormControl, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { push } = useRouter();

    const handleLogin = async () => {
        const res = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // Ensure JSON content type
            },
            body: JSON.stringify({ username, password }),
        });
        if (!res.ok) {
            console.error("Login failed");
            return;
        }
        console.log("Login successful");
        push("/node-map");
    };

    return (
        <div>
            <h1>Login</h1>
            <FormControl>
                <TextField
                    id="username"
                    variant="outlined"
                    fullWidth
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} // Add this line
                    placeholder="Enter your username"
                />
                <TextField
                    id="password"
                    type="password" // Hide input for password
                    variant="outlined"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Add this line
                    placeholder="Enter your password"
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleLogin}
                >
                    Login
                </Button>
            </FormControl>
        </div>
    );
};

export default Login;
