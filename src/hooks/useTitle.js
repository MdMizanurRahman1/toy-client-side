import { useEffect } from "react"


const useTitle = title => {
    useEffect(() => {
        document.title = `Sports Club | ${title}`;
    }, [title])
};

export default useTitle;