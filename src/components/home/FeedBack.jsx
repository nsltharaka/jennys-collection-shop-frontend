export default function FeedBack({ comment, customer }) {
    return (
        <div className="feedback">
            <p className="feedback-description">
                <q>{comment}</q>
            </p>
            <p className="feedback-customer">- {customer} -</p>
        </div>
    )
}