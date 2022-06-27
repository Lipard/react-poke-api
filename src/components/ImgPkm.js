
export default function ImgPkm({ title, url }) {
    return (
        <div>
            <img src={url} />
            <p>{title}</p>
        </div>
    )

}
