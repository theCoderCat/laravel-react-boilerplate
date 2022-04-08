export default function Iframe({ url }) {
    return (
        <iframe src={url} style={{width: "100%", height: "100%"}}></iframe>
    )
}