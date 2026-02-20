
    // "id": 0,
    // "firstName": "Daenerys",
    // "lastName": "Targaryen",
    // "fullName": "Daenerys Targaryen",
    // "title": "Mother of Dragons",
    // "family": "House Targaryen",
    // "image": "daenerys.jpg",
    // "imageUrl": "https://thronesapi.com/assets/images/daenerys.jpg"

function Character({character}) {   

const {fullName,title,family,imageUrl} = character;

  return (
    <li className="bg-white hover:shadow-gray-800 rounded shadow-md min-w-1/3 max-w-md overflow-hidden">
        <div className="w-full h-56"><img className="w-full h-56 object-cover" src={imageUrl} /></div>
        <div className="p-4">
            <p className="text-lg font-semibold">{fullName}</p>
            <p><span className="font-semibold">Title:</span> {title}</p>
            <p><span className="font-semibold">Family:</span> {family}</p>
        </div>
    </li>
  )
}

export default Character