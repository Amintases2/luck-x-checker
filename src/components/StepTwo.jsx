import {useQuery} from "react-query";
import axios from "axios";

async function checkStepTwo() {
    // const {data} = await axios.get(
    //     "https://jsonplaceholder.typicode.com/posts"
    // );
    const data = {
        user: 'user'
    }
    console.log(data)
    return data;
}


export default function StepTwo() {

    const {data, isLoading, refetch} = useQuery("user", checkStepTwo, {enabled: false});

    return (
        <>
            <ul className="shag" id="task-list">
                <li style={{margin: '15px 0px'}}>
                    <input disabled={true} defaultChecked={data && true}  type="checkbox" className="custom-checkbox" id="task-b"/>
                    <label htmlFor="task-b"> Шаг 2. Зарегистрируйтесь на Luck-X</label>
                </li>

                <div className="btnall">
                    <a>
                        <button id="registration-onewin-id" className="button1">Регистрация Luck-X</button>
                    </a>
                </div>
            </ul>

            <p id="confirm-registration" className="shag" style={{textAlign: 'center'}}>Подтвердите
                регистрацию через
                ID</p>
            <div className="btnall">
                <ul>
                    <li>
                        <input className="input1" placeholder="3788531" type="text" id="onewin-id-input"/>
                        <button onClick={() => refetch()} style={{marginTop: '10px'}}
                                className={data ? 'button2' : 'button1'}
                                id="check-onewin-id"> {data ? 'Авторизован' : 'Проверить ID'}
                        </button>
                        <p id="onewin-id-result"></p>
                    </li>

                </ul>
            </div>
            <div id="task-b-message">
                <center>
                    <button className="button2" id="success-enter-id"
                            style={{color: 'rgb(40, 215, 53)', display: 'none'}}></button>
                </center>

                <p className="shag" style={{textAlign: 'center'}}> Получите ваучер на 20-300 рублей </p>

                <div id="task-c-voucher">
                    <div className="btnall">
                        <button className="button1" type="submit" id="registration-success">Открыть ваучер
                        </button>
                    </div>
                </div>

            </div>

            <hr/>
        </>
    )
}