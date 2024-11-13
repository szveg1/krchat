import "./TextInputAndButton.less"
import { TextInput, TextInputProps } from "./TextInput";
import { IconButton } from "./IconButton";
export type TextInputAndButtonProps = TextInputProps & {
    buttonContent?: string;
    iconName?: string;
    onClick?: () => void;
}
export function TextInputAndButton({ iconName, buttonContent, onClick, ...textInputProps }:
    TextInputAndButtonProps) {
    return <div class="TextInputAndButton">
        <TextInput {...textInputProps} onEnter={onClick} />
        <IconButton iconName={iconName} buttonContent={buttonContent} onClick={onClick} />
    </div>
}