import { useState, useEffect } from "react";

interface IProps {
    text: string;
    text2: string;
    interval: number;
}

export const TextAnimation = ({ text, text2, interval }: IProps) => {

    const [mountedText, setMountedText] = useState<string>("");
    
    useEffect(() => {
        let tmpText = "";
        let tmpText2 = "";

        text.split("").forEach((letter, index) => {
            setTimeout(() => {
                tmpText += letter;
                setMountedText(tmpText);
            }, interval * index);
        });
        if(mountedText.length == text.length) {
            text2.split("").forEach((letter, index) => {
                setTimeout(() => {
                    tmpText2 += letter;
                    setMountedText(tmpText2);
                }, interval * index)
            })
        }
    }, []);

    return <div>{mountedText}</div>;
};
