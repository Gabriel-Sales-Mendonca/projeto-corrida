export default function Game() {
    return (
        <div className="h-[100%] w-[100%] flex justify-center items-center">
            <iframe src="/page.html" className="w-full h-full" style={{ maxWidth: '100%', maxHeight: '100%' }}></iframe>
        </div>
    )
}