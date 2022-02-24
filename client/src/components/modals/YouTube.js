export const YouTube = ({ active, setActive, linkVideo }) => {

    console.log(linkVideo)
    return (
        <div className={active ? 'YouTube_wrapper open' : 'YouTube_wrapper'} onClick={() => setActive(false)}>
            <div className="YouTube__content" onClick={(e) => e.stopPropagation()}>
                <iframe id="ytplayer" type="text/html" width="100%" height="100%"
                    src={`${linkVideo}?autoplay=0&origin=http://example.com`}
                    frameborder="0" />
            </div>
        </div>

    )
}