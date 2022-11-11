import { useEffect } from "react";

const useTitle = (title) => {
    // useEffect on change title props
    useEffect(() => {
        // document title change
        document.title = `Pick Me React | ${title}`;
    }, [title]);
}

export default useTitle;