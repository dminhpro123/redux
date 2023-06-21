import './cardHomeStyle.css';

const CardHome = ({ id, title, creator, status, discription }) => {
    let statusStr = `status${status}`;

    return (
        <>
            <div className='cardHome' id={id}>
                <div>
                    <span><strong>Title: {title}</strong></span>
                </div>
                <div>
                    <span>Creator: {creator}</span>
                </div>
                <div className={statusStr}>
                    <span>Status: {status}</span>
                </div>
                <hr />
                <div>
                    <strong>Discription: </strong> {discription}
                </div>

            </div >
        </>
    );
}

export default CardHome;