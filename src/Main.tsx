import "./Main.less"
import { LeftPane } from "./LeftPane"
import { RightPane } from "./RightPane"
import { ConversationDto } from "./ChatService";
import { useState } from "preact/hooks";
export function Main() {
    let [selected, setSelected] = useState<ConversationDto>();
    return <div class={selected == undefined ? "Main left" : "Main right"}>
        <LeftPane selected={selected} onSelect={setSelected} />
        <RightPane conversation={selected} onBack = {() => setSelected(undefined)}/>
    </div>
}