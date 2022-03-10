import { useEffect } from "react";
// import React from "react";
// class Page extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     componentDidMount() {
//         document.title = this.props.title ? this.props.title : "";
//         console.log('page changed to', this.props.title);
//     }

//     render() {
//         const PageComponent = this.props.component;
//         return <PageComponent />;
//     }
// }

export default function Page({title, component}) {
    useEffect(() => {
        document.title = title || "";
    }, [title]);
    const PageComponent = component;
    return <PageComponent />; 
};