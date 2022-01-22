export default function Staff({ name, image, position }) {
    return (
        <div className="text-center flex flex-col justify-center items-center py-7">
            <img src={`https://club-ampere-backend.herokuapp.com${image}`} alt={name} className="w-24 h-24 object-cover rounded-full" />
            <p className="font-semibold text-sm text-white pt-4">{name}</p>
            <p className="font-semibold text-sm text-secondary text-opacity-70">{position}</p>
        </div>
    )
}
