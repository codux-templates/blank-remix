import { useState } from 'react';
import style from './dropy.module.css';

type DropyProps = {};

export function Dropy(props: DropyProps) {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const [selected, setSelected] = useState(options[0]);

    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelected(event.target.value);
    };

    return (
        <select className={style.dropy} value={selected} onChange={onChange}>
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}
