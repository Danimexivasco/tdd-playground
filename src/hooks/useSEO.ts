import React, {useEffect} from "react";

type SEOProps = {
    title: string
    description: string
}

export const useSEO = ({title, description}: SEOProps) => {
    useEffect(() => {
        document.title = title
        document.querySelector("meta[name='description']")?.setAttribute("content", description)
    }, [title, description])
}