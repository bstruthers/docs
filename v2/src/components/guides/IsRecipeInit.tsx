import * as React from "react";
import { FirstFactors, SecondFactors } from "./utils"
import StackViewer from "./StackViewer";

export default function IsRecipeInit(props: React.PropsWithChildren<{
    recipe: string
}>) {
    return (
        <StackViewer
            showIf={(selection) => {
                let isInit = false;
                selection.tenants.forEach(t => {
                    if (t.firstFactors.includes(props.recipe as any) || t.secondFactors.includes(props.recipe as any)) {
                        isInit = true;
                    }
                })
                return isInit;
            }}
            useDiv={false}
        >{props.children}</StackViewer>
    )
}