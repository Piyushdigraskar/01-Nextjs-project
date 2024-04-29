import { useRouter } from "next/router";

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
const NamePage = () => {

    const router = useRouter();

    const devloperId = router.query.devloperid;

    const developer = details.find(dev => dev.id === parseInt(devloperId));

    if(!developer){
        return <h2>Developer not found</h2>
    }


    return <div>
        <h2>name: {developer.name}</h2>
        <p>role: {developer.role}</p>
    </div>
}

export default NamePage;