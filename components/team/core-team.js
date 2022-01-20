export default function CoreTeam({ name, image, position }) {
    return (
        <div className="text-center flex flex-col justify-center items-center py-7">
            <img src={image} alt={name} className="w-24 h-24 object-cover rounded-full" />
            <p className="font-semibold text-sm text-white pt-4">Marvin McKinney</p>
            <p className="font-semibold text-sm text-secondary text-opacity-70">{position}</p>
        </div>
    )
}
