import {useQuery} from "react-query";

async function checkStepOne(){
    // const {data} = await axios.get(
    //     "https://jsonplaceholder.typicode.com/posts"
    // );
    const data = {
        user: 'user'
    }
    console.log(data)
    return data;
}


export default function StepOne() {

    const {data, isLoading, refetch} = useQuery("telegram", checkStepOne, {enabled: false});

    return (
        <>
            <ul className="shag">
                <li>
                    <input type="checkbox" className="custom-checkbox" id="task-a"/>
                    <label htmlFor="task-a"> Шаг 1. Авторизируйтесь через Telegram </label>
                </li>
            </ul>
            <div className="btnall">
                <a>
                    <button id="registration-onewin-id" className="button1">Авторизоваться</button>
                </a></div>
            <p style={{textAlign: 'center'}}>Перейдите в бота и отправьте /start</p>
            <hr/>
        </>
    )
}