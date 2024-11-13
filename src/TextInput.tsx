import "./TextInput.less"
export type TextInputProps = {
    value: string;
    onChange: (value: string) => void;
    type?: "text" | "password" | "email";
    placeholder?: string;
    onEnter?: () => void;
    autofocus?: boolean;
}
export function TextInput({ value, onChange, type, placeholder, onEnter, autofocus }:
    TextInputProps) {
    return <div class="TextInput">
        <input type={type} value={value} onInput={e => onChange(e.currentTarget.value)}
            autofocus={autofocus}
            onKeyDown={onEnter ? e => {
                if (e.key === "Enter")
                    onEnter!();
            } : undefined} />
        <label class={value ? "subsided" : undefined}>
            {placeholder}
        </label>

    </div>
}
