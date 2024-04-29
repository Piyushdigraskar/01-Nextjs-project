import Link from "next/link";

const details = [
    {
        id: 1,
        name: 'Yash',
        role: 'Senior Developer'
    },
    {
        id: 2,
        name: 'Vaibhav',
        role: 'Backend Developer'
    },
    {
        id: 3,
        name: 'Suresh',
        role: 'Frontend Developer'
    }

]

const AboutUs = () => {
    return (
        <ul>
            {details.map(item => (
                <li key={item.id}>
                    <Link href={`./aboutus/${item.id}`}>
                        <h1>{item.name}</h1>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default AboutUs;