import { useState } from "react";

export default function NameInput() {
    const [name, setName] = useState("");

    return (
        <>
            <label>
                Write your name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Write your name"
                />
            </label>

            <p>You wrote your name: {name || "—"}</p>
        </>
    );
}
