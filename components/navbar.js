
export default function Navbar({course}) {
    return (
        <div>
            <div>
                {course.map((c, i) => (
                    <h1 key={i}>{c.c_name}</h1>
                ))}
            </div>
        </div>
    );
}