import React, { useEffect, useState } from 'react'

import { Dropdown } from '../button/DropDownBtn'

const options = [
    { value: "vn", label: "Vietnamese" },
    { value: "en", label: "English" },
    { value: "jp", label: "Japanese" }
];

const Controller = () => {
    const [lang, setLang] = useState(options[0]);

    return (
        <div style={{
            position: 'absolute', top: '50px', right: '50px', display: 'flex', gap: '8px', flexWrap: 'wrap',
            maxWidth: '150px',
            width: '360px',
        }}>
            <Dropdown value={lang} onChange={setLang}>
                <Dropdown.Button>
                    {(open) => (
                        <button className="px-4 py-2 border rounded">
                            {lang.label} {open ? "▲" : "▼"}
                        </button>
                    )}
                </Dropdown.Button>

                <Dropdown.List>
                    {options.map((opt) => (
                        <Dropdown.Item key={opt.value} option={opt} />
                    ))}
                </Dropdown.List>
            </Dropdown>
        </div>
    )
}

export default Controller

