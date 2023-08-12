
export default function OrderMenu({ updateOrder }) {
    return (
        <div>
            <button className="btn btn-success" onClick={() => updateOrder("burritos")}>Set Order to Burritos</button>
        </div>
    )
}