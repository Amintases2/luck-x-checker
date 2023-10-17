export default function StepThree() {
    return (
        <>
            <ul className="shag" id="task-list">
                <li style={{margin: '15px 0px'}}>
                    <input className="custom-checkbox" type="checkbox" id="task-d"/>
                    <label htmlFor="task-d"> Шаг 3. Сделайте депозит от 199 рублей </label>
                </li>
            </ul>
            <div id="task-d-message">

                <div className="btnall">
                    <button className="button1" type="submit" id="check-deposit">Проверить депозит</button>
                </div>

            </div>
            <p className="shag" style={{textAlign: 'center'}}> Получите ваучер на 200-1000 рублей </p>
            <div id="task-d-voucher">

                <div className="btnall">
                    <button style={{marginBottom: '15px'}} className="button1" type="submit"
                            id="get-deposit-voucher">Открыть
                        ваучер
                    </button>
                </div>

            </div>
        </>
    )
}