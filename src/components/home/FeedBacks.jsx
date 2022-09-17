import FeedBack from "./FeedBack"
import feedbacks from '../../data/feedbacks.json'

export default function FeedBacks() {

    const data = feedbacks.map(fb => <FeedBack
        key={fb.id}
        comment={fb.comment}
        customer={fb.customer}
    />
    )

    return (
        <section className="feedbacks">
            <div className="feedbacks-text">
                <h1 className="feedbacks-title">What our customers are saying...</h1>
            </div>
            <div className="feedbacks-container">
                {data}
            </div>
        </section>
    )
}