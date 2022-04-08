import { useState } from "react";
import { SlInput } from '@shoelace-style/shoelace/dist/react';

function useInput({ type, label, className }) {
    const [value, setValue] = useState("");
    const input = <SlInput label={label} value={value} onSlChange={e => setValue(e.target.value)} type={type} />;
    return [value, input];
}

export default useInput;